const LEFT_FIELD_LABELS = [
  ["Date of Statement", "dateOfStatement"],
  ["Clear Balance", "clearBalance"],
  ["Uncleared Amount", "unclearedAmount"],
  ["+MOD Bal", "modBalance"],
  ["Lien", "lien"],
  ["Limit", "limit"],
  ["Monthly Avg Balance", "monthlyAvgBalance"],
  ["Interest Rate", "interestRate"],
  ["Drawing Power", "drawingPower"],
  ["Account open Date", "accountOpenDate"],
  ["Statement From", "statementPeriod"],
];

const RIGHT_FIELD_LABELS = [
  ["Branch Code", "branchCode"],
  ["Branch Name", "branchName"],
  ["Branch Email ID", "branchEmail"],
  ["Branch Phone", "branchPhone"],
  ["CIF Number", "cifNumber"],
  ["Account Number", "accountNumberRaw"],
  ["Product", "product"],
  ["IFSC Code", "ifscCode"],
  ["Currency", "currency"],
  ["Account Status", "accountStatus"],
  ["CKYCR Number", "ckycrNumber"],
  ["MICR Code", "micrCode"],
  ["Nominee Name", "nomineeName"],
];

const LEFT_PREFIX_NOISE = new Set(["Account Summary", "STATEMENT OF ACCOUNT"]);
const RIGHT_PREFIX_NOISE = new Set(["State Bank of India"]);

const EMAIL_PATTERN = /\S+@\S+\.\S+/;
const PURE_DATE_PATTERN = /^\d{1,2}-\d{1,2}-\d{4}$/;

