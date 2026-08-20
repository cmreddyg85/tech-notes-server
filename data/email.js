const emailData = [
  {
    subject:
      "Bank Account Statement – Pothabathula S Ram Kumar – XXXX5649 – 01/01/2022 to 31/12/2022",
    rowDate: null,
    senderName: "IOB eServices",
    senderEmail: "eservices@iob.in",
    headerDateTime: null,
    logo: "https://lh3.googleusercontent.com/a-/ALV-UjW8d_wC5A5sLI8PQp9NeoyI_JocPZyhEW028Ee0qmfjfuSVF7UR=s80-p",
    //popup details
    date: null,
    mailedBy: "iob.in",
    signedBy: "iob.in",
    textReplacements: [
      { find: "y.nikhileswarreddy@gmail.com", replace: "eservices@iob.in" },
      { find: "Nikki Nikki", replace: "IOB eServices" },
      {
        find: "Sat, Jun 27, 2026 at 12:15 AM",
        replace: "Sat, Jun 22, 12:15 AM",
      },
      {
        find: "Sat, Jun 27, 12:15 AM (1 day ago)",
        replace: "Sat, Jun 22, 12:15 AM",
      },
      {
        find: "Jun 27, 2026, 12:15 AM",
        replace: "Sat, Jun 22, 12:15 AM",
      },
    ],
  },
  {
    subject:
      "Bank Account Statement – Pothabathula S Ram Kumar – XXXX5649 – 01/01/2022 to 31/12/2022",
    rowDate: "May 15",
    textReplacements: [
      {
        find: "Sat, Jun 27, 4:50 AM (1 day ago)",
        replace: "Fri, May 15, 10:30 AM",
      },
      {
        find: "Jun 27, 2026, 4:50 AM",
        replace: "Fri, May 15, 10:30 AM",
      },
      {
        find: "Sat, Jun 27, 2026 at 4:50 AM",
        replace: "Fri, May 15, 10:30 AM",
      },
    ],
  },
];

module.exports = {
  emailData,
};

// const emailData = [
//   {
//     subject:
//       "Bank Account Statement – Pothabathula S Ram Kumar – XXXX5649 – 01/01/2022 to 31/12/20221",
//     rowDate: null,
//     senderName: "IOB eServices",
//     senderEmail: "eservices@iob.in",
//     headerDateTime: null,
//     //popup details
//     date: null,
//     mailedBy: "iob.in",
//     signedBy: "iob.in",
//     textReplacements: [
//       { find: "y.nikhileswarreddy@gmail.com", replace: "eservices@iob.in" },
//       { find: "Nikki Nikki", replace: "IOB eServices" },
//       {
//         find: "Sat, Jun 27, 2026 at 12:15 AM",
//         replace: "Sat, Jun 22, 12:15 AM",
//       },
//       {
//         find: "Sat, Jun 27, 12:15 AM (1 day ago)",
//         replace: "Sat, Jun 22, 12:15 AM",
//       },
//       {
//         find: "Jun 27, 2026, 12:15 AM",
//         replace: "Sat, Jun 22, 12:15 AM",
//       },
//     ],
//   },
//   {
//     subject:
//       "Bank Account Statement – Pothabathula S Ram Kumar – XXXX5649 – 01/01/2022 to 31/12/2022",
//     rowDate: "May 15",
//     textReplacements: [
//       {
//         find: "Sat, Jun 27, 4:50 AM (1 day ago)",
//         replace: "Fri, May 15, 10:30 AM",
//       },
//       {
//         find: "Jun 27, 2026, 4:50 AM",
//         replace: "Fri, May 15, 10:30 AM",
//       },
//       {
//         find: "Sat, Jun 27, 2026 at 4:50 AM",
//         replace: "Fri, May 15, 10:30 AM",
//       },
//     ],
//   },
// ];
