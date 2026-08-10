const accountInfo = {
  accountName: "G JANARDHAN",
  accountNumber: "0436104000025744",
  branch: "TIRUPATHI",
  addressLine1: "DURGASAMUDHRAM (VILLAGE AND PO)",
  addressLine2: "TIRUPATHI RURAL, CHI",
  addressLine3: "AP, 517561",
  accountOpeningDate: "18-02-2011",
  accountStatus: "Active",
  currency: "INR",
  nominationRegistered: "Yes",
  ckycNumber: "30075258102008",
  solIdBranchCode: "436",
  branchAddress:
    "19-8-8D, A.I.R. ROAD, MARG, TIRUPATI, TIRUPATI, ANDHRAPRADESH, 517501",
  ifsCode: "IBKL0000436",
  branchEmailId: "IBKL0000436@idbi.co.in",
  nomineeName: "G GURAVA REDDY",
  nomineePercentage: "100",
  nomineeRelationship: "Father",
  fromDate: "",
  toDate: "",
};

const transactions = [
  {
    date: "01/08/2026 18:57:08",
    details: "NEFT-IN12621348583486-GOLLAPALLI CHANDRAMOULI REDD",
    amount: "12000.00",
    type: "Cr",
    balance: "27073.55",
  },
  {
    date: "31/07/2026 07:44:50 ",
    details: "HPCL LPG SUBSIDY-P072605D6F9BB",
    amount: "19.26",
    type: "Cr",
    balance: "15073.55",
  },
  {
    date: "25/07/2026 10:05:12 ",
    details: "nfs/KUPU CHANDRA PETA TIRUPATI APIN",
    amount: "500.00",
    type: "Dr",
    balance: "15054.29",
  },
  {
    date: "22/07/2026 18:21:55",
    details: "nfs/KUPU CHANDRA PETA TIRUPATI APIN",
    amount: "200.00",
    type: "Dr",
    balance: "15554.29",
  },
  {
    date: "22/07/2026 18:28:56 ",
    details: "nfs/KUPU CHANDRA PETA TIRUPATI APIN",
    amount: "1000.00",
    type: "Dr",
    balance: "15754.29",
  },
  {
    date: "06/07/2026 14:02:13",
    details: "ID043602/06-07-26 14:02:13/000000721432",
    amount: "4000.00",
    type: "Dr",
    balance: "16754.29",
  },
  {
    date: "01/07/2026 20:08:15",
    details: "ID043602/01-07-26 20:08:15/000000721002",
    amount: "7000.00",
    type: "Dr",
    balance: "20754.29",
  },
  {
    date: "01/07/2026 18:57:08",
    details: "NEFT-IN12618243994589-GOLLAPALLI CHANDRAMOULI REDD",
    amount: "12000.00",
    type: "Cr",
    balance: "27754.29",
  },
];

module.exports = {
  accountInfo,
  transactions,
};