function isHeaderBannerLine(line) {
  return (
    /^As on\b/i.test(line) ||
    /^Welcome:/i.test(line) ||
    PURE_DATE_PATTERN.test(line)
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchLabel(line, labelList) {
  for (const [label, key] of labelList) {
    const regex = new RegExp(`^${escapeRegExp(label)}\\s*:\\s*(.*)$`);
    const match = line.match(regex);

    if (match) {
      return { key, value: match[1].trim() };
    }
  }

  return null;
}

function clusterLines(items) {
  const sorted = [...items].sort((a, b) => b.y - a.y || a.x - b.x);
  const lines = [];

  for (const item of sorted) {
    const last = lines[lines.length - 1];

    if (last && Math.abs(last.y - item.y) <= 3) {
      last.items.push(item);
      last.y = (last.y + item.y) / 2;
    } else {
      lines.push({ y: item.y, items: [item] });
    }
  }

  return lines.map((line) =>
    line.items
      .sort((a, b) => a.x - b.x)
      .map((item) => item.str)
      .join(" ")
      .trim(),
  );
}

function processLabeledColumn(lines, labelList) {
  const fields = {};
  const prefixLines = [];
  const lastLabelKey = labelList[labelList.length - 1][1];
  let started = false;
  let lastKey = null;

  for (const line of lines) {
    if (!line) {
      continue;
    }

    const match = matchLabel(line, labelList);

    if (match) {
      started = true;
      fields[match.key] = match.value;
      lastKey = match.key;

      if (match.key === lastLabelKey) {
        break;
      }

      continue;
    }

    if (!started) {
      prefixLines.push(line);
    } else if (lastKey) {
      fields[lastKey] = `${fields[lastKey]}${line}`;
    }
  }

  return { fields, prefixLines };
}

function extractCustomerBlock(prefixLines) {
  const relevant = prefixLines.filter(
    (line) => !LEFT_PREFIX_NOISE.has(line) && !isHeaderBannerLine(line),
  );
  const emailIndex = relevant.findIndex((line) => EMAIL_PATTERN.test(line));

  const customerName = relevant[0] || "";
  const email = emailIndex >= 0 ? relevant[emailIndex] : "";
  const address = relevant
    .filter((line, index) => index !== 0 && index !== emailIndex)
    .join(" ");

  return { customerName, email, address };
}

function extractBankBlock(prefixLines, customerName) {
  const relevant = prefixLines.filter(
    (line) =>
      !RIGHT_PREFIX_NOISE.has(line) &&
      line !== customerName &&
      !isHeaderBannerLine(line),
  );

  const district = relevant[0] || "";
  const bankAddress = relevant.slice(1).join(" ");

  return { district, bankAddress };
}

function splitStatementPeriod(rawValue) {
  const [fromPart, toPart] = (rawValue || "").split(/\s+to\s+/i);

  return {
    fromDate: fromPart ? fromPart.trim().replace(/-/g, "/") : "",
    toDate: toPart ? toPart.trim().replace(/-/g, "/") : "",
  };
}

function splitAccountNumber(rawValue) {
  const match = (rawValue || "").match(/^(\d+)(?:\s*\((.*)\))?$/);

  if (!match) {
    return { accountNumber: rawValue || "", accountTypeSuffix: "" };
  }

  return { accountNumber: match[1], accountTypeSuffix: match[2] || "" };
}

async function getPageTextItems(pdfDoc, pageNumber) {
  const page = await pdfDoc.getPage(pageNumber);
  const [x0, , x1] = page.view;
  const pageWidth = x1 - x0;
  const content = await page.getTextContent();

  const items = content.items
    .filter((item) => item.str && item.str.trim())
    .map((item) => ({
      str: item.str,
      x: item.transform[4],
      y: item.transform[5],
    }));

  return { items, pageWidth };
}

const getRandomDate = () => {
  const start = new Date("2015-01-01").getTime();
  const end = new Date("2019-12-31").getTime();

  const randomDate = new Date(start + Math.random() * (end - start));

  const day = String(randomDate.getDate()).padStart(2, "0");
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const year = randomDate.getFullYear();

  return `${day}/${month}/${year}`;
};

async function extractSbiAccountInfo(pdfBuffer, password, details = {}) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

  const loadingTask = pdfjsLib.getDocument({
    data: new Uint8Array(pdfBuffer),
    password: password || undefined,
    useSystemFonts: true,
  });

  let pdfDoc;

  try {
    pdfDoc = await loadingTask.promise;
  } catch (error) {
    if (error?.name === "PasswordException") {
      const needsPassword =
        error.code === pdfjsLib.PasswordResponses.NEED_PASSWORD;
      const wrappedError = new Error(
        needsPassword
          ? "This PDF is password protected. Provide the password."
          : "The password provided is incorrect.",
      );
      wrappedError.code = needsPassword
        ? "PASSWORD_REQUIRED"
        : "INVALID_PASSWORD";
      throw wrappedError;
    }

    if (error?.name === "InvalidPDFException") {
      const wrappedError = new Error("The uploaded file is not a valid PDF.");
      wrappedError.code = "INVALID_PDF";
      throw wrappedError;
    }

    throw error;
  }

  const { items, pageWidth } = await getPageTextItems(pdfDoc, 1);
  const midX = pageWidth / 2;

  const leftLines = clusterLines(items.filter((item) => item.x < midX));
  const rightLines = clusterLines(items.filter((item) => item.x >= midX));

  const left = processLabeledColumn(leftLines, LEFT_FIELD_LABELS);
  const right = processLabeledColumn(rightLines, RIGHT_FIELD_LABELS);

  const { customerName, email, address } = extractCustomerBlock(
    left.prefixLines,
  );
  const { district, bankAddress } = extractBankBlock(
    right.prefixLines,
    customerName,
  );
  const { fromDate, toDate } = splitStatementPeriod(
    left.fields.statementPeriod,
  );
  const { accountNumber, accountTypeSuffix } = splitAccountNumber(
    right.fields.accountNumberRaw,
  );

  await loadingTask.destroy();

  return {
    accountInfo: {
      customerName,
      email,
      address,
      clearBalance: "",
      // clearBalance: left.fields.clearBalance || "",
      unclearedAmount: left.fields.unclearedAmount || "",
      modBalance: left.fields.modBalance || "",
      lien: left.fields.lien || "",
      limit: left.fields.limit || "",
      monthlyAvgBalance: left.fields.monthlyAvgBalance || "",
      interestRate: left.fields.interestRate || "",
      drawingPower: left.fields.drawingPower || "",
      // accountOpenDate: left.fields.accountOpenDate || "",
      accountOpenDate: getRandomDate() || "",
      district,
      bankAddress,
      branchCode: right.fields.branchCode || "",
      branchName: right.fields.branchName || "",
      branchEmail: right.fields.branchEmail || "",
      branchPhone: right.fields.branchPhone || "",
      cifNumber: right.fields.cifNumber || "",
      accountNumber,
      accountTypeSuffix,
      product: right.fields.product || "",
      ifscCode: right.fields.ifscCode || "",
      currency: right.fields.currency || "",
      accountStatus: right.fields.accountStatus || "",
      ckycrNumber: right.fields.ckycrNumber || "",
      micrCode: right.fields.micrCode || "",
      nomineeName: right.fields.nomineeName || "",
      dateOfStatement: "",
      fromDate: "",
      toDate: "",
      // dateOfStatement: left.fields.dateOfStatement || "",
      // fromDate,
      // toDate,
      password: "",
    },
    numberOfCreditsTransactions: [1, 3],
    numberOfDebitsTransactions: [15, 20],
    balanceBeforeFromDate: 5122.96,
    balanceAfterToDate: left.fields.clearBalance
      ?.replace(/,/g, "")
      .replace(/CR$/i, ""),
    salaryDay: 5,
    nextWorkingDay: false,
    salaries: generateSalaryRanges(details) || [],
  };
}

function parseLooseJson(input) {
  if (input == null || input === "") {
    return {};
  }

  if (typeof input !== "string") {
    return input;
  }

  let text = input.trim();

  // Quote unquoted object keys, e.g. `hikeDate:` -> `"hikeDate":`
  text = text.replace(/([{,]\s*)([A-Za-z_$][A-Za-z0-9_$]*)(\s*:)/g, '$1"$2"$3');

  // Drop trailing commas before a closing `}` or `]`
  text = text.replace(/,(\s*[}\]])/g, "$1");

  try {
    return JSON.parse(text);
  } catch (error) {
    const wrappedError = new Error(
      `"details" is not valid JSON: ${error.message}`,
    );
    wrappedError.code = "INVALID_DETAILS";
    throw wrappedError;
  }
}

function generateSalaryRanges(dataText) {
  const data = parseLooseJson(dataText) || {};

  const {
    joiningDate,
    endDate,
    salary,
    text,
    hikeDetails = [],
    bankCode = "ICIN",
  } = data;

  if (!joiningDate || !endDate || !salary) {
    const wrappedError = new Error(
      '"details" must include joiningDate, endDate, and salary',
    );
    wrappedError.code = "INVALID_DETAILS";
    throw wrappedError;
  }

  const result = [];
  const baseSalary = Number(salary);

  // ---------------- Helpers ----------------

  const parseDate = (str) => {
    const [dd, mm, yyyy] = str.split("/");
    return new Date(yyyy, mm - 1, dd);
  };

  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const firstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);

  const lastDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const addMonths = (date, months) =>
    new Date(date.getFullYear(), date.getMonth() + months, 1);

  const daysInMonth = (date) => lastDayOfMonth(date).getDate();

  // ---------------- Dates ----------------

  const joinDate = parseDate(joiningDate);
  const exitDate = parseDate(endDate);

  // ---------------- First Salary Month ----------------

  const joinDay = joinDate.getDate();

  const firstSalaryMonth =
    joinDay <= 15
      ? addMonths(joinDate, 1) // next month
      : addMonths(joinDate, 2); // month after next

  // ---------------- Empty Range Before Joining ----------------

  result.push({
    from: formatDate(
      new Date(
        joinDate.getFullYear() - 1,
        joinDate.getMonth(),
        joinDate.getDate(),
      ),
    ),
    to: formatDate(lastDayOfMonth(addMonths(firstSalaryMonth, -1))),
    text: "",
    amount: "",
  });

  // ---------------- First Salary Credit ----------------

  const joinMonthDays = daysInMonth(joinDate);

  const workedDays = joinMonthDays - joinDay + 1;

  const proratedJoiningSalary = (baseSalary / joinMonthDays) * workedDays;

  let firstSalaryAmount;

  if (joinDay <= 15) {
    // next month credit => only joining month prorated
    firstSalaryAmount = proratedJoiningSalary;
  } else {
    // month after next credit =>
    // joining month prorated + full next month salary
    firstSalaryAmount = proratedJoiningSalary + baseSalary;
  }

  result.push({
    from: formatDate(firstDayOfMonth(firstSalaryMonth)),
    to: formatDate(lastDayOfMonth(firstSalaryMonth)),
    text,
    amount: firstSalaryAmount.toFixed(2),
    bankCode,
  });

  // ---------------- Salary Slabs ----------------

  const sortedHikes = [...hikeDetails].sort(
    (a, b) => parseDate(a.hikeDate) - parseDate(b.hikeDate),
  );

  let currentSalary = baseSalary;
  let currentStart = addMonths(firstSalaryMonth, 1);

  for (const hike of sortedHikes) {
    const hikeDate = parseDate(hike.hikeDate);

    result.push({
      from: formatDate(currentStart),
      to: formatDate(lastDayOfMonth(hikeDate)),
      text,
      amount: currentSalary.toFixed(2),
      bankCode,
    });

    currentSalary = Number(hike.HikeSalary);

    // hike applicable from next month
    currentStart = addMonths(hikeDate, 1);
  }

  // ---------------- Last Active Salary Slab ----------------

  result.push({
    from: formatDate(currentStart),
    to: formatDate(lastDayOfMonth(exitDate)),
    text,
    amount: currentSalary.toFixed(2),
    bankCode,
  });

  // ---------------- Final Settlement ----------------
  // Month after leaving

  const exitMonthDays = daysInMonth(exitDate);

  const finalSettlement = (currentSalary / exitMonthDays) * exitDate.getDate();

  const settlementMonth = addMonths(exitDate, 1);

  result.push({
    from: formatDate(firstDayOfMonth(settlementMonth)),
    to: formatDate(lastDayOfMonth(settlementMonth)),
    text,
    amount: finalSettlement.toFixed(2),
    bankCode,
  });

  // ---------------- Empty Range After Exit ----------------

  const emptyStart = addMonths(exitDate, 2);

  const todayMinus3 = new Date();
  todayMinus3.setDate(todayMinus3.getDate() - 3);

  if (emptyStart <= todayMinus3) {
    result.push({
      from: formatDate(firstDayOfMonth(emptyStart)),
      to: formatDate(todayMinus3),
      text: "",
      amount: "",
    });
  }

  return result;
}

module.exports = {
  extractSbiAccountInfo,
};
