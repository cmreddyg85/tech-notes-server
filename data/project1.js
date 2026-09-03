const numOfYears = 7;

const accountInfo = {
  customerName: "Mr. GURAVA REDDY GOLLAPALLI",
  email: "gchandramoulireddy@gmail.com",
  address:
    "S/O G RAMACHANDRA REDDY, DURGASAMUDRAM VILLAGE & POST, TIRUPATI RURAL, Chittoor, 517502",
  clearBalance: "7,27,126.78CR",
  unclearedAmount: "0.00",
  modBalance: "0.00",
  lien: "0.00",
  limit: "0.00",
  monthlyAvgBalance: "0.00",
  interestRate: "2.50 % p.a.",
  drawingPower: "0.00",
  accountOpenDate: "15/10/2001",
  district: "CHITTOOR DISTRICT",
  bankAddress: "RAMCHANDRAPURAM MANDAL, CHITTOOR DISTRICT, ANDHRA PRADESH",
  branchCode: "17801",
  branchName: "C RAMAPURAM",
  branchEmail: "SBI.17801@SBI.CO.IN",
  branchPhone: "9247501837",
  cifNumber: "80095989176",
  accountNumber: "10121074709",
  accountTypeSuffix: "Sr. Citizen",
  product: "REGULAR SB CHQ-INDIVIDUALS",
  ifscCode: "SBIN0017801",
  currency: "INR",
  accountStatus: "OPEN",
  ckycrNumber: "Not Available",
  micrCode: "517002021",
  nomineeName: "XXXXX",
  dateOfStatement: "29-08-2026",
  fromDate: "03/01/2020",
  toDate: "11/09/2025",
};
const transactions = [
  {
    Date: "03/01/2020",
    Narration:
      "TO TRANSFER- UPI/DR/978816909209/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "422.00",
    Credit: "",
    Balance: "5013.00",
  },
  {
    Date: "06/01/2020",
    Narration:
      "BY TRANSFER- UPI/CR/116983847859/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    isSalary: false,
    Debit: "",
    Credit: "2529.00",
    Balance: "7542.00",
  },
  {
    Date: "07/01/2020",
    Narration:
      "BY TRANSFER- UPI/CR/564614334823/Jampall y/YESB/paytmqr63f/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "953.00",
    Balance: "8495.00",
  },
  {
    Date: "07/01/2020",
    Narration:
      "TO TRANSFER- UPI/DR/543347079550/CHILUKUM/YESB/paytmqr5xq/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "954.00",
    Credit: "",
    Balance: "7541.00",
  },
  {
    Date: "11/01/2020",
    Narration: "TO TRANSFER- UPI/DR/538254496024/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2578.00",
    Credit: "",
    Balance: "4963.00",
  },
  {
    Date: "13/01/2020",
    Narration:
      "BY TRANSFER- UPI/CR/797103626356/BURUG U R/ICIC/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "779.00",
    Balance: "5742.00",
  },
  {
    Date: "14/01/2020",
    Narration:
      "TO TRANSFER- UPI/DR/035427645862/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2363.00",
    Credit: "",
    Balance: "3379.00",
  },
  {
    Date: "16/01/2020",
    Narration:
      "TO TRANSFER- UPI/DR/505963809718/GURRAM R/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "479.00",
    Credit: "",
    Balance: "2900.00",
  },
  {
    Date: "18/01/2020",
    Narration:
      "TO TRANSFER- UPI/DR/641295182667/SHREEGO/HDFC/Vyapar.170/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "717.00",
    Credit: "",
    Balance: "2183.00",
  },
  {
    Date: "23/01/2020",
    Narration:
      "TO TRANSFER- UPI/DR/483086905832/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "846.00",
    Credit: "",
    Balance: "1337.00",
  },
  {
    Date: "25/01/2020",
    Narration:
      "TO TRANSFER- UPI/DR/690604563558/MANALAZ/HDFC/Vyapar.171/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "427.00",
    Credit: "",
    Balance: "910.00",
  },
  {
    Date: "05/02/2020",
    Narration:
      "BY TRANSFER- UPI/CR/548599081975/Upparap u/SBIN/9866308659/Paid-",
    Ref: "TRANSFER FROM 4897732162091",
    isSalary: false,
    Debit: "",
    Credit: "2116.00",
    Balance: "3026.00",
  },
  {
    Date: "07/02/2020",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "206.00",
    Balance: "3232.00",
  },
  {
    Date: "08/02/2020",
    Narration:
      "TO TRANSFER- UPI/DR/501256485687/SAIDARE/YESB/paytm.s15e/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "176.00",
    Credit: "",
    Balance: "3056.00",
  },
  {
    Date: "10/02/2020",
    Narration:
      "TO TRANSFER- UPI/DR/514580296413/HEMAADRI/YESB/q747892873/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1192.00",
    Credit: "",
    Balance: "1864.00",
  },
  {
    Date: "10/02/2020",
    Narration:
      "TO TRANSFER- UPI/DR/539406841975/Jayanthi/UTIB/gpay-11253/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "205.00",
    Credit: "",
    Balance: "1659.00",
  },
  {
    Date: "12/02/2020",
    Narration:
      "BY TRANSFER- UPI/CR/026595126643/NANDI M/KKBK/8499969647/Payme-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "842.00",
    Balance: "2501.00",
  },
  {
    Date: "16/02/2020",
    Narration:
      "BY TRANSFER- UPI/CR/992127202418/MR RAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "488.00",
    Balance: "2989.00",
  },
  {
    Date: "16/02/2020",
    Narration:
      "TO TRANSFER- UPI/DR/670822932755/Annpurna/YESB/paytmqr1ij/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2381.00",
    Credit: "",
    Balance: "608.00",
  },
  {
    Date: "17/02/2020",
    Narration:
      "TO TRANSFER- UPI/DR/958938668761/ANIQUNI/YESB/paytmqr5yo/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "75.00",
    Credit: "",
    Balance: "533.00",
  },
  {
    Date: "25/02/2020",
    Narration:
      "TO TRANSFER- UPI/DR/468259783982/Mohammed/YESB/paytm.s14f/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "147.00",
    Credit: "",
    Balance: "386.00",
  },
  {
    Date: "26/02/2020",
    Narration:
      "TO TRANSFER- UPI/DR/248667894231/ANIQUNI/YESB/paytmqr5yo/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "184.00",
    Credit: "",
    Balance: "202.00",
  },
  {
    Date: "27/02/2020",
    Narration: "TO TRANSFER- UPI/DR/755562507324/Mr PATL/YESB/BHARATPE9B/Payt-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "111.00",
    Credit: "",
    Balance: "91.00",
  },
  {
    Date: "05/03/2020",
    Narration:
      "BY TRANSFER- UPI/CR/336952227376/MR RAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER FROM 4897733162090",
    isSalary: false,
    Debit: "",
    Credit: "1569.00",
    Balance: "1660.00",
  },
  {
    Date: "07/03/2020",
    Narration: "TO TRANSFER- UPI/DR/512531956914/slice/N ESF/borrowrepa/UPI-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "114.00",
    Credit: "",
    Balance: "1546.00",
  },
  {
    Date: "08/03/2020",
    Narration:
      "TO TRANSFER- UPI/DR/521397236304/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "116.00",
    Credit: "",
    Balance: "1430.00",
  },
  {
    Date: "09/03/2020",
    Narration:
      "TO TRANSFER- UPI/DR/277198008551/Srinivas/UTIB/gpay-11246/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "195.00",
    Credit: "",
    Balance: "1235.00",
  },
  {
    Date: "16/03/2020",
    Narration:
      "TO TRANSFER- UPI/DR/899254388678/GATTUKO/YESB/Q924742097/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "641.00",
    Credit: "",
    Balance: "594.00",
  },
  {
    Date: "20/03/2020",
    Narration:
      "TO TRANSFER- UPI/DR/466437896761/KISHO RE /YESB/Q149305646/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "494.00",
    Credit: "",
    Balance: "100.00",
  },
  {
    Date: "25/03/2020",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "204.17",
    Balance: "304.17",
  },
  {
    Date: "27/03/2020",
    Narration:
      "BY TRANSFER- UPI/CR/095066501887/YEDAM ALA/TSAB/7207996114/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "358.00",
    Balance: "662.17",
  },
  {
    Date: "01/04/2020",
    Narration:
      "BY TRANSFER- UPI/CR/992127202418/MR RAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "517.00",
    Balance: "1179.17",
  },
  {
    Date: "06/04/2020",
    Narration:
      "BY TRANSFER- UPI/CR/122271194284/BURUG U  /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    isSalary: false,
    Debit: "",
    Credit: "2081.00",
    Balance: "3260.17",
  },
  {
    Date: "09/04/2020",
    Narration: "TO TRANSFER- UPI/DR/500676372477/GEDDITC/YESB/paytm-8385/Sent-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1691.00",
    Credit: "",
    Balance: "1569.17",
  },
  {
    Date: "10/04/2020",
    Narration:
      "TO TRANSFER- UPI/DR/548372326309/MOHAMMED/YESB/paytmqr66o/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "785.00",
    Credit: "",
    Balance: "784.17",
  },
  {
    Date: "12/04/2020",
    Narration:
      "TO TRANSFER- UPI/DR/512021176564/MR MD RA/YESB/paytmqr67o/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "369.00",
    Credit: "",
    Balance: "415.17",
  },
  {
    Date: "19/04/2020",
    Narration: "TO TRANSFER- UPI/DR/509547001071/slice/N ESF/repayments/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "103.00",
    Credit: "",
    Balance: "312.17",
  },
  {
    Date: "01/05/2020",
    Narration:
      "BY TRANSFER- UPI/CR/452352234892/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "774.00",
    Balance: "1086.17",
  },
  {
    Date: "04/05/2020",
    Narration:
      "TO TRANSFER- UPI/DR/353131640071/ASAGARI/BARB/mddaud14@a/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "565.00",
    Credit: "",
    Balance: "521.17",
  },
  {
    Date: "05/05/2020",
    Narration: "BY TRANSFER- UPI/CR/509319682855/MYAKALA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    isSalary: false,
    Debit: "",
    Credit: "1429.00",
    Balance: "1950.17",
  },
  {
    Date: "06/05/2020",
    Narration:
      "TO TRANSFER- UPI/DR/240027684624/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "88.00",
    Credit: "",
    Balance: "1862.17",
  },
  {
    Date: "10/05/2020",
    Narration:
      "BY TRANSFER- UPI/CR/104631432520/BURUG U /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "610.00",
    Balance: "2472.17",
  },
  {
    Date: "10/05/2020",
    Narration: "TO TRANSFER- UPI/DR/511199152524/AMERMOH/YESB/paytm.s1cz/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1914.00",
    Credit: "",
    Balance: "558.17",
  },
  {
    Date: "16/05/2020",
    Narration: "TO TRANSFER- UPI/DR/502174865195/GoogleI/utib/playstore-/UPI-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "82.00",
    Credit: "",
    Balance: "476.17",
  },
  {
    Date: "23/05/2020",
    Narration:
      "TO TRANSFER- UPI/DR/204571529971/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "43.00",
    Credit: "",
    Balance: "433.17",
  },
  {
    Date: "29/05/2020",
    Narration:
      "BY TRANSFER- UPI/CR/856399063966/YALLA VI/ICIC/9676140884/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "976.00",
    Balance: "1409.17",
  },
  {
    Date: "29/05/2020",
    Narration:
      "TO TRANSFER- UPI/DR/572026437025/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "99.00",
    Credit: "",
    Balance: "1310.17",
  },
  {
    Date: "02/06/2020",
    Narration: "BY TRANSFER- UPI/CR/517850737199/Eluri D/SBIN/vinodpotti/UPI-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "863.00",
    Balance: "2173.17",
  },
  {
    Date: "04/06/2020",
    Narration:
      "TO TRANSFER- UPI/DR/971832837583/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1659.00",
    Credit: "",
    Balance: "514.17",
  },
  {
    Date: "05/06/2020",
    Narration:
      "BY TRANSFER- UPI/CR/509780864837/slice/N ESF/sliceborro/BWe5c969-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "749.00",
    Balance: "1263.17",
  },
  {
    Date: "05/06/2020",
    Narration: "TO TRANSFER- UPI/DR/502992790164/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "338.00",
    Credit: "",
    Balance: "925.17",
  },
  {
    Date: "05/06/2020",
    Narration:
      "BY TRANSFER- UPI/CR/509780864837/slice/N ESF/sliceborro/BWe5c969-",
    Ref: "TRANSFER FROM 4897733162090",
    isSalary: false,
    Debit: "",
    Credit: "1601.00",
    Balance: "2526.17",
  },
  {
    Date: "06/06/2020",
    Narration:
      "TO TRANSFER- UPI/DR/500442343767/Zepto/AIRP/zepto36581/Sent usi-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "601.00",
    Credit: "",
    Balance: "1925.17",
  },
  {
    Date: "18/06/2020",
    Narration:
      "TO TRANSFER- UPI/DR/982124911751/SRIVINAY/YESB/paytmqr6ah/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "173.00",
    Credit: "",
    Balance: "1752.17",
  },
  {
    Date: "18/06/2020",
    Narration:
      "TO TRANSFER- UPI/DR/811101239622/MYAKALA/SBIN/7337403171/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1532.00",
    Credit: "",
    Balance: "220.17",
  },
  {
    Date: "20/06/2020",
    Narration:
      "BY TRANSFER- UPI/CR/440665217457/RAJAP ETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "918.00",
    Balance: "1138.17",
  },
  {
    Date: "21/06/2020",
    Narration:
      "TO TRANSFER- UPI/DR/367355925683/MRRAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "982.00",
    Credit: "",
    Balance: "156.17",
  },
  {
    Date: "25/06/2020",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "116.33",
    Balance: "272.50",
  },
  {
    Date: "03/07/2020",
    Narration:
      "BY TRANSFER- UPI/CR/472488679103/MR RAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "821.00",
    Balance: "1093.50",
  },
  {
    Date: "06/07/2020",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN20888464562*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "18578.00",
    Balance: "19671.50",
  },
  {
    Date: "07/07/2020",
    Narration: "TO TRANSFER- UPI/DR/500854297724/NARESHK/YESB/paytmqr5z2/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "748.00",
    Credit: "",
    Balance: "18923.50",
  },
  {
    Date: "08/07/2020",
    Narration:
      "BY TRANSFER- UPI/CR/509733491635/slice/N ESF/sliceborro/BWb5913c-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "566.00",
    Balance: "19489.50",
  },
  {
    Date: "08/07/2020",
    Narration:
      "TO TRANSFER- UPI/DR/505959112967/Hanuman /ICIC/gpay-11220/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "61.00",
    Credit: "",
    Balance: "19428.50",
  },
  {
    Date: "15/07/2020",
    Narration:
      "TO TRANSFER- UPI/DR/795281720014/MARGAM G/FDRL/9989647658/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1737.00",
    Credit: "",
    Balance: "17691.50",
  },
  {
    Date: "16/07/2020",
    Narration:
      "TO TRANSFER- UPI/DR/755427076991/HASITHA/UTIB/gpay-11255/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "13700.00",
    Credit: "",
    Balance: "3991.50",
  },
  {
    Date: "17/07/2020",
    Narration: "TO TRANSFER- UPI/DR/502007985320/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2464.00",
    Credit: "",
    Balance: "1527.50",
  },
  {
    Date: "25/07/2020",
    Narration:
      "TO TRANSFER- UPI/DR/638059432439/PINTUPA/YESB/paytmqr5xn/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "518.00",
    Credit: "",
    Balance: "1009.50",
  },
  {
    Date: "26/07/2020",
    Narration:
      "TO TRANSFER- UPI/DR/243793513476/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "423.00",
    Credit: "",
    Balance: "586.50",
  },
  {
    Date: "30/07/2020",
    Narration:
      "TO TRANSFER- UPI/DR/770811067074/ASEEMA B/YESB/paytm.s141/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "57.00",
    Credit: "",
    Balance: "529.50",
  },
  {
    Date: "03/08/2020",
    Narration:
      "BY TRANSFER- UPI/CR/026595126643/NANDI M/KKBK/8499969647/Payme-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "863.00",
    Balance: "1392.50",
  },
  {
    Date: "05/08/2020",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN20769060717*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34177.50",
  },
  {
    Date: "08/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/468259783982/Mohammed/YESB/paytm.s14f/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "7953.00",
    Credit: "",
    Balance: "26224.50",
  },
  {
    Date: "09/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/548156046816/AKSHANTH/YESB/q463233814/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "40.00",
    Credit: "",
    Balance: "26184.50",
  },
  {
    Date: "09/08/2020",
    Narration: "TO TRANSFER- UPI/DR/505844326745/JyothiK/UTIB/gpay-11245/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "763.00",
    Credit: "",
    Balance: "25421.50",
  },
  {
    Date: "12/08/2020",
    Narration: "TO TRANSFER- UPI/DR/538482171534/RAJAPETA/HDFC/bhargavnan/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "4079.00",
    Credit: "",
    Balance: "21342.50",
  },
  {
    Date: "13/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/490243513763/Thoshala/YESB/paytmqr6eg/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "374.00",
    Credit: "",
    Balance: "20968.50",
  },
  {
    Date: "14/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/501256485687/SAIDARE/YESB/paytm.s15e/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "335.00",
    Credit: "",
    Balance: "20633.50",
  },
  {
    Date: "14/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/676456075051/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "12800.00",
    Credit: "",
    Balance: "7833.50",
  },
  {
    Date: "15/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/515594048529/Amazon P/RATN/amazonpayb/Reque-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1611.00",
    Credit: "",
    Balance: "6222.50",
  },
  {
    Date: "15/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/447835607120/SURARAM/YESB/paytmqr663/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "89.00",
    Credit: "",
    Balance: "6133.50",
  },
  {
    Date: "18/08/2020",
    Narration:
      "BY TRANSFER- UPI/CR/326959929083/RAJAP ETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "875.00",
    Balance: "7008.50",
  },
  {
    Date: "18/08/2020",
    Narration:
      "BY TRANSFER- UPI/CR/508591211930/INNOVATI/ICIC/cf.innovat/refun-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "207.00",
    Balance: "7215.50",
  },
  {
    Date: "20/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/971832837583/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1876.00",
    Credit: "",
    Balance: "5339.50",
  },
  {
    Date: "26/08/2020",
    Narration:
      "TO TRANSFER- UPI/DR/468074794399/SRISUBR/YESB/paytmqr1h5/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2975.00",
    Credit: "",
    Balance: "2364.50",
  },
  {
    Date: "01/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/704898664925/PULKAMN/SBIN/naveenpate/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "705.00",
    Credit: "",
    Balance: "1659.50",
  },
  {
    Date: "05/09/2020",
    Narration:
      "BY TRANSFER- UPI/CR/926973688030/RAJAP ETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "417.00",
    Balance: "2076.50",
  },
  {
    Date: "06/09/2020",
    Narration:
      "BY TRANSFER- UPI/CR/507978516421/Myakal a /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "311.00",
    Balance: "2387.50",
  },
  {
    Date: "06/09/2020",
    Narration: "TO TRANSFER- UPI/DR/500967068438/GEDDITC/YESB/paytm-8385/UPI-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "403.00",
    Credit: "",
    Balance: "1984.50",
  },
  {
    Date: "06/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/481418798274/SAIDARE/YESB/paytm.s15e/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1815.00",
    Credit: "",
    Balance: "169.50",
  },
  {
    Date: "07/09/2020",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN20316098210*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "32954.50",
  },
  {
    Date: "14/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/676456075051/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1130.00",
    Credit: "",
    Balance: "31824.50",
  },
  {
    Date: "17/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/672308111646/PULKAM /KKBK/6303798573/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "3624.00",
    Credit: "",
    Balance: "28200.50",
  },
  {
    Date: "19/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/123901504672/Farahath/YESB/paytmqr6kc/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "156.00",
    Credit: "",
    Balance: "28044.50",
  },
  {
    Date: "19/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/404870258412/KOLIPAKA/YESB/Q42825098@/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "5775.00",
    Credit: "",
    Balance: "22269.50",
  },
  {
    Date: "20/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/548599069536/Upparapu/SBIN/9866308659/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2998.00",
    Credit: "",
    Balance: "19271.50",
  },
  {
    Date: "21/09/2020",
    Narration: "ATM WDL-ATM CASH 6131 MOTH NAGAR 2HYDERABAD-",
    Ref: "",
    Debit: "12000.00",
    Credit: "",
    Balance: "7271.50",
  },
  {
    Date: "22/09/2020",
    Narration: "TO TRANSFER- UPI/DR/166513150025/BOINIR/YESB/Q627221314/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "4592.00",
    Credit: "",
    Balance: "2679.50",
  },
  {
    Date: "25/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/400490534692/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "218.00",
    Credit: "",
    Balance: "2461.50",
  },
  {
    Date: "25/09/2020",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "225.19",
    Balance: "2686.69",
  },
  {
    Date: "28/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/549819675312/CHALO CH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "68.00",
    Credit: "",
    Balance: "2618.69",
  },
  {
    Date: "28/09/2020",
    Narration:
      "TO TRANSFER- UPI/DR/539408564375/A1BAKERY/YESB/paytmqr1bt/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "436.00",
    Credit: "",
    Balance: "2182.69",
  },
  {
    Date: "05/10/2020",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN20462601320*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34967.69",
  },
  {
    Date: "07/10/2020",
    Narration: "ATM WDL-ATM CASH 91816 THRRGALAGUTTAPALLI KARKARIMNAGAR-",
    Ref: "",
    Debit: "12000.00",
    Credit: "",
    Balance: "22967.69",
  },
  {
    Date: "12/10/2020",
    Narration:
      "TO TRANSFER- UPI/DR/608405169418/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "16300.00",
    Credit: "",
    Balance: "6667.69",
  },
  {
    Date: "13/10/2020",
    Narration:
      "TO TRANSFER- UPI/DR/730689737010/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2677.00",
    Credit: "",
    Balance: "3990.69",
  },
  {
    Date: "15/10/2020",
    Narration:
      "BY TRANSFER- UPI/CR/513592798522/BURUG U  /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "301.00",
    Balance: "4291.69",
  },
  {
    Date: "15/10/2020",
    Narration: "TO TRANSFER- UPI/DR/501079697254/MAbhina/YESB/paytmqr60o/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "91.00",
    Credit: "",
    Balance: "4200.69",
  },
  {
    Date: "16/10/2020",
    Narration:
      "TO TRANSFER- UPI/DR/626483944655/Classic/YESB/paytm-8806/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2062.00",
    Credit: "",
    Balance: "2138.69",
  },
  {
    Date: "23/10/2020",
    Narration:
      "TO TRANSFER- UPI/DR/894588990347/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2090.00",
    Credit: "",
    Balance: "48.69",
  },
  {
    Date: "25/10/2020",
    Narration:
      "BY TRANSFER- UPI/CR/548599069536/Upparap u/SBIN/9866308659/Paid-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "335.00",
    Balance: "383.69",
  },
  {
    Date: "28/10/2020",
    Narration:
      "TO TRANSFER- UPI/DR/145655790200/AKINABOI/YESB/Q224344190/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "44.00",
    Credit: "",
    Balance: "339.69",
  },
  {
    Date: "29/10/2020",
    Narration:
      "TO TRANSFER- UPI/DR/370880400595/MASTER T/UTIB/gpay-11225/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "134.00",
    Credit: "",
    Balance: "205.69",
  },
  {
    Date: "05/11/2020",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN20359156393*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "32990.69",
  },
  {
    Date: "09/11/2020",
    Narration: "TO TRANSFER- UPI/DR/538145132244/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "11000.00",
    Credit: "",
    Balance: "21990.69",
  },
  {
    Date: "11/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/942923110400/SRIGANE/YESB/paytmqr6cm/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "68.00",
    Credit: "",
    Balance: "21922.69",
  },
  {
    Date: "11/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/066155530426/KUNDURU /YESB/paytmqr6ao/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2458.00",
    Credit: "",
    Balance: "19464.69",
  },
  {
    Date: "12/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/481418798274/SAIDARE/YESB/paytm.s15e/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "736.00",
    Credit: "",
    Balance: "18728.69",
  },
  {
    Date: "14/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/269290076336/Eluri D/SBIN/7032321258/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1894.00",
    Credit: "",
    Balance: "16834.69",
  },
  {
    Date: "14/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/165539856029/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "103.00",
    Credit: "",
    Balance: "16731.69",
  },
  {
    Date: "15/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/545201028056/INNOVATI/ICIC/cf.innovat/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2407.00",
    Credit: "",
    Balance: "14324.69",
  },
  {
    Date: "19/11/2020",
    Narration: "TO TRANSFER- UPI/DR/502992791102/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "459.00",
    Credit: "",
    Balance: "13865.69",
  },
  {
    Date: "20/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/989661808356/NADIMIDO/KKBK/8897700559/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "990.00",
    Credit: "",
    Balance: "12875.69",
  },
  {
    Date: "22/11/2020",
    Narration: "BY TRANSFER- UPI/CR/507935158619/MYAKALA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "695.00",
    Balance: "13570.69",
  },
  {
    Date: "22/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/371353327970/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "3387.00",
    Credit: "",
    Balance: "10183.69",
  },
  {
    Date: "25/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/500442343767/Zepto/AIRP/zepto36581/Sent usi-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2767.00",
    Credit: "",
    Balance: "7416.69",
  },
  {
    Date: "26/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/933020638115/BuruguR/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2744.00",
    Credit: "",
    Balance: "4672.69",
  },
  {
    Date: "28/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/409729391656/EDLABHA/YESB/Q163435771/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "463.00",
    Credit: "",
    Balance: "4209.69",
  },
  {
    Date: "29/11/2020",
    Narration:
      "TO TRANSFER- UPI/DR/015099107368/KOLIPAKA/YESB/Q42825098@/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "445.00",
    Credit: "",
    Balance: "3764.69",
  },
  {
    Date: "03/12/2020",
    Narration:
      "BY TRANSFER- UPI/CR/452352234892/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "530.00",
    Balance: "4294.69",
  },
  {
    Date: "04/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/012872217438/THAMMIS/YESB/Q808936565/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "323.00",
    Credit: "",
    Balance: "3971.69",
  },
  {
    Date: "04/12/2020",
    Narration: "TO TRANSFER- UPI/DR/539508941936/KUMBHA/YESB/q423446934/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2104.00",
    Credit: "",
    Balance: "1867.69",
  },
  {
    Date: "05/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/551611165231/KRISHNAR/YESB/q536660402/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "94.00",
    Credit: "",
    Balance: "1773.69",
  },
  {
    Date: "05/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/860970563186/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1207.00",
    Credit: "",
    Balance: "566.69",
  },
  {
    Date: "07/12/2020",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN20320018925*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33351.69",
  },
  {
    Date: "09/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/508902893857/Jiosaavn/YESB/paytm-5239/Subsc-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1012.00",
    Credit: "",
    Balance: "32339.69",
  },
  {
    Date: "17/12/2020",
    Narration:
      "BY TRANSFER- UPI/CR/116983847859/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "973.00",
    Balance: "33312.69",
  },
  {
    Date: "17/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/143810312736/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2256.00",
    Credit: "",
    Balance: "31056.69",
  },
  {
    Date: "21/12/2020",
    Narration: "TO TRANSFER- UPI/DR/509581269668/slice/N ESF/repayments/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "201.00",
    Credit: "",
    Balance: "30855.69",
  },
  {
    Date: "22/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/214775815778/MohdMun/YESB/Q647081622/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "7895.00",
    Credit: "",
    Balance: "22960.69",
  },
  {
    Date: "25/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/683241814789/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "945.00",
    Credit: "",
    Balance: "22015.69",
  },
  {
    Date: "25/12/2020",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "224.89",
    Balance: "22240.58",
  },
  {
    Date: "26/12/2020",
    Narration:
      "BY TRANSFER- UPI/CR/507978516421/Myakal a /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "855.00",
    Balance: "23095.58",
  },
  {
    Date: "26/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/987958887840/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1904.00",
    Credit: "",
    Balance: "21191.58",
  },
  {
    Date: "27/12/2020",
    Narration: "TO TRANSFER- UPI/DR/502569500848/YAMARAG/YESB/paytmqr633/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "204.00",
    Credit: "",
    Balance: "20987.58",
  },
  {
    Date: "27/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/791257358836/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1974.00",
    Credit: "",
    Balance: "19013.58",
  },
  {
    Date: "29/12/2020",
    Narration: "TO TRANSFER- UPI/DR/545172448506/MS KESH/ICIC/eazypay.2r/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "5034.00",
    Credit: "",
    Balance: "13979.58",
  },
  {
    Date: "30/12/2020",
    Narration:
      "TO TRANSFER- UPI/DR/544597247338/Zepto/UTIB/cp.zepto13/payment-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "117.00",
    Credit: "",
    Balance: "13862.58",
  },
  {
    Date: "02/01/2021",
    Narration: "TO TRANSFER- UPI/DR/254193998001/ANILTH/SBIN/9618591996/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2184.00",
    Credit: "",
    Balance: "11678.58",
  },
  {
    Date: "03/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/538145405412/KOLIPAKA/YESB/q42825098@/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1002.00",
    Credit: "",
    Balance: "10676.58",
  },
  {
    Date: "03/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/718439956431/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1340.00",
    Credit: "",
    Balance: "9336.58",
  },
  {
    Date: "05/01/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN20655365826*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "42121.58",
  },
  {
    Date: "06/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/348683955495/KOLLAMA/BARB/kolla12345/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1851.00",
    Credit: "",
    Balance: "40270.58",
  },
  {
    Date: "06/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/508450137800/bigbasket/YESB/bigbasket1/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "6206.00",
    Credit: "",
    Balance: "34064.58",
  },
  {
    Date: "06/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/500662327962/AmazonP/UTIB/amazonpayb/Reque-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2668.00",
    Credit: "",
    Balance: "31396.58",
  },
  {
    Date: "06/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/917187888303/VISVESWA/SBIN/gurram.vis/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "6769.00",
    Credit: "",
    Balance: "24627.58",
  },
  {
    Date: "08/01/2021",
    Narration: "TO TRANSFER- UPI/DR/505736549602/VEMULA/YESB/bharatpe90/Pay T-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "16200.00",
    Credit: "",
    Balance: "8427.58",
  },
  {
    Date: "10/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/546544904385/Panchami/SBIN/panchami.p/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2593.00",
    Credit: "",
    Balance: "5834.58",
  },
  {
    Date: "14/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/409627715467/THOTA NA/BARB/7981008912/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2835.00",
    Credit: "",
    Balance: "2999.58",
  },
  {
    Date: "21/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/490243513763/Thoshala/YESB/paytmqr6eg/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1129.00",
    Credit: "",
    Balance: "1870.58",
  },
  {
    Date: "28/01/2021",
    Narration:
      "BY TRANSFER- UPI/CR/509268443192/slice/N ESF/sliceborro/BWe33969-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "712.00",
    Balance: "2582.58",
  },
  {
    Date: "31/01/2021",
    Narration:
      "TO TRANSFER- UPI/DR/799410347180/food court/INDB/bajajpay.6/Pay-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1070.00",
    Credit: "",
    Balance: "1512.58",
  },
  {
    Date: "05/02/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21331818170*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34297.58",
  },
  {
    Date: "07/02/2021",
    Narration:
      "BY TRANSFER- UPI/CR/725369534988/MR RAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "314.00",
    Balance: "34611.58",
  },
  {
    Date: "08/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/319508768864/CHAMARTH/SBIN/7013118441/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "7055.00",
    Credit: "",
    Balance: "27556.58",
  },
  {
    Date: "09/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/617580498790/GUNG URTH/UCBA/9951710185/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "165.00",
    Credit: "",
    Balance: "27391.58",
  },
  {
    Date: "10/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/545102616616/bigbasket/YESB/bigbasket1/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "882.00",
    Credit: "",
    Balance: "26509.58",
  },
  {
    Date: "10/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/209650912806/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "4409.00",
    Credit: "",
    Balance: "22100.58",
  },
  {
    Date: "11/02/2021",
    Narration: "TO TRANSFER- UPI/DR/500744108808/NARESHK/YESB/paytmqr5z2/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "7969.00",
    Credit: "",
    Balance: "14131.58",
  },
  {
    Date: "13/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/544597247338/Zepto/UTIB/cp.zepto13/payment-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2455.00",
    Credit: "",
    Balance: "11676.58",
  },
  {
    Date: "16/02/2021",
    Narration: "TO TRANSFER- UPI/DR/512858851841/ZEPTONOW/HDFC/zeptonow.e/Pay-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "6899.00",
    Credit: "",
    Balance: "4777.58",
  },
  {
    Date: "22/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/510069389161/PATHAN C/IBKL/7at9ti4z1n/fn7O-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "107.00",
    Credit: "",
    Balance: "4670.58",
  },
  {
    Date: "24/02/2021",
    Narration:
      "BY TRANSFER- UPI/CR/509397084469/Myakal a /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "872.00",
    Balance: "5542.58",
  },
  {
    Date: "26/02/2021",
    Narration: "TO TRANSFER- UPI/DR/511907418342/ANJUMBE/UNBA/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "763.00",
    Credit: "",
    Balance: "4779.58",
  },
  {
    Date: "26/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/544981475192/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "31.00",
    Credit: "",
    Balance: "4748.58",
  },
  {
    Date: "27/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/877353180224/MANDALA /YESB/Q981515407/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "587.00",
    Credit: "",
    Balance: "4161.58",
  },
  {
    Date: "28/02/2021",
    Narration:
      "TO TRANSFER- UPI/DR/198774103849/RAVIMOG/YESB/paytmqr66o/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "320.00",
    Credit: "",
    Balance: "3841.58",
  },
  {
    Date: "05/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/892817976995/Mittapal/SBIN/9640059203/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2367.00",
    Credit: "",
    Balance: "1474.58",
  },
  {
    Date: "05/03/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21125693348*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34259.58",
  },
  {
    Date: "11/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/176884494189/SURARAM/YESB/paytmqr68i/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "26600.00",
    Credit: "",
    Balance: "7659.58",
  },
  {
    Date: "13/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/544719361888/MR MD RA/YESB/paytmqr67o/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "186.00",
    Credit: "",
    Balance: "7473.58",
  },
  {
    Date: "14/03/2021",
    Narration: "BY TRANSFER- UPI/CR/8499969647/NANDI M/KKBK/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "888.00",
    Balance: "8361.58",
  },
  {
    Date: "14/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/513600728590/KUNDU RU /UNBA/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "179.00",
    Credit: "",
    Balance: "8182.58",
  },
  {
    Date: "14/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/085107925817/Thoshala/YESB/paytmqr64l/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "542.00",
    Credit: "",
    Balance: "7640.58",
  },
  {
    Date: "15/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/541994239577/ArunPatel/AIRP/3187918513/Pay-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "224.00",
    Credit: "",
    Balance: "7416.58",
  },
  {
    Date: "16/03/2021",
    Narration:
      "BY TRANSFER- UPI/CR/509733491635/slice/N ESF/sliceborro/BWb5913c-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "397.00",
    Balance: "7813.58",
  },
  {
    Date: "21/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/205019375034/GANESH  /INDB/BHARATPE.0/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "288.00",
    Credit: "",
    Balance: "7525.58",
  },
  {
    Date: "22/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/539408559062/A1BAKERY/YESB/paytmqr1bt/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "4913.00",
    Credit: "",
    Balance: "2612.58",
  },
  {
    Date: "25/03/2021",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "125.41",
    Balance: "2737.99",
  },
  {
    Date: "30/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/129589909758/Mr Banda/IDIB/bmbobbybmb/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "803.00",
    Credit: "",
    Balance: "1934.99",
  },
  {
    Date: "31/03/2021",
    Narration:
      "TO TRANSFER- UPI/DR/510069389161/PATHAN C/IBKL/7at9ti4z1n/fn7O-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "813.00",
    Credit: "",
    Balance: "1121.99",
  },
  {
    Date: "05/04/2021",
    Narration:
      "BY TRANSFER- UPI/CR/104631432520/BURUG U  /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "455.00",
    Balance: "1576.99",
  },
  {
    Date: "05/04/2021",
    Narration:
      "TO TRANSFER- UPI/DR/833603875709/Hyderaba/UTIB/HYDMETROIN/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "508.00",
    Credit: "",
    Balance: "1068.99",
  },
  {
    Date: "05/04/2021",
    Narration:
      "TO TRANSFER- UPI/DR/539408564375/A1BAKERY/YESB/paytmqr1bt/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "952.00",
    Credit: "",
    Balance: "116.99",
  },
  {
    Date: "05/04/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21607525288*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "32901.99",
  },
  {
    Date: "06/04/2021",
    Narration: "TO TRANSFER- UPI/DR/548322638060/Myakala/SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "445.00",
    Credit: "",
    Balance: "32456.99",
  },
  {
    Date: "12/04/2021",
    Narration:
      "TO TRANSFER- UPI/DR/123901504672/Farahath/YESB/paytmqr6kc/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "31500.00",
    Credit: "",
    Balance: "956.99",
  },
  {
    Date: "25/04/2021",
    Narration:
      "TO TRANSFER- UPI/DR/261046183894/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "615.00",
    Credit: "",
    Balance: "341.99",
  },
  {
    Date: "27/04/2021",
    Narration:
      "TO TRANSFER- UPI/DR/795625495778/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "156.00",
    Credit: "",
    Balance: "185.99",
  },
  {
    Date: "05/05/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21730810281*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "32970.99",
  },
  {
    Date: "07/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/508469142626/Rapido R/YESB/paytm-8128/Sent-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "969.00",
    Credit: "",
    Balance: "32001.99",
  },
  {
    Date: "08/05/2021",
    Narration: "TO TRANSFER- UPI/DR/545166333628/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "3881.00",
    Credit: "",
    Balance: "28120.99",
  },
  {
    Date: "10/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/504312172093/BURUGUR/PPIW/9652172933/Add M-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "124.00",
    Credit: "",
    Balance: "27996.99",
  },
  {
    Date: "14/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/259313972276/POSANI L/BARB/posan63048/Verif-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "563.00",
    Credit: "",
    Balance: "27433.99",
  },
  {
    Date: "14/05/2021",
    Narration: "TO TRANSFER- UPI/DR/538256700372/Duddala/YESB/paytmqr64m/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "409.00",
    Credit: "",
    Balance: "27024.99",
  },
  {
    Date: "15/05/2021",
    Narration:
      "BY TRANSFER- UPI/CR/720793400215/Google Pay/UTIB/googlepay@/UPI-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "215.00",
    Balance: "27239.99",
  },
  {
    Date: "15/05/2021",
    Narration: "ATM WDL-ATM CASH 82911 +OUTHBULLAPUR BR HYDERABAD-",
    Ref: "",
    Debit: "12000.00",
    Credit: "",
    Balance: "15239.99",
  },
  {
    Date: "17/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/799410347180/food court/INDB/bajajpay.6/Pay-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "741.00",
    Credit: "",
    Balance: "14498.99",
  },
  {
    Date: "18/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/508469142626/Rapido R/YESB/paytm-8128/Sent-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "459.00",
    Credit: "",
    Balance: "14039.99",
  },
  {
    Date: "19/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/500559372365/zeptonow/NSPB/cf.zeptono/Sent-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2493.00",
    Credit: "",
    Balance: "11546.99",
  },
  {
    Date: "19/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/285342502197/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "577.00",
    Credit: "",
    Balance: "10969.99",
  },
  {
    Date: "21/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/536929602810/slice/N ESF/repayments/Paymentf-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "276.00",
    Credit: "",
    Balance: "10693.99",
  },
  {
    Date: "28/05/2021",
    Narration:
      "TO TRANSFER- UPI/DR/545282653980/Pankaj K/YESB/paytm.s18s/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1964.00",
    Credit: "",
    Balance: "8729.99",
  },
  {
    Date: "02/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/773359509220/YALLAVI/KKBK/yalla.vard/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "551.00",
    Credit: "",
    Balance: "8178.99",
  },
  {
    Date: "06/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/566688227788/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "127.00",
    Credit: "",
    Balance: "8051.99",
  },
  {
    Date: "07/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/545200029596/bigbasket/YESB/bigbasket1/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "595.00",
    Credit: "",
    Balance: "7456.99",
  },
  {
    Date: "07/06/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21775874216*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "40241.99",
  },
  {
    Date: "08/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/340462254216/Mr ACHY/YESB/Q587700423/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "20500.00",
    Credit: "",
    Balance: "19741.99",
  },
  {
    Date: "11/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/915686858215/PULKAM /KKBK/6303798573/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "13700.00",
    Credit: "",
    Balance: "6041.99",
  },
  {
    Date: "12/06/2021",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "299.00",
    Balance: "6340.99",
  },
  {
    Date: "13/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/638607567981/VISHAL M/HDFC/vishalmega/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2656.00",
    Credit: "",
    Balance: "3684.99",
  },
  {
    Date: "14/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/269290076336/Eluri D/SBIN/7032321258/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1553.00",
    Credit: "",
    Balance: "2131.99",
  },
  {
    Date: "15/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/185417140950/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "323.00",
    Credit: "",
    Balance: "1808.99",
  },
  {
    Date: "16/06/2021",
    Narration: "TO TRANSFER- UPI/DR/500637147974/NARESHK/YESB/paytmqr5z2/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "154.00",
    Credit: "",
    Balance: "1654.99",
  },
  {
    Date: "18/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/510069389161/PATHAN C/IBKL/7at9ti4z1n/fn7O-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1127.00",
    Credit: "",
    Balance: "527.99",
  },
  {
    Date: "20/06/2021",
    Narration:
      "TO TRANSFER- UPI/DR/280311544305/SUTARAS/YESB/Q449293071/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "79.00",
    Credit: "",
    Balance: "448.99",
  },
  {
    Date: "25/06/2021",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "350.52",
    Balance: "799.51",
  },
  {
    Date: "02/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/020110921241/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "509.00",
    Credit: "",
    Balance: "290.51",
  },
  {
    Date: "04/07/2021",
    Narration:
      "BY TRANSFER- UPI/CR/501114980213/Rajapet a/SBIN/rajipetasr/UPI-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "530.00",
    Balance: "820.51",
  },
  {
    Date: "05/07/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21959601559*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33605.51",
  },
  {
    Date: "08/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/793489133002/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "9100.00",
    Credit: "",
    Balance: "24505.51",
  },
  {
    Date: "09/07/2021",
    Narration:
      "BY TRANSFER- UPI/CR/509780864837/slice/N ESF/sliceborro/BWe5c969-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "456.00",
    Balance: "24961.51",
  },
  {
    Date: "10/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/512858430468/Tata Play/YESB/paytm-5674/UPI-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "166.00",
    Credit: "",
    Balance: "24795.51",
  },
  {
    Date: "10/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/775525086053/LIMGAMPE/YESB/Q660345130/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "532.00",
    Credit: "",
    Balance: "24263.51",
  },
  {
    Date: "11/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/732125556982/PULKAM N/SBIN/naveenpate/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "651.00",
    Credit: "",
    Balance: "23612.51",
  },
  {
    Date: "11/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/139005262652/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "6392.00",
    Credit: "",
    Balance: "17220.51",
  },
  {
    Date: "11/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/546431420568/Keshav P/YESB/paytmqr12d/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "281.00",
    Credit: "",
    Balance: "16939.51",
  },
  {
    Date: "12/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/114043233312/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1055.00",
    Credit: "",
    Balance: "15884.51",
  },
  {
    Date: "15/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/830681675693/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2435.00",
    Credit: "",
    Balance: "13449.51",
  },
  {
    Date: "19/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/165497151349/Paramesh/UTIB/gpay-11246/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "353.00",
    Credit: "",
    Balance: "13096.51",
  },
  {
    Date: "21/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/509733673391/SelfKYC/YESB/paytm-7324/OidNO-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "195.00",
    Credit: "",
    Balance: "12901.51",
  },
  {
    Date: "22/07/2021",
    Narration:
      "BY TRANSFER- UPI/CR/502992984382/PULKA M N/SBIN/8096752729/UPI-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "425.00",
    Balance: "13326.51",
  },
  {
    Date: "22/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/319508768864/CHAMARTH/SBIN/7013118441/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "906.00",
    Credit: "",
    Balance: "12420.51",
  },
  {
    Date: "24/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/982124911751/SRIVINAY/YESB/paytmqr6ah/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "527.00",
    Credit: "",
    Balance: "11893.51",
  },
  {
    Date: "26/07/2021",
    Narration: "TO TRANSFER- UPI/DR/538256700372/Duddala/YESB/paytmqr64m/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "942.00",
    Credit: "",
    Balance: "10951.51",
  },
  {
    Date: "31/07/2021",
    Narration:
      "TO TRANSFER- UPI/DR/766353866065/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "7186.00",
    Credit: "",
    Balance: "3765.51",
  },
  {
    Date: "02/08/2021",
    Narration:
      "BY TRANSFER- UPI/CR/502992982539/PULKA M N/SBIN/8096752729/UPI-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "252.00",
    Balance: "4017.51",
  },
  {
    Date: "05/08/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21542556217*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "36802.51",
  },
  {
    Date: "07/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/253519777018/Ravula C/YESB/Q686781163/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1040.00",
    Credit: "",
    Balance: "35762.51",
  },
  {
    Date: "10/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/353131640071/ASAGARI/BARB/mddaud14@a/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "628.00",
    Credit: "",
    Balance: "35134.51",
  },
  {
    Date: "11/08/2021",
    Narration: "ATM WDL-ATM CASH 81551 +SR NAGAR OATM HYDERABAD-",
    Ref: "",
    Debit: "12000.00",
    Credit: "",
    Balance: "23134.51",
  },
  {
    Date: "14/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/543126789234/MD MAHAB/YESB/q301101075/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "6215.00",
    Credit: "",
    Balance: "16919.51",
  },
  {
    Date: "16/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/296285258056/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "929.00",
    Credit: "",
    Balance: "15990.51",
  },
  {
    Date: "17/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/821485989756/LINGAMPE/UBIN/lingampell/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "457.00",
    Credit: "",
    Balance: "15533.51",
  },
  {
    Date: "18/08/2021",
    Narration: "TO TRANSFER- UPI/DR/500413783361/MohdMun/YESB/q647081622/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "3230.00",
    Credit: "",
    Balance: "12303.51",
  },
  {
    Date: "24/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/548372221749/Challa C/YESB/paytmqr5bl/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2109.00",
    Credit: "",
    Balance: "10194.51",
  },
  {
    Date: "24/08/2021",
    Narration: "TO TRANSFER- UPI/DR/502992791102/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "3365.00",
    Credit: "",
    Balance: "6829.51",
  },
  {
    Date: "26/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/143810312736/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2375.00",
    Credit: "",
    Balance: "4454.51",
  },
  {
    Date: "28/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/675596767281/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "965.00",
    Credit: "",
    Balance: "3489.51",
  },
  {
    Date: "29/08/2021",
    Narration: "TO TRANSFER- UPI/DR/500965600422/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "176.00",
    Credit: "",
    Balance: "3313.51",
  },
  {
    Date: "30/08/2021",
    Narration:
      "TO TRANSFER- UPI/DR/783820166300/DULAMPA/SBIN/6304270614/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "868.00",
    Credit: "",
    Balance: "2445.51",
  },
  {
    Date: "30/08/2021",
    Narration: "TO TRANSFER- UPI/DR/544933768635/SIVAVEN/YESB/paytmqr67m/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "527.00",
    Credit: "",
    Balance: "1918.51",
  },
  {
    Date: "01/09/2021",
    Narration: "TO TRANSFER- UPI/DR/548375836315/TJPANS/UTIB/gpay-11254/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "924.00",
    Credit: "",
    Balance: "994.51",
  },
  {
    Date: "06/09/2021",
    Narration:
      "BY TRANSFER- UPI/CR/823525980243/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "616.00",
    Balance: "1610.51",
  },
  {
    Date: "06/09/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21256620585*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34395.51",
  },
  {
    Date: "07/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/915686858215/PULKAM /KKBK/6303798573/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "872.00",
    Credit: "",
    Balance: "33523.51",
  },
  {
    Date: "07/09/2021",
    Narration: "TO TRANSFER- UPI/DR/543581591295/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2200.00",
    Credit: "",
    Balance: "31323.51",
  },
  {
    Date: "08/09/2021",
    Narration:
      "BY TRANSFER- UPI/CR/993530001022/MESU SAM/IPOS/9014794997/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "861.00",
    Balance: "32184.51",
  },
  {
    Date: "08/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/399995422799/POSANI L/BARB/posan63048/Verif-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "36.00",
    Credit: "",
    Balance: "32148.51",
  },
  {
    Date: "09/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/683241814789/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "6037.00",
    Credit: "",
    Balance: "26111.51",
  },
  {
    Date: "09/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/687336661653/KOLIPAKA/YESB/Q42825098@/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "31.00",
    Credit: "",
    Balance: "26080.51",
  },
  {
    Date: "10/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/204571529971/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "37.00",
    Credit: "",
    Balance: "26043.51",
  },
  {
    Date: "10/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/492592587171/DOSTHIF/YESB/paytm.s1ar/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1294.00",
    Credit: "",
    Balance: "24749.51",
  },
  {
    Date: "11/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/539406841975/Jayanthi/UTIB/gpay-11253/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "135.00",
    Credit: "",
    Balance: "24614.51",
  },
  {
    Date: "14/09/2021",
    Narration: "TO TRANSFER- UPI/DR/500459645264/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "4904.00",
    Credit: "",
    Balance: "19710.51",
  },
  {
    Date: "16/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/215718099112/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "295.00",
    Credit: "",
    Balance: "19415.51",
  },
  {
    Date: "17/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/023047351914/BURUGUR/ICIC/swarnakuma/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "5055.00",
    Credit: "",
    Balance: "14360.51",
  },
  {
    Date: "17/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/319508768864/CHAMARTH/SBIN/7013118441/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "782.00",
    Credit: "",
    Balance: "13578.51",
  },
  {
    Date: "20/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/554198578622/Mohd Mun/YESB/Q647081622/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "446.00",
    Credit: "",
    Balance: "13132.51",
  },
  {
    Date: "21/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/545101216301/INNOVATI/ICIC/cf.innovat/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "356.00",
    Credit: "",
    Balance: "12776.51",
  },
  {
    Date: "25/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/151665023887/GEDDIT C/YESB/paytm-8385/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2291.00",
    Credit: "",
    Balance: "10485.51",
  },
  {
    Date: "25/09/2021",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "353.57",
    Balance: "10839.08",
  },
  {
    Date: "26/09/2021",
    Narration:
      "TO TRANSFER- UPI/DR/165497151349/Paramesh/UTIB/gpay-11246/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "141.00",
    Credit: "",
    Balance: "10698.08",
  },
  {
    Date: "01/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/877353180224/MANDALA /YESB/Q981515407/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1293.00",
    Credit: "",
    Balance: "9405.08",
  },
  {
    Date: "04/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/782418744445/PENCHIKA/YESB/paytmqr67o/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "403.00",
    Credit: "",
    Balance: "9002.08",
  },
  {
    Date: "04/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/812670378865/GOLLABA/YESB/paytmqr6b1/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "427.00",
    Credit: "",
    Balance: "8575.08",
  },
  {
    Date: "05/10/2021",
    Narration: "TO TRANSFER- UPI/DR/335495136636/AgroKa/YESB/paytm.s16l/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "51.00",
    Credit: "",
    Balance: "8524.08",
  },
  {
    Date: "05/10/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21915349992*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "41309.08",
  },
  {
    Date: "11/10/2021",
    Narration: "TO TRANSFER- UPI/DR/504163665853/SriMaha/UTIB/gpay-11216/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "511.00",
    Credit: "",
    Balance: "40798.08",
  },
  {
    Date: "12/10/2021",
    Narration: "TO TRANSFER- UPI/DR/502992791102/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2330.00",
    Credit: "",
    Balance: "38468.08",
  },
  {
    Date: "14/10/2021",
    Narration: "TO TRANSFER- UPI/DR/509581269668/slice/N ESF/repayments/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "982.00",
    Credit: "",
    Balance: "37486.08",
  },
  {
    Date: "15/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/965585156963/MOHAMMED/YESB/paytmqr6do/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "202.00",
    Credit: "",
    Balance: "37284.08",
  },
  {
    Date: "15/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/015099107368/KOLIPAKA/YESB/Q42825098@/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "125.00",
    Credit: "",
    Balance: "37159.08",
  },
  {
    Date: "16/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/826566461942/MYANA RA/YESB/Q904721918/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "583.00",
    Credit: "",
    Balance: "36576.08",
  },
  {
    Date: "18/10/2021",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "787.00",
    Balance: "37363.08",
  },
  {
    Date: "19/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/548616079563/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "20100.00",
    Credit: "",
    Balance: "17263.08",
  },
  {
    Date: "21/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/795625495778/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "975.00",
    Credit: "",
    Balance: "16288.08",
  },
  {
    Date: "22/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/728805333025/TATAPLA/AIRP/tataplayli/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2201.00",
    Credit: "",
    Balance: "14087.08",
  },
  {
    Date: "23/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/543691488675/MR MD RA/YESB/paytmqr67n/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "10500.00",
    Credit: "",
    Balance: "3587.08",
  },
  {
    Date: "23/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/100922381633/PULKAM N/SBIN/naveenpate/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "155.00",
    Credit: "",
    Balance: "3432.08",
  },
  {
    Date: "25/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/832830076842/MESUSAM/IPOS/9014794997/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1226.00",
    Credit: "",
    Balance: "2206.08",
  },
  {
    Date: "26/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/817466634775/BURUGU S/SBIN/swarnakuma/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "71.00",
    Credit: "",
    Balance: "2135.08",
  },
  {
    Date: "28/10/2021",
    Narration:
      "BY TRANSFER- UPI/CR/045605561681/BURUG U R/ICIC/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "740.00",
    Balance: "2875.08",
  },
  {
    Date: "29/10/2021",
    Narration:
      "TO TRANSFER- UPI/DR/628551693629/Banavath/YESB/Q300046228/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "547.00",
    Credit: "",
    Balance: "2328.08",
  },
  {
    Date: "02/11/2021",
    Narration: "TO TRANSFER- UPI/DR/543023567504/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "318.00",
    Credit: "",
    Balance: "2010.08",
  },
  {
    Date: "05/11/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21941636196*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34795.08",
  },
  {
    Date: "12/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/544340281568/ZEPTO/UTIB/cp.zepto13/payment-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "5438.00",
    Credit: "",
    Balance: "29357.08",
  },
  {
    Date: "13/11/2021",
    Narration:
      "BY TRANSFER- UPI/CR/797103626356/BURUG U R/ICIC/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "328.00",
    Balance: "29685.08",
  },
  {
    Date: "14/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/548372326309/MOHAMMED/YESB/paytmqr66o/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "631.00",
    Credit: "",
    Balance: "29054.08",
  },
  {
    Date: "17/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/832830076842/MESUSAM/IPOS/9014794997/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2368.00",
    Credit: "",
    Balance: "26686.08",
  },
  {
    Date: "18/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/850333897086/Mrs LALI/YESB/paytmqr6ev/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "7250.00",
    Credit: "",
    Balance: "19436.08",
  },
  {
    Date: "19/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/570379754695/Maredipu/SBIN/9182170428/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "749.00",
    Credit: "",
    Balance: "18687.08",
  },
  {
    Date: "21/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/505957393050/Srinivas/UTIB/gpay-11246/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1654.00",
    Credit: "",
    Balance: "17033.08",
  },
  {
    Date: "21/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/099076959927/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "225.00",
    Credit: "",
    Balance: "16808.08",
  },
  {
    Date: "22/11/2021",
    Narration:
      "BY TRANSFER- UPI/CR/823759396199/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "293.00",
    Balance: "17101.08",
  },
  {
    Date: "22/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/068216009769/POTNURU /YESB/paytmqr281/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1803.00",
    Credit: "",
    Balance: "15298.08",
  },
  {
    Date: "24/11/2021",
    Narration: "TO TRANSFER- UPI/DR/502992786588/PULKAMN/SBIN/naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "791.00",
    Credit: "",
    Balance: "14507.08",
  },
  {
    Date: "24/11/2021",
    Narration: "TO TRANSFER- UPI/DR/539512002452/PankajK/YESB/paytm.s120/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "4316.00",
    Credit: "",
    Balance: "10191.08",
  },
  {
    Date: "28/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/514368393756/Pankaj K/YESB/paytm.s18s/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "7740.00",
    Credit: "",
    Balance: "2451.08",
  },
  {
    Date: "29/11/2021",
    Narration:
      "BY TRANSFER- UPI/CR/122271194284/BURUG U /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "720.00",
    Balance: "3171.08",
  },
  {
    Date: "29/11/2021",
    Narration: "TO TRANSFER- UPI/DR/502642580910/GoogleI/utib/playstore-/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "670.00",
    Credit: "",
    Balance: "2501.08",
  },
  {
    Date: "30/11/2021",
    Narration:
      "TO TRANSFER- UPI/DR/603509676825/ANNAPOOR/HDFC/annapoorna/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1073.00",
    Credit: "",
    Balance: "1428.08",
  },
  {
    Date: "05/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/775525086053/LIMGAMPE/YESB/Q660345130/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "270.00",
    Credit: "",
    Balance: "1158.08",
  },
  {
    Date: "06/12/2021",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21245775560*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33943.08",
  },
  {
    Date: "09/12/2021",
    Narration: "TO TRANSFER- UPI/DR/755562507324/Mr PATL/YESB/BHARATPE9B/Payt-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1060.00",
    Credit: "",
    Balance: "32883.08",
  },
  {
    Date: "10/12/2021",
    Narration: "TO TRANSFER- UPI/DR/539401814320/PankajK/YESB/paytm.s120/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "859.00",
    Credit: "",
    Balance: "32024.08",
  },
  {
    Date: "11/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/564614334823/Jampally/YESB/paytmqr63f/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1237.00",
    Credit: "",
    Balance: "30787.08",
  },
  {
    Date: "12/12/2021",
    Narration: "BY TRANSFER- UPI/CR/517850737199/Eluri D/SBIN/vinodpotti/UPI-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "221.00",
    Balance: "31008.08",
  },
  {
    Date: "12/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/544940902594/foodcourt/INDB/bajajpay.6/Pai-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1499.00",
    Credit: "",
    Balance: "29509.08",
  },
  {
    Date: "14/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/990117341384/VYJAYANT/YESB/paytm-1540/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "908.00",
    Credit: "",
    Balance: "28601.08",
  },
  {
    Date: "14/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/543684936194/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "14100.00",
    Credit: "",
    Balance: "14501.08",
  },
  {
    Date: "15/12/2021",
    Narration: "ATM WDL-ATM CASH 34 +ATM/JANATHAIALLI BANGALORE",
    Ref: "",
    Debit: "12000.00",
    Credit: "",
    Balance: "2501.08",
  },
  {
    Date: "17/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/583085486383/SURARAM/SBIN/sura.35@yb/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "736.00",
    Credit: "",
    Balance: "1765.08",
  },
  {
    Date: "18/12/2021",
    Narration:
      "BY TRANSFER- UPI/CR/709070886947/BURUG U  /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "417.00",
    Balance: "2182.08",
  },
  {
    Date: "20/12/2021",
    Narration: "TO TRANSFER- UPI/DR/505844326745/JyothiK/UTIB/gpay-11245/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "83.00",
    Credit: "",
    Balance: "2099.08",
  },
  {
    Date: "22/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/551623215414/CRED Club/UTIB/cred.club@/paym-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1059.00",
    Credit: "",
    Balance: "1040.08",
  },
  {
    Date: "25/12/2021",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "366.66",
    Balance: "1406.74",
  },
  {
    Date: "27/12/2021",
    Narration:
      "TO TRANSFER- UPI/DR/513711866887/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "215.00",
    Credit: "",
    Balance: "1191.74",
  },
  {
    Date: "05/01/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN21232463492*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33976.74",
  },
  {
    Date: "10/01/2022",
    Narration:
      "BY TRANSFER- UPI/CR/062227970876/BURUG U S/UBIN/boorugusan/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "577.00",
    Balance: "34553.74",
  },
  {
    Date: "11/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/863070530584/CHALO CH/YESB/paytmqr664/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2432.00",
    Credit: "",
    Balance: "32121.74",
  },
  {
    Date: "13/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/252913235222/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "178.00",
    Credit: "",
    Balance: "31943.74",
  },
  {
    Date: "14/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/076265369512/Rajesh S/YESB/paytmqrzv4/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1392.00",
    Credit: "",
    Balance: "30551.74",
  },
  {
    Date: "15/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/791257358836/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "666.00",
    Credit: "",
    Balance: "29885.74",
  },
  {
    Date: "15/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/507216345113/GURRAM R/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "692.00",
    Credit: "",
    Balance: "29193.74",
  },
  {
    Date: "16/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/324697198787/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2241.00",
    Credit: "",
    Balance: "26952.74",
  },
  {
    Date: "17/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/009245167227/SHREEVEE/ICIC/eazypay.MX/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "4924.00",
    Credit: "",
    Balance: "22028.74",
  },
  {
    Date: "21/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/100916624115/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2600.00",
    Credit: "",
    Balance: "19428.74",
  },
  {
    Date: "25/01/2022",
    Narration: "TO TRANSFER- UPI/DR/501170369653/BURUGUR/ICIC/swarnakuma/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "4435.00",
    Credit: "",
    Balance: "14993.74",
  },
  {
    Date: "25/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/947740177025/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "3610.00",
    Credit: "",
    Balance: "11383.74",
  },
  {
    Date: "25/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/545052352576/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1704.00",
    Credit: "",
    Balance: "9679.74",
  },
  {
    Date: "25/01/2022",
    Narration: "TO TRANSFER- UPI/DR/502114840502/BUSSAS/YESB/q774083652/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "755.00",
    Credit: "",
    Balance: "8924.74",
  },
  {
    Date: "26/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/970975369387/MOHDIMR/KKBK/7800906940/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1572.00",
    Credit: "",
    Balance: "7352.74",
  },
  {
    Date: "27/01/2022",
    Narration:
      "BY TRANSFER- UPI/CR/058402438775/BURUGU R/ICIC/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "885.00",
    Balance: "8237.74",
  },
  {
    Date: "28/01/2022",
    Narration:
      "TO TRANSFER- UPI/DR/545200525011/bigbasket/YESB/bigbasket1/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1311.00",
    Credit: "",
    Balance: "6926.74",
  },
  {
    Date: "30/01/2022",
    Narration: "TO TRANSFER- UPI/DR/541891456689/MUBARAK/HDFC/vyapar.172/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "299.00",
    Credit: "",
    Balance: "6627.74",
  },
  {
    Date: "02/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/538255834747/SURARAM/FDRL/bharatpe.9/Pay t-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "4617.00",
    Credit: "",
    Balance: "2010.74",
  },
  {
    Date: "06/02/2022",
    Narration:
      "BY TRANSFER- UPI/CR/116983847859/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "621.00",
    Balance: "2631.74",
  },
  {
    Date: "07/02/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22866606344*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "35416.74",
  },
  {
    Date: "09/02/2022",
    Narration:
      "BY TRANSFER- UPI/CR/546241319935/PALTHYA /HDFC/9014089328/Paid-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "538.00",
    Balance: "35954.74",
  },
  {
    Date: "10/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/505629863689/KRISHNAR/YESB/q536660402/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1216.00",
    Credit: "",
    Balance: "34738.74",
  },
  {
    Date: "12/02/2022",
    Narration:
      "BY TRANSFER- UPI/CR/372980474815/BATTARO/UTIB/rock143roh/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "723.00",
    Balance: "35461.74",
  },
  {
    Date: "12/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/667333437810/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "7144.00",
    Credit: "",
    Balance: "28317.74",
  },
  {
    Date: "12/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/099765005262/AKSHANTH/YESB/Q463233814/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "6683.00",
    Credit: "",
    Balance: "21634.74",
  },
  {
    Date: "13/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/962732365774/The coco/YESB/paytmqr5xc/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2958.00",
    Credit: "",
    Balance: "18676.74",
  },
  {
    Date: "15/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/545762126069/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2389.00",
    Credit: "",
    Balance: "16287.74",
  },
  {
    Date: "15/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/159735066301/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "8100.00",
    Credit: "",
    Balance: "8187.74",
  },
  {
    Date: "16/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/501106686102/slice/N ESF/repayments/Paymentf-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "6471.00",
    Credit: "",
    Balance: "1716.74",
  },
  {
    Date: "22/02/2022",
    Narration: "TO TRANSFER- UPI/DR/546434235198/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "127.00",
    Credit: "",
    Balance: "1589.74",
  },
  {
    Date: "24/02/2022",
    Narration:
      "TO TRANSFER- UPI/DR/167969532150/NYATHARI/SBIN/9642694415/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1323.00",
    Credit: "",
    Balance: "266.74",
  },
  {
    Date: "02/03/2022",
    Narration:
      "BY TRANSFER- UPI/CR/615725407899/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "681.00",
    Balance: "947.74",
  },
  {
    Date: "07/03/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22602188247*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33732.74",
  },
  {
    Date: "08/03/2022",
    Narration: "ATM WDL-ATM CASH 8069 SBH SANJIVAREDDYNAGA HYDERABAD-",
    Ref: "",
    Debit: "22000.00",
    Credit: "",
    Balance: "11732.74",
  },
  {
    Date: "08/03/2022",
    Narration:
      "TO TRANSFER- UPI/DR/004294217114/GATLATEJA/YESB/paytm.s18h/Pay-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "410.00",
    Credit: "",
    Balance: "11322.74",
  },
  {
    Date: "11/03/2022",
    Narration:
      "TO TRANSFER- UPI/DR/188666612321/Maredipu/SBIN/9182170428/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "52.00",
    Credit: "",
    Balance: "11270.74",
  },
  {
    Date: "11/03/2022",
    Narration:
      "TO TRANSFER- UPI/DR/510414183819/SHESHADR/YESB/paytm-8845/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "805.00",
    Credit: "",
    Balance: "10465.74",
  },
  {
    Date: "14/03/2022",
    Narration: "TO TRANSFER- UPI/DR/505853161521/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "966.00",
    Credit: "",
    Balance: "9499.74",
  },
  {
    Date: "21/03/2022",
    Narration: "TO TRANSFER- UPI/DR/500858436286/MDMAHAB/YESB/q301101075/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1879.00",
    Credit: "",
    Balance: "7620.74",
  },
  {
    Date: "25/03/2022",
    Narration:
      "TO TRANSFER- UPI/DR/355820197840/SATTIBA/YESB/paytmqr635/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "389.00",
    Credit: "",
    Balance: "7231.74",
  },
  {
    Date: "25/03/2022",
    Narration:
      "TO TRANSFER- UPI/DR/550193456261/CHALO CH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2424.00",
    Credit: "",
    Balance: "4807.74",
  },
  {
    Date: "25/03/2022",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "337.87",
    Balance: "5145.61",
  },
  {
    Date: "26/03/2022",
    Narration:
      "TO TRANSFER- UPI/DR/435024139609/AMER MOH/YESB/paytm.s1cz/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2551.00",
    Credit: "",
    Balance: "2594.61",
  },
  {
    Date: "30/03/2022",
    Narration:
      "TO TRANSFER- UPI/DR/538145383585/KOLIPAKA/YESB/q42825098@/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "658.00",
    Credit: "",
    Balance: "1936.61",
  },
  {
    Date: "04/04/2022",
    Narration:
      "BY TRANSFER- UPI/CR/322210234900/PIXELTES/SBIN/pixeltests/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "261.00",
    Balance: "2197.61",
  },
  {
    Date: "04/04/2022",
    Narration:
      "TO TRANSFER- UPI/DR/826566461942/MYANA RA/YESB/Q904721918/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "747.00",
    Credit: "",
    Balance: "1450.61",
  },
  {
    Date: "05/04/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22201192181*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34235.61",
  },
  {
    Date: "06/04/2022",
    Narration: "TO TRANSFER- UPI/DR/539849976231/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "389.00",
    Credit: "",
    Balance: "33846.61",
  },
  {
    Date: "06/04/2022",
    Narration: "TO TRANSFER- UPI/DR/502642580910/GoogleI/utib/playstore-/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "19300.00",
    Credit: "",
    Balance: "14546.61",
  },
  {
    Date: "06/04/2022",
    Narration:
      "TO TRANSFER- UPI/DR/285342502197/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "723.00",
    Credit: "",
    Balance: "13823.61",
  },
  {
    Date: "09/04/2022",
    Narration:
      "TO TRANSFER- UPI/DR/296285258056/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "13600.00",
    Credit: "",
    Balance: "223.61",
  },
  {
    Date: "16/04/2022",
    Narration:
      "TO TRANSFER- UPI/DR/501190415157/VENKATES/UTIB/gpay-11247/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "47.00",
    Credit: "",
    Balance: "176.61",
  },
  {
    Date: "19/04/2022",
    Narration:
      "BY TRANSFER- UPI/CR/095066501887/YEDAM ALA/TSAB/7207996114/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "785.00",
    Balance: "961.61",
  },
  {
    Date: "30/04/2022",
    Narration:
      "TO TRANSFER- UPI/DR/546541783243/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "36.00",
    Credit: "",
    Balance: "925.61",
  },
  {
    Date: "02/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/893336721543/VADDE PR/YESB/Q403027984/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "209.00",
    Credit: "",
    Balance: "716.61",
  },
  {
    Date: "04/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/505737209495/BODLAGA/FDRL/bharatpe.9/Pay t-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "529.00",
    Credit: "",
    Balance: "187.61",
  },
  {
    Date: "05/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/652035529920/THAKUR J/YESB/paytm.s1ej/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "60.00",
    Credit: "",
    Balance: "127.61",
  },
  {
    Date: "05/05/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22116782721*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "32912.61",
  },
  {
    Date: "07/05/2022",
    Narration: "TO TRANSFER- UPI/DR/511199149424/AMERMOH/YESB/paytm.s1cz/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "62.00",
    Credit: "",
    Balance: "32850.61",
  },
  {
    Date: "08/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/035427645862/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2540.00",
    Credit: "",
    Balance: "30310.61",
  },
  {
    Date: "09/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/501190415157/VENKATES/UTIB/gpay-11247/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "18000.00",
    Credit: "",
    Balance: "12310.61",
  },
  {
    Date: "11/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/482020266232/Virendra/UTIB/9341603724/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "5305.00",
    Credit: "",
    Balance: "7005.61",
  },
  {
    Date: "15/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/319508768864/CHAMARTH/SBIN/7013118441/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "3076.00",
    Credit: "",
    Balance: "3929.61",
  },
  {
    Date: "16/05/2022",
    Narration:
      "BY TRANSFER- UPI/CR/757147512812/BURUG U S/SBIN/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "424.00",
    Balance: "4353.61",
  },
  {
    Date: "20/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/846983073355/MOHAMMED/YESB/paytmqr66o/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2611.00",
    Credit: "",
    Balance: "1742.61",
  },
  {
    Date: "21/05/2022",
    Narration:
      "TO TRANSFER- UPI/DR/132924341174/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "636.00",
    Credit: "",
    Balance: "1106.61",
  },
  {
    Date: "23/05/2022",
    Narration: "TO TRANSFER- UPI/DR/538369520572/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "181.00",
    Credit: "",
    Balance: "925.61",
  },
  {
    Date: "29/05/2022",
    Narration:
      "BY TRANSFER- UPI/CR/586390810410/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "371.00",
    Balance: "1296.61",
  },
  {
    Date: "04/06/2022",
    Narration:
      "TO TRANSFER- UPI/DR/152257736574/SYED FAI/IBKL/faisal.sye/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1023.00",
    Credit: "",
    Balance: "273.61",
  },
  {
    Date: "06/06/2022",
    Narration:
      "BY TRANSFER- UPI/CR/370868988672/BURUG U /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "665.00",
    Balance: "938.61",
  },
  {
    Date: "06/06/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22183880431*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33723.61",
  },
  {
    Date: "08/06/2022",
    Narration:
      "BY TRANSFER- UPI/CR/095066501887/YEDAM ALA/TSAB/7207996114/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "533.00",
    Balance: "34256.61",
  },
  {
    Date: "08/06/2022",
    Narration:
      "TO TRANSFER- UPI/DR/510069389161/PATHAN C/IBKL/7at9ti4z1n/fn7O-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2795.00",
    Credit: "",
    Balance: "31461.61",
  },
  {
    Date: "08/06/2022",
    Narration:
      "TO TRANSFER- UPI/DR/846983073355/MOHAMMED/YESB/paytmqr66o/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "7545.00",
    Credit: "",
    Balance: "23916.61",
  },
  {
    Date: "11/06/2022",
    Narration: "TO TRANSFER- UPI/DR/505963271647/SURARAM/YESB/paytmqr68i/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "4305.00",
    Credit: "",
    Balance: "19611.61",
  },
  {
    Date: "14/06/2022",
    Narration:
      "TO TRANSFER- UPI/DR/132296931149/KKOTESW/YESB/Q616886789/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "274.00",
    Credit: "",
    Balance: "19337.61",
  },
  {
    Date: "17/06/2022",
    Narration:
      "TO TRANSFER- UPI/DR/899254388678/GATTUKO/YESB/Q924742097/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "5003.00",
    Credit: "",
    Balance: "14334.61",
  },
  {
    Date: "18/06/2022",
    Narration:
      "TO TRANSFER- UPI/DR/121862187173/PAPPU MA/YESB/BHARATPE9Y/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "3802.00",
    Credit: "",
    Balance: "10532.61",
  },
  {
    Date: "19/06/2022",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "927.00",
    Balance: "11459.61",
  },
  {
    Date: "20/06/2022",
    Narration:
      "TO TRANSFER- UPI/DR/517850645473/VUTUKURU/YESB/paytmqr6bh/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "682.00",
    Credit: "",
    Balance: "10777.61",
  },
  {
    Date: "25/06/2022",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "238.74",
    Balance: "11016.35",
  },
  {
    Date: "27/06/2022",
    Narration: "TO TRANSFER- UPI/DR/500965600422/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "112.00",
    Credit: "",
    Balance: "10904.35",
  },
  {
    Date: "29/06/2022",
    Narration: "TO TRANSFER- UPI/DR/502992790604/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "896.00",
    Credit: "",
    Balance: "10008.35",
  },
  {
    Date: "02/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/650146359446/MOHAMMED/UNBA/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "756.00",
    Credit: "",
    Balance: "9252.35",
  },
  {
    Date: "02/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/952407569955/Mahavir/YESB/paytm-5794/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2329.00",
    Credit: "",
    Balance: "6923.35",
  },
  {
    Date: "05/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/506298221889/MR MD RA/YESB/paytmqr67n/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2217.00",
    Credit: "",
    Balance: "4706.35",
  },
  {
    Date: "05/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/139005262652/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1060.00",
    Credit: "",
    Balance: "3646.35",
  },
  {
    Date: "05/07/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22498290459*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "36431.35",
  },
  {
    Date: "12/07/2022",
    Narration:
      "BY TRANSFER- UPI/CR/862478454457/BURUG U R/ANDB/8688370835/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "554.00",
    Balance: "36985.35",
  },
  {
    Date: "13/07/2022",
    Narration: "TO TRANSFER- UPI/DR/502114840502/BUSSAS/YESB/q774083652/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "24700.00",
    Credit: "",
    Balance: "12285.35",
  },
  {
    Date: "16/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/902680076274/ZOMATOM/AIRP/roadrunnr3/Roadr-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "157.00",
    Credit: "",
    Balance: "12128.35",
  },
  {
    Date: "16/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/078540635118/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "7435.00",
    Credit: "",
    Balance: "4693.35",
  },
  {
    Date: "19/07/2022",
    Narration: "TO TRANSFER- UPI/DR/504161341305/KattaR/YESB/q099098188/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "563.00",
    Credit: "",
    Balance: "4130.35",
  },
  {
    Date: "22/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/507212560747/PAYYAVUL/FDRL/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "740.00",
    Credit: "",
    Balance: "3390.35",
  },
  {
    Date: "25/07/2022",
    Narration:
      "BY TRANSFER- UPI/CR/269555982143/BURUG U R/ICIC/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "487.00",
    Balance: "3877.35",
  },
  {
    Date: "26/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/472228712353/MrVENKA/YESB/paytmqr60k/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "100.00",
    Credit: "",
    Balance: "3777.35",
  },
  {
    Date: "26/07/2022",
    Narration:
      "TO TRANSFER- UPI/DR/549313793095/ARVIND K/YESB/Q250076330/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "3170.00",
    Credit: "",
    Balance: "607.35",
  },
  {
    Date: "01/08/2022",
    Narration:
      "BY TRANSFER- UPI/CR/546241319935/PALTHYA /HDFC/9014089328/Paid-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "519.00",
    Balance: "1126.35",
  },
  {
    Date: "05/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/544340281568/ZEPTO/UTIB/cp.zepto13/payment-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "98.00",
    Credit: "",
    Balance: "1028.35",
  },
  {
    Date: "05/08/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22723963101*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33813.35",
  },
  {
    Date: "11/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/845056699288/The coco/YESB/paytmqr5jp/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2522.00",
    Credit: "",
    Balance: "31291.35",
  },
  {
    Date: "13/08/2022",
    Narration: "TO TRANSFER- UPI/DR/508269023713/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "552.00",
    Credit: "",
    Balance: "30739.35",
  },
  {
    Date: "13/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/512131725895/PINNINTI/YESB/paytmqrvlw/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "835.00",
    Credit: "",
    Balance: "29904.35",
  },
  {
    Date: "14/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/012861904122/Mr MOHAM/YESB/Q991125685/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "3705.00",
    Credit: "",
    Balance: "26199.35",
  },
  {
    Date: "15/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/481418798274/SAIDARE/YESB/paytm.s15e/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1199.00",
    Credit: "",
    Balance: "25000.35",
  },
  {
    Date: "18/08/2022",
    Narration: "TO TRANSFER- UPI/DR/511199152524/AMERMOH/YESB/paytm.s1cz/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "696.00",
    Credit: "",
    Balance: "24304.35",
  },
  {
    Date: "20/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/819749797494/MOHAMMAD/YESB/Q991125685/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "128.00",
    Credit: "",
    Balance: "24176.35",
  },
  {
    Date: "23/08/2022",
    Narration: "TO TRANSFER- UPI/DR/501170369015/BURUGUR/ICIC/swarnakuma/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1998.00",
    Credit: "",
    Balance: "22178.35",
  },
  {
    Date: "25/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/548372326309/MOHAMMED/YESB/paytmqr66o/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "802.00",
    Credit: "",
    Balance: "21376.35",
  },
  {
    Date: "26/08/2022",
    Narration: "ATM WDL-ATM CASH 81551 +SR NAGAR OATM HYDERABAD-",
    Ref: "",
    Debit: "20000.00",
    Credit: "",
    Balance: "1376.35",
  },
  {
    Date: "29/08/2022",
    Narration:
      "TO TRANSFER- UPI/DR/505481918554/Md Javeed/YESB/paytm.s1ez/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "892.00",
    Credit: "",
    Balance: "484.35",
  },
  {
    Date: "01/09/2022",
    Narration:
      "BY TRANSFER- UPI/CR/507978516421/Myakal a /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "646.00",
    Balance: "1130.35",
  },
  {
    Date: "02/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/406225500123/Mr DODL/YESB/Q072626090/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "899.00",
    Credit: "",
    Balance: "231.35",
  },
  {
    Date: "05/09/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22585515622*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33016.35",
  },
  {
    Date: "06/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/539408526773/MOHAMMED/YESB/paytmqr665/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2524.00",
    Credit: "",
    Balance: "30492.35",
  },
  {
    Date: "08/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/415060470680/KHETARAM/YESB/Q531090205/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "3575.00",
    Credit: "",
    Balance: "26917.35",
  },
  {
    Date: "09/09/2022",
    Narration:
      "BY TRANSFER- UPI/CR/116188931225/BURUG U  /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "555.00",
    Balance: "27472.35",
  },
  {
    Date: "11/09/2022",
    Narration: "ATM WDL-ATM CASH 6131 MOTH NAGAR 2HYDERABAD-",
    Ref: "",
    Debit: "16000.00",
    Credit: "",
    Balance: "11472.35",
  },
  {
    Date: "11/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/471955871421/Chainat/YESB/paytmqr6ed/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "950.00",
    Credit: "",
    Balance: "10522.35",
  },
  {
    Date: "12/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/247045989190/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2787.00",
    Credit: "",
    Balance: "7735.35",
  },
  {
    Date: "13/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/237476709904/Mr Ball/YESB/Q336434675/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2322.00",
    Credit: "",
    Balance: "5413.35",
  },
  {
    Date: "18/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/171702277437/KUMBOJI/SBIN/Q54936919@/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "349.00",
    Credit: "",
    Balance: "5064.35",
  },
  {
    Date: "19/09/2022",
    Narration: "TO TRANSFER- UPI/DR/502233305065/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1275.00",
    Credit: "",
    Balance: "3789.35",
  },
  {
    Date: "25/09/2022",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "375.15",
    Balance: "4164.50",
  },
  {
    Date: "26/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/947570563750/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "943.00",
    Credit: "",
    Balance: "3221.50",
  },
  {
    Date: "26/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/489305393977/Srinivas/UTIB/gpay-11246/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2241.00",
    Credit: "",
    Balance: "980.50",
  },
  {
    Date: "27/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/755427076991/HASITHA/UTIB/gpay-11255/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "192.00",
    Credit: "",
    Balance: "788.50",
  },
  {
    Date: "29/09/2022",
    Narration:
      "BY TRANSFER- UPI/CR/175517336957/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "574.00",
    Balance: "1362.50",
  },
  {
    Date: "30/09/2022",
    Narration:
      "TO TRANSFER- UPI/DR/980454336417/DOSTHIF/YESB/paytm.s17f/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "343.00",
    Credit: "",
    Balance: "1019.50",
  },
  {
    Date: "03/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/273444765885/Eluri D/SBIN/vinodpotti/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "124.00",
    Credit: "",
    Balance: "895.50",
  },
  {
    Date: "04/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/014566466556/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "337.00",
    Credit: "",
    Balance: "558.50",
  },
  {
    Date: "05/10/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22887155427*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33343.50",
  },
  {
    Date: "07/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/427460371007/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "399.00",
    Credit: "",
    Balance: "32944.50",
  },
  {
    Date: "10/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/811306294792/MUNNA KU/YESB/paytmqr60x/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1445.00",
    Credit: "",
    Balance: "31499.50",
  },
  {
    Date: "12/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/926944948069/GUNDETI /UBIN/gundetisri/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "17000.00",
    Credit: "",
    Balance: "14499.50",
  },
  {
    Date: "15/10/2022",
    Narration:
      "BY TRANSFER- UPI/CR/509733491635/slice/N ESF/sliceborro/BWb5913c-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "516.00",
    Balance: "15015.50",
  },
  {
    Date: "16/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/766353866065/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "451.00",
    Credit: "",
    Balance: "14564.50",
  },
  {
    Date: "22/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/538480408094/Srinivas/UTIB/gpay-11246/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "781.00",
    Credit: "",
    Balance: "13783.50",
  },
  {
    Date: "23/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/052855837018/ANNAPOOR/HDFC/annapoorna/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "3257.00",
    Credit: "",
    Balance: "10526.50",
  },
  {
    Date: "24/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/020110921241/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "7138.00",
    Credit: "",
    Balance: "3388.50",
  },
  {
    Date: "27/10/2022",
    Narration: "TO TRANSFER- UPI/DR/508470995455/Upparapu/SBIN/9866308659/UPI-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "981.00",
    Credit: "",
    Balance: "2407.50",
  },
  {
    Date: "27/10/2022",
    Narration: "TO TRANSFER- UPI/DR/546766317565/GOLLABA/YESB/paytmqr6b1/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "798.00",
    Credit: "",
    Balance: "1609.50",
  },
  {
    Date: "29/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/508469142626/Rapido R/YESB/paytm-8128/Sent-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "126.00",
    Credit: "",
    Balance: "1483.50",
  },
  {
    Date: "30/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/539408514178/A1BAKERY/YESB/paytmqr1bt/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "743.00",
    Credit: "",
    Balance: "740.50",
  },
  {
    Date: "30/10/2022",
    Narration:
      "TO TRANSFER- UPI/DR/510414183819/SHESHADR/YESB/paytm-8845/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "531.00",
    Credit: "",
    Balance: "209.50",
  },
  {
    Date: "02/11/2022",
    Narration:
      "BY TRANSFER- UPI/CR/585124452786/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "215.00",
    Balance: "424.50",
  },
  {
    Date: "06/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/546431420568/Keshav P/YESB/paytmqr12d/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "86.00",
    Credit: "",
    Balance: "338.50",
  },
  {
    Date: "07/11/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22370553250*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33123.50",
  },
  {
    Date: "08/11/2022",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "219.00",
    Balance: "33342.50",
  },
  {
    Date: "08/11/2022",
    Narration: "TO TRANSFER- UPI/DR/500860769000/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "7026.00",
    Credit: "",
    Balance: "26316.50",
  },
  {
    Date: "09/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/371353327970/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "399.00",
    Credit: "",
    Balance: "25917.50",
  },
  {
    Date: "09/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/017019767417/VUTUKURU/YESB/paytmqr63o/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "359.00",
    Credit: "",
    Balance: "25558.50",
  },
  {
    Date: "13/11/2022",
    Narration: "ATM WDL-ATM CASH 91816 THRRGALAGUTTAPALLI KARKARIMNAGAR-",
    Ref: "",
    Debit: "10000.00",
    Credit: "",
    Balance: "15558.50",
  },
  {
    Date: "14/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/121862187173/PAPPU MA/YESB/BHARATPE9Y/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "300.00",
    Credit: "",
    Balance: "15258.50",
  },
  {
    Date: "15/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/863070530584/CHALO CH/YESB/paytmqr664/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1758.00",
    Credit: "",
    Balance: "13500.50",
  },
  {
    Date: "16/11/2022",
    Narration: "TO TRANSFER- UPI/DR/500975400987/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "7772.00",
    Credit: "",
    Balance: "5728.50",
  },
  {
    Date: "18/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/204571529971/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2669.00",
    Credit: "",
    Balance: "3059.50",
  },
  {
    Date: "20/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/188866089780/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2885.00",
    Credit: "",
    Balance: "174.50",
  },
  {
    Date: "22/11/2022",
    Narration:
      "BY TRANSFER- UPI/CR/175517336957/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "897.00",
    Balance: "1071.50",
  },
  {
    Date: "27/11/2022",
    Narration:
      "TO TRANSFER- UPI/DR/430960691962/SABAVAT /SBIN/jai.vee@ax/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "478.00",
    Credit: "",
    Balance: "593.50",
  },
  {
    Date: "05/12/2022",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22387975293*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33378.50",
  },
  {
    Date: "11/12/2022",
    Narration:
      "TO TRANSFER- UPI/DR/583007140837/VIKRAM T/YESB/paytmqr63i/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "287.00",
    Credit: "",
    Balance: "33091.50",
  },
  {
    Date: "12/12/2022",
    Narration:
      "TO TRANSFER- UPI/DR/374435114545/SHAREEF /YESB/Q647081622/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "9400.00",
    Credit: "",
    Balance: "23691.50",
  },
  {
    Date: "13/12/2022",
    Narration:
      "TO TRANSFER- UPI/DR/374435114545/SHAREEF /YESB/Q647081622/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1229.00",
    Credit: "",
    Balance: "22462.50",
  },
  {
    Date: "15/12/2022",
    Narration:
      "TO TRANSFER- UPI/DR/424223493302/P VINOD/YESB/Q492629095/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "6556.00",
    Credit: "",
    Balance: "15906.50",
  },
  {
    Date: "15/12/2022",
    Narration:
      "TO TRANSFER- UPI/DR/100047818927/AIRBNB/HDFC/billdeskpg/AIRBNB-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1847.00",
    Credit: "",
    Balance: "14059.50",
  },
  {
    Date: "17/12/2022",
    Narration:
      "TO TRANSFER- UPI/DR/121862187173/PAPPU MA/YESB/BHARATPE9Y/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2956.00",
    Credit: "",
    Balance: "11103.50",
  },
  {
    Date: "19/12/2022",
    Narration:
      "BY TRANSFER- UPI/CR/104631432520/BURUG U  /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "926.00",
    Balance: "12029.50",
  },
  {
    Date: "19/12/2022",
    Narration:
      "TO TRANSFER- UPI/DR/085107925817/Thoshala/YESB/paytmqr64l/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "774.00",
    Credit: "",
    Balance: "11255.50",
  },
  {
    Date: "21/12/2022",
    Narration: "TO TRANSFER- UPI/DR/508269023179/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "617.00",
    Credit: "",
    Balance: "10638.50",
  },
  {
    Date: "22/12/2022",
    Narration: "ATM WDL-ATM CASH 82011+BAPU NAGAR HYDERABAD",
    Ref: "",
    Debit: "10000.00",
    Credit: "",
    Balance: "638.50",
  },
  {
    Date: "25/12/2022",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "307.57",
    Balance: "946.07",
  },
  {
    Date: "05/01/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN22407321063*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33731.07",
  },
  {
    Date: "07/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/539855786528/KRISHNAR/YESB/q130613978/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "574.00",
    Credit: "",
    Balance: "33157.07",
  },
  {
    Date: "07/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/783820166300/DULAMPA/SBIN/6304270614/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "4326.00",
    Credit: "",
    Balance: "28831.07",
  },
  {
    Date: "07/01/2023",
    Narration: "TO TRANSFER- UPI/DR/502992790164/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "389.00",
    Credit: "",
    Balance: "28442.07",
  },
  {
    Date: "08/01/2023",
    Narration: "ATM WDL-ATMCASH 7154 SBI SAMU/VAREDDYNAGA HYDERABAD-",
    Ref: "",
    Debit: "12000.00",
    Credit: "",
    Balance: "16442.07",
  },
  {
    Date: "09/01/2023",
    Narration: "TO TRANSFER- UPI/DR/502992793396/PULKAMN/SBIN/naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "347.00",
    Credit: "",
    Balance: "16095.07",
  },
  {
    Date: "10/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/554718768730/CRED Club/UTIB/cred.club@/paym-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "5437.00",
    Credit: "",
    Balance: "10658.07",
  },
  {
    Date: "12/01/2023",
    Narration:
      "BY TRANSFER- UPI/CR/507450947762/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "885.00",
    Balance: "11543.07",
  },
  {
    Date: "13/01/2023",
    Narration: "TO TRANSFER- UPI/DR/548375836315/TJPANS/UTIB/gpay-11254/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "101.00",
    Credit: "",
    Balance: "11442.07",
  },
  {
    Date: "19/01/2023",
    Narration: "TO TRANSFER- UPI/DR/504160228758/KISANAG/YESB/q716101542/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "880.00",
    Credit: "",
    Balance: "10562.07",
  },
  {
    Date: "21/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/885391496909/MEKALAM/YESB/Q531943368/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "884.00",
    Credit: "",
    Balance: "9678.07",
  },
  {
    Date: "23/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/548375828807/KUKUMALL/YESB/q878737956/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "3775.00",
    Credit: "",
    Balance: "5903.07",
  },
  {
    Date: "23/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/538137824532/KOLIPAKA/YESB/q42825098@/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "345.00",
    Credit: "",
    Balance: "5558.07",
  },
  {
    Date: "25/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/016242193755/Banavath/YESB/Q300046228/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2968.00",
    Credit: "",
    Balance: "2590.07",
  },
  {
    Date: "26/01/2023",
    Narration:
      "TO TRANSFER- UPI/DR/543684936194/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1762.00",
    Credit: "",
    Balance: "828.07",
  },
  {
    Date: "02/02/2023",
    Narration:
      "BY TRANSFER- UPI/CR/382969152038/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "985.00",
    Balance: "1813.07",
  },
  {
    Date: "04/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/513711866887/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "680.00",
    Credit: "",
    Balance: "1133.07",
  },
  {
    Date: "05/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/766353866065/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "128.00",
    Credit: "",
    Balance: "1005.07",
  },
  {
    Date: "06/02/2023",
    Narration: "TO TRANSFER- UPI/DR/501190704720/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "712.00",
    Credit: "",
    Balance: "293.07",
  },
  {
    Date: "06/02/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23207891230*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33078.07",
  },
  {
    Date: "07/02/2023",
    Narration: "TO TRANSFER- UPI/DR/547700713253/BijayKu/YESB/paytmqr6ez/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "3161.00",
    Credit: "",
    Balance: "29917.07",
  },
  {
    Date: "08/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/967745075550/TataPlay/YESB/paytm-5674/Paym-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "325.00",
    Credit: "",
    Balance: "29592.07",
  },
  {
    Date: "11/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/958938668761/ANIQUNI/YESB/paytmqr5yo/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "4535.00",
    Credit: "",
    Balance: "25057.07",
  },
  {
    Date: "14/02/2023",
    Narration: "TO TRANSFER- UPI/DR/538586990583/HANUMAN/UTIB/gpay-11249/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "344.00",
    Credit: "",
    Balance: "24713.07",
  },
  {
    Date: "14/02/2023",
    Narration: "TO TRANSFER- UPI/DR/544933768635/SIVAVEN/YESB/paytmqr67m/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "11600.00",
    Credit: "",
    Balance: "13113.07",
  },
  {
    Date: "16/02/2023",
    Narration: "TO TRANSFER- UPI/DR/500459662877/PULKAM N/SBIN/naveenpate/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2812.00",
    Credit: "",
    Balance: "10301.07",
  },
  {
    Date: "19/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/517850645473/VUTUKURU/YESB/paytmqr6bh/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1234.00",
    Credit: "",
    Balance: "9067.07",
  },
  {
    Date: "23/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/819749797494/MOHAMMAD/YESB/Q991125685/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1684.00",
    Credit: "",
    Balance: "7383.07",
  },
  {
    Date: "24/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/453562681482/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "656.00",
    Credit: "",
    Balance: "6727.07",
  },
  {
    Date: "25/02/2023",
    Narration:
      "BY TRANSFER- UPI/CR/508591211930/INNOV ATI/ICIC/cf.innovat/refun-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "240.00",
    Balance: "6967.07",
  },
  {
    Date: "25/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/547809884620/GUNDREDD/YESB/paytm.s16y/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "253.00",
    Credit: "",
    Balance: "6714.07",
  },
  {
    Date: "26/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/892817976995/Mittapal/SBIN/9640059203/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "212.00",
    Credit: "",
    Balance: "6502.07",
  },
  {
    Date: "27/02/2023",
    Narration:
      "TO TRANSFER- UPI/DR/491692939721/Pankaj K/YESB/paytm.s18s/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1531.00",
    Credit: "",
    Balance: "4971.07",
  },
  {
    Date: "27/02/2023",
    Narration: "TO TRANSFER- UPI/DR/538254496024/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "638.00",
    Credit: "",
    Balance: "4333.07",
  },
  {
    Date: "02/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/106987673019/MARG AM G/FDRL/9989647658/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "854.00",
    Credit: "",
    Balance: "3479.07",
  },
  {
    Date: "06/03/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23228281206*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "36264.07",
  },
  {
    Date: "07/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/193337474910/KOLAKANI/YESB/Q670773523/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "6293.00",
    Credit: "",
    Balance: "29971.07",
  },
  {
    Date: "07/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/159735066301/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "508.00",
    Credit: "",
    Balance: "29463.07",
  },
  {
    Date: "13/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/636489028502/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1763.00",
    Credit: "",
    Balance: "27700.07",
  },
  {
    Date: "15/03/2023",
    Narration: "BY TRANSFER- UPI/CR/517850737199/Eluri D/SBIN/vinodpotti/UPI-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "285.00",
    Balance: "27985.07",
  },
  {
    Date: "17/03/2023",
    Narration:
      "BY TRANSFER- UPI/CR/823759396199/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "925.00",
    Balance: "28910.07",
  },
  {
    Date: "17/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/782142623214/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "112.00",
    Credit: "",
    Balance: "28798.07",
  },
  {
    Date: "18/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/667333437810/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "7814.00",
    Credit: "",
    Balance: "20984.07",
  },
  {
    Date: "20/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/506068823952/GURRAM R/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "16600.00",
    Credit: "",
    Balance: "4384.07",
  },
  {
    Date: "22/03/2023",
    Narration: "TO TRANSFER- UPI/DR/538482171534/RAJAPETA/HDFC/bhargavnan/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "362.00",
    Credit: "",
    Balance: "4022.07",
  },
  {
    Date: "25/03/2023",
    Narration: "TO TRANSFER- UPI/DR/500637147974/NARESHK/YESB/paytmqr5z2/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2874.00",
    Credit: "",
    Balance: "1148.07",
  },
  {
    Date: "25/03/2023",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "135.72",
    Balance: "1283.79",
  },
  {
    Date: "27/03/2023",
    Narration:
      "TO TRANSFER- UPI/DR/933020638115/BuruguR/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "265.00",
    Credit: "",
    Balance: "1018.79",
  },
  {
    Date: "03/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/417264533105/MADASVE/UBIN/9490461951/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "91.00",
    Credit: "",
    Balance: "927.79",
  },
  {
    Date: "05/04/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23714562278*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33712.79",
  },
  {
    Date: "08/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/325176006773/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "5197.00",
    Credit: "",
    Balance: "28515.79",
  },
  {
    Date: "09/04/2023",
    Narration:
      "BY TRANSFER- UPI/CR/508508738955/bigbask et/YESB/bigbasket1/expr-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "622.00",
    Balance: "29137.79",
  },
  {
    Date: "09/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/500662329652/BURUGUR/PPIW/9652172933/Add M-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "58.00",
    Credit: "",
    Balance: "29079.79",
  },
  {
    Date: "12/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/280311544305/SUTARAS/YESB/Q449293071/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "379.00",
    Credit: "",
    Balance: "28700.79",
  },
  {
    Date: "13/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/545056134957/MANNEM N/FDRL/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2013.00",
    Credit: "",
    Balance: "26687.79",
  },
  {
    Date: "14/04/2023",
    Narration: "TO TRANSFER- UPI/DR/500676372477/GEDDITC/YESB/paytm-8385/Sent-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "3527.00",
    Credit: "",
    Balance: "23160.79",
  },
  {
    Date: "16/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/510414183819/SHESHADR/YESB/paytm-8845/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1132.00",
    Credit: "",
    Balance: "22028.79",
  },
  {
    Date: "23/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/143810312736/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "3128.00",
    Credit: "",
    Balance: "18900.79",
  },
  {
    Date: "24/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/543691488675/MR MD RA/YESB/paytmqr67n/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "208.00",
    Credit: "",
    Balance: "18692.79",
  },
  {
    Date: "25/04/2023",
    Narration: "ATM WDL-ATM CASH 51012 JEEDIMETLA Secunderabad-",
    Ref: "",
    Debit: "12000.00",
    Credit: "",
    Balance: "6692.79",
  },
  {
    Date: "25/04/2023",
    Narration:
      "TO TRANSFER- UPI/DR/288045744494/SHAIK MA/YESB/Q287584489/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "680.00",
    Credit: "",
    Balance: "6012.79",
  },
  {
    Date: "26/04/2023",
    Narration: "TO TRANSFER- UPI/DR/502345972042/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "5042.00",
    Credit: "",
    Balance: "970.79",
  },
  {
    Date: "01/05/2023",
    Narration:
      "BY TRANSFER- UPI/CR/502992977900/PULKA M N/SBIN/8096752729/UPI-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "760.00",
    Balance: "1730.79",
  },
  {
    Date: "04/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/506593813287/SRI KRIS/YESB/paytmqr6af/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "322.00",
    Credit: "",
    Balance: "1408.79",
  },
  {
    Date: "05/05/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23293512351*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34193.79",
  },
  {
    Date: "06/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/887496100389/MD ISMAIL/YESB/Q147189324/Pay-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2517.00",
    Credit: "",
    Balance: "31676.79",
  },
  {
    Date: "08/05/2023",
    Narration: "ATM WDL-ATM CASH 134 SBH SANJIVAREDDYNAGA HYDERABAD-",
    Ref: "",
    Debit: "16000.00",
    Credit: "",
    Balance: "15676.79",
  },
  {
    Date: "14/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/371353327970/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "7288.00",
    Credit: "",
    Balance: "8388.79",
  },
  {
    Date: "16/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/540077049869/SHEELAR/YESB/bharatpe5k/Pay T-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "494.00",
    Credit: "",
    Balance: "7894.79",
  },
  {
    Date: "17/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/860361031289/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1278.00",
    Credit: "",
    Balance: "6616.79",
  },
  {
    Date: "21/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/151782446755/LAKSHMI/YESB/paytm.s17c/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "208.00",
    Credit: "",
    Balance: "6408.79",
  },
  {
    Date: "21/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/543574478473/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "162.00",
    Credit: "",
    Balance: "6246.79",
  },
  {
    Date: "22/05/2023",
    Narration: "TO TRANSFER- UPI/DR/543355574857/Mrs Pol/YESB/q044718316/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1123.00",
    Credit: "",
    Balance: "5123.79",
  },
  {
    Date: "26/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/942734769890/KOLAKANI/YESB/Q329677643/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2744.00",
    Credit: "",
    Balance: "2379.79",
  },
  {
    Date: "27/05/2023",
    Narration: "TO TRANSFER- UPI/DR/512531956914/slice/N ESF/borrowrepa/UPI-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "458.00",
    Credit: "",
    Balance: "1921.79",
  },
  {
    Date: "28/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/771782264207/Sri Adhi/UTIB/gpay-11251/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "337.00",
    Credit: "",
    Balance: "1584.79",
  },
  {
    Date: "30/05/2023",
    Narration:
      "TO TRANSFER- UPI/DR/278597566087/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "676.00",
    Credit: "",
    Balance: "908.79",
  },
  {
    Date: "05/06/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23657100593*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33693.79",
  },
  {
    Date: "11/06/2023",
    Narration:
      "TO TRANSFER- UPI/DR/543351740580/MR MD RA/YESB/paytmqr67n/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1147.00",
    Credit: "",
    Balance: "32546.79",
  },
  {
    Date: "11/06/2023",
    Narration: "TO TRANSFER- UPI/DR/500633717229/NARESHK/YESB/paytmqr5z2/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "19400.00",
    Credit: "",
    Balance: "13146.79",
  },
  {
    Date: "12/06/2023",
    Narration:
      "TO TRANSFER- UPI/DR/554838743276/SANDELA /FDRL/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "120.00",
    Credit: "",
    Balance: "13026.79",
  },
  {
    Date: "13/06/2023",
    Narration:
      "BY TRANSFER- UPI/CR/116983847859/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "580.00",
    Balance: "13606.79",
  },
  {
    Date: "14/06/2023",
    Narration:
      "TO TRANSFER- UPI/DR/771782264207/Sri Adhi/UTIB/gpay-11251/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "6229.00",
    Credit: "",
    Balance: "7377.79",
  },
  {
    Date: "14/06/2023",
    Narration:
      "TO TRANSFER- UPI/DR/278597566087/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2175.00",
    Credit: "",
    Balance: "5202.79",
  },
  {
    Date: "19/06/2023",
    Narration: "TO TRANSFER- UPI/DR/538256700372/Duddala/YESB/paytmqr64m/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2571.00",
    Credit: "",
    Balance: "2631.79",
  },
  {
    Date: "22/06/2023",
    Narration:
      "BY TRANSFER- UPI/CR/518372605646/EDLABHA/YESB/Q163435771/Payme-",
    Ref: "TRANSFER FROM 4897731162095",
    Debit: "",
    Credit: "778.00",
    Balance: "3409.79",
  },
  {
    Date: "25/06/2023",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "355.29",
    Balance: "3765.08",
  },
  {
    Date: "05/07/2023",
    Narration: "TO TRANSFER- UPI/DR/511199152524/AMERMOH/YESB/paytm.s1cz/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "153.00",
    Credit: "",
    Balance: "3612.08",
  },
  {
    Date: "05/07/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23552105016*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "36397.08",
  },
  {
    Date: "06/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/449525563790/MARGAM G/FDRL/9989647658/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "621.00",
    Credit: "",
    Balance: "35776.08",
  },
  {
    Date: "06/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/235353215225/Pankaj K/YESB/paytm.s18s/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "5318.00",
    Credit: "",
    Balance: "30458.08",
  },
  {
    Date: "07/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/539964310882/Mittapal/YESB/q546154483/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "6219.00",
    Credit: "",
    Balance: "24239.08",
  },
  {
    Date: "07/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/221123796622/KANNA G/YESB/Q424878884/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1713.00",
    Credit: "",
    Balance: "22526.08",
  },
  {
    Date: "08/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/604208225576/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "142.00",
    Credit: "",
    Balance: "22384.08",
  },
  {
    Date: "09/07/2023",
    Narration: "TO TRANSFER- UPI/DR/508269023713/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1235.00",
    Credit: "",
    Balance: "21149.08",
  },
  {
    Date: "10/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/359562455518/VEDIRAF/YESB/Q234145056/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "583.00",
    Credit: "",
    Balance: "20566.08",
  },
  {
    Date: "11/07/2023",
    Narration: "TO TRANSFER- UPI/DR/502345972042/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "3506.00",
    Credit: "",
    Balance: "17060.08",
  },
  {
    Date: "12/07/2023",
    Narration:
      "BY TRANSFER- UPI/CR/500376703999/Slice/IC IC/nesfbslice/BWebe023-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "464.00",
    Balance: "17524.08",
  },
  {
    Date: "13/07/2023",
    Narration: "TO TRANSFER- UPI/DR/507208073016/GOLLABA/YESB/paytmqr6b6/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "5377.00",
    Credit: "",
    Balance: "12147.08",
  },
  {
    Date: "14/07/2023",
    Narration:
      "BY TRANSFER- UPI/CR/797491250593/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "655.00",
    Balance: "12802.08",
  },
  {
    Date: "16/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/990117341384/VYJAYANT/YESB/paytm-1540/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "365.00",
    Credit: "",
    Balance: "12437.08",
  },
  {
    Date: "16/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/215784225543/Pankaj K/YESB/paytmqr6k1/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "6937.00",
    Credit: "",
    Balance: "5500.08",
  },
  {
    Date: "18/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/505846655146/SHEELAR/YESB/bharatpe5k/Pay T-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "114.00",
    Credit: "",
    Balance: "5386.08",
  },
  {
    Date: "21/07/2023",
    Narration:
      "TO TRANSFER- UPI/DR/077158776816/LATHA C/SBIN/Q016857315/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2022.00",
    Credit: "",
    Balance: "3364.08",
  },
  {
    Date: "21/07/2023",
    Narration: "TO TRANSFER- UPI/DR/057043170874/POLABHA/FDRL/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1637.00",
    Credit: "",
    Balance: "1727.08",
  },
  {
    Date: "03/08/2023",
    Narration:
      "BY TRANSFER- UPI/CR/509576293957/Maredip u/SBIN/chaiturock/UPI-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "538.00",
    Balance: "2265.08",
  },
  {
    Date: "03/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/548223560388/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "628.00",
    Credit: "",
    Balance: "1637.08",
  },
  {
    Date: "07/08/2023",
    Narration: "TO TRANSFER- UPI/DR/502340925518/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "34.00",
    Credit: "",
    Balance: "1603.08",
  },
  {
    Date: "07/08/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23250726386*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34388.08",
  },
  {
    Date: "08/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/548223560388/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2890.00",
    Credit: "",
    Balance: "31498.08",
  },
  {
    Date: "10/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/129589909758/Mr Banda/IDIB/bmbobbybmb/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2397.00",
    Credit: "",
    Balance: "29101.08",
  },
  {
    Date: "10/08/2023",
    Narration: "TO TRANSFER- UPI/DR/509818363954/TATAPLA/AIRP/tataplayli/UPI-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "3726.00",
    Credit: "",
    Balance: "25375.08",
  },
  {
    Date: "10/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/052855837018/ANNAPOOR/HDFC/annapoorna/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1463.00",
    Credit: "",
    Balance: "23912.08",
  },
  {
    Date: "15/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/782418744445/PENCHIKA/YESB/paytmqr67o/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2729.00",
    Credit: "",
    Balance: "21183.08",
  },
  {
    Date: "22/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/367202620757/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "835.00",
    Credit: "",
    Balance: "20348.08",
  },
  {
    Date: "23/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/269290076336/Eluri D/SBIN/7032321258/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "840.00",
    Credit: "",
    Balance: "19508.08",
  },
  {
    Date: "24/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/230338355398/HANJARAM/KVBL/harishacce/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1943.00",
    Credit: "",
    Balance: "17565.08",
  },
  {
    Date: "25/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/929857582168/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2426.00",
    Credit: "",
    Balance: "15139.08",
  },
  {
    Date: "25/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/545394250457/Paramesh/UTIB/gpay-11246/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "3407.00",
    Credit: "",
    Balance: "11732.08",
  },
  {
    Date: "26/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/942923110400/SRIGANE/YESB/paytmqr6cm/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "830.00",
    Credit: "",
    Balance: "10902.08",
  },
  {
    Date: "30/08/2023",
    Narration:
      "TO TRANSFER- UPI/DR/545102616616/bigbasket/YESB/bigbasket1/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2524.00",
    Credit: "",
    Balance: "8378.08",
  },
  {
    Date: "01/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/143810312736/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "5716.00",
    Credit: "",
    Balance: "2662.08",
  },
  {
    Date: "05/09/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23735327829*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "35447.08",
  },
  {
    Date: "06/09/2023",
    Narration:
      "BY TRANSFER- UPI/CR/440665217457/RAJAP ETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "724.00",
    Balance: "36171.08",
  },
  {
    Date: "08/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/893336721543/VADDE PR/YESB/Q403027984/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "986.00",
    Credit: "",
    Balance: "35185.08",
  },
  {
    Date: "10/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/638607567981/VISHAL M/HDFC/vishalmega/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2436.00",
    Credit: "",
    Balance: "32749.08",
  },
  {
    Date: "12/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/199868996598/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "6198.00",
    Credit: "",
    Balance: "26551.08",
  },
  {
    Date: "12/09/2023",
    Narration: "TO TRANSFER- UPI/DR/543023567504/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "831.00",
    Credit: "",
    Balance: "25720.08",
  },
  {
    Date: "15/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/782418744445/PENCHIKA/YESB/paytmqr67o/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "5493.00",
    Credit: "",
    Balance: "20227.08",
  },
  {
    Date: "15/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/990117341384/VYJAYANT/YESB/paytm-1540/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "4251.00",
    Credit: "",
    Balance: "15976.08",
  },
  {
    Date: "18/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/161934622410/BURUGU S/SBIN/swarnakuma/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2008.00",
    Credit: "",
    Balance: "13968.08",
  },
  {
    Date: "18/09/2023",
    Narration: "TO TRANSFER- UPI/DR/541000834498/MONUSO/YESB/q507091220/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "102.00",
    Credit: "",
    Balance: "13866.08",
  },
  {
    Date: "18/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/548599069536/Upparapu/SBIN/9866308659/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1615.00",
    Credit: "",
    Balance: "12251.08",
  },
  {
    Date: "25/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/288721840625/NYATHARI/HDFC/9505611804/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "578.00",
    Credit: "",
    Balance: "11673.08",
  },
  {
    Date: "25/09/2023",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "245.32",
    Balance: "11918.40",
  },
  {
    Date: "26/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/641295182667/SHREEGO/HDFC/Vyapar.170/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "484.00",
    Credit: "",
    Balance: "11434.40",
  },
  {
    Date: "26/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/630006549725/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "5320.00",
    Credit: "",
    Balance: "6114.40",
  },
  {
    Date: "29/09/2023",
    Narration:
      "TO TRANSFER- UPI/DR/508478220841/INNOVATI/ICIC/cf.innovat/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "3612.00",
    Credit: "",
    Balance: "2502.40",
  },
  {
    Date: "30/09/2023",
    Narration: "TO TRANSFER- UPI/DR/993914091689/EKART/YESB/EKART@ybl/Payment-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "184.00",
    Credit: "",
    Balance: "2318.40",
  },
  {
    Date: "01/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/540077074363/SHEELAR/YESB/bharatpe5k/Pay T-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "298.00",
    Credit: "",
    Balance: "2020.40",
  },
  {
    Date: "02/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/340462254216/Mr ACHY/YESB/Q587700423/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1475.00",
    Credit: "",
    Balance: "545.40",
  },
  {
    Date: "05/10/2023",
    Narration: "BY TRANSFER- UPI/CR/507935158619/MYAKALA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "819.00",
    Balance: "1364.40",
  },
  {
    Date: "05/10/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23307930739*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34149.40",
  },
  {
    Date: "06/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/843591412209/The coco/YESB/paytmqr5xc/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2935.00",
    Credit: "",
    Balance: "31214.40",
  },
  {
    Date: "10/10/2023",
    Narration: "TO TRANSFER- UPI/DR/538479207898/EDLABHA/YESB/q206259366/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "244.00",
    Credit: "",
    Balance: "30970.40",
  },
  {
    Date: "11/10/2023",
    Narration: "TO TRANSFER- UPI/DR/932078964429/GSRINATH/SBIN/8978362491/Pay-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "775.00",
    Credit: "",
    Balance: "30195.40",
  },
  {
    Date: "15/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/748431421261/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "950.00",
    Credit: "",
    Balance: "29245.40",
  },
  {
    Date: "16/10/2023",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "992.00",
    Balance: "30237.40",
  },
  {
    Date: "17/10/2023",
    Narration: "TO TRANSFER- UPI/DR/502174865195/GoogleI/utib/playstore-/UPI-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "3831.00",
    Credit: "",
    Balance: "26406.40",
  },
  {
    Date: "20/10/2023",
    Narration:
      "BY TRANSFER- UPI/CR/548599069536/Upparap u/SBIN/9866308659/Paid-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "732.00",
    Balance: "27138.40",
  },
  {
    Date: "20/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/287426364998/KANCHARA/KKBK/9010094567/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "707.00",
    Credit: "",
    Balance: "26431.40",
  },
  {
    Date: "21/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/538145383585/KOLIPAKA/YESB/q42825098@/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "312.00",
    Credit: "",
    Balance: "26119.40",
  },
  {
    Date: "23/10/2023",
    Narration: "TO TRANSFER- UPI/DR/548375833674/TJPANS/UTIB/gpay-11256/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2611.00",
    Credit: "",
    Balance: "23508.40",
  },
  {
    Date: "24/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/545056134957/MANNEM N/FDRL/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "665.00",
    Credit: "",
    Balance: "22843.40",
  },
  {
    Date: "25/10/2023",
    Narration: "TO TRANSFER- UPI/DR/548375833674/TJPANS/UTIB/gpay-11256/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2540.00",
    Credit: "",
    Balance: "20303.40",
  },
  {
    Date: "27/10/2023",
    Narration:
      "TO TRANSFER- UPI/DR/133065603860/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "437.00",
    Credit: "",
    Balance: "19866.40",
  },
  {
    Date: "01/11/2023",
    Narration: "TO TRANSFER- UPI/DR/547701350624/MahaLax/UTIB/9550905803/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "953.00",
    Credit: "",
    Balance: "18913.40",
  },
  {
    Date: "01/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/748431421261/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "277.00",
    Credit: "",
    Balance: "18636.40",
  },
  {
    Date: "05/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/690604563558/MANALAZ/HDFC/Vyapar.171/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "166.00",
    Credit: "",
    Balance: "18470.40",
  },
  {
    Date: "06/11/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23586481833*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "51255.40",
  },
  {
    Date: "11/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/687464587808/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2180.00",
    Credit: "",
    Balance: "49075.40",
  },
  {
    Date: "12/11/2023",
    Narration:
      "BY TRANSFER- UPI/CR/141176994034/BURUG U /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "343.00",
    Balance: "49418.40",
  },
  {
    Date: "13/11/2023",
    Narration: "TO TRANSFER- UPI/DR/508269024123/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "4373.00",
    Credit: "",
    Balance: "45045.40",
  },
  {
    Date: "14/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/159735066301/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "279.00",
    Credit: "",
    Balance: "44766.40",
  },
  {
    Date: "15/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/545172457303/AKSHANTH/YESB/q463233814/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "4480.00",
    Credit: "",
    Balance: "40286.40",
  },
  {
    Date: "16/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/546431420568/Keshav P/YESB/paytmqr12d/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "213.00",
    Credit: "",
    Balance: "40073.40",
  },
  {
    Date: "19/11/2023",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "282.00",
    Balance: "40355.40",
  },
  {
    Date: "19/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/538256823710/LAXMINAR/YESB/paytm.s18t/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "17700.00",
    Credit: "",
    Balance: "22655.40",
  },
  {
    Date: "19/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/100047818927/AIRBNB/HDFC/billdeskpg/AIRBNB-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2467.00",
    Credit: "",
    Balance: "20188.40",
  },
  {
    Date: "19/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/990117341384/VYJAYANT/YESB/paytm-1540/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2525.00",
    Credit: "",
    Balance: "17663.40",
  },
  {
    Date: "21/11/2023",
    Narration: "TO TRANSFER- UPI/DR/968955010630/CHIPPAN/UNBA/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "5674.00",
    Credit: "",
    Balance: "11989.40",
  },
  {
    Date: "22/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/545282653980/Pankaj K/YESB/paytm.s18s/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "145.00",
    Credit: "",
    Balance: "11844.40",
  },
  {
    Date: "25/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/544340281568/ZEPTO/UTIB/cp.zepto13/payment-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "3294.00",
    Credit: "",
    Balance: "8550.40",
  },
  {
    Date: "25/11/2023",
    Narration: "TO TRANSFER- UPI/DR/538369520572/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "216.00",
    Credit: "",
    Balance: "8334.40",
  },
  {
    Date: "27/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/547809884620/GUNDREDD/YESB/paytm.s16y/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1458.00",
    Credit: "",
    Balance: "6876.40",
  },
  {
    Date: "28/11/2023",
    Narration:
      "TO TRANSFER- UPI/DR/987958887840/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "39.00",
    Credit: "",
    Balance: "6837.40",
  },
  {
    Date: "29/11/2023",
    Narration: "TO TRANSFER- UPI/DR/515671034306/slice/N ESF/borrowrepa/UPI-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2743.00",
    Credit: "",
    Balance: "4094.40",
  },
  {
    Date: "02/12/2023",
    Narration: "TO TRANSFER- UPI/DR/501079697254/MAbhina/YESB/paytmqr60o/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "275.00",
    Credit: "",
    Balance: "3819.40",
  },
  {
    Date: "05/12/2023",
    Narration: "TO TRANSFER- UPI/DR/968955010630/CHIPPAN/UNBA/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "38.00",
    Credit: "",
    Balance: "3781.40",
  },
  {
    Date: "05/12/2023",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23144090227*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "36566.40",
  },
  {
    Date: "09/12/2023",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "834.00",
    Balance: "37400.40",
  },
  {
    Date: "09/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/906819118255/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1394.00",
    Credit: "",
    Balance: "36006.40",
  },
  {
    Date: "11/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/703738667768/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2222.00",
    Credit: "",
    Balance: "33784.40",
  },
  {
    Date: "11/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/226311904697/KUNKUMAL/YESB/paytmqr6fi/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2217.00",
    Credit: "",
    Balance: "31567.40",
  },
  {
    Date: "13/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/167969532150/NYATHARI/SBIN/9642694415/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1210.00",
    Credit: "",
    Balance: "30357.40",
  },
  {
    Date: "14/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/978816909209/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2201.00",
    Credit: "",
    Balance: "28156.40",
  },
  {
    Date: "14/12/2023",
    Narration: "ATM WDL-ATM CASH 1507 OPP RAILWAY STATION KACHUGUDA-",
    Ref: "",
    Debit: "18000.00",
    Credit: "",
    Balance: "10156.40",
  },
  {
    Date: "15/12/2023",
    Narration: "TO TRANSFER- UPI/DR/500975590120/PURANMAL/YESB/q625787804/Pai-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "555.00",
    Credit: "",
    Balance: "9601.40",
  },
  {
    Date: "20/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/874211488000/Madhava /UTIB/gpay-11235/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "5606.00",
    Credit: "",
    Balance: "3995.40",
  },
  {
    Date: "22/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/543476411159/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1847.00",
    Credit: "",
    Balance: "2148.40",
  },
  {
    Date: "25/12/2023",
    Narration:
      "BY TRANSFER- UPI/CR/548599069536/Upparap u/SBIN/9866308659/Paid-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "726.00",
    Balance: "2874.40",
  },
  {
    Date: "25/12/2023",
    Narration: "TO TRANSFER- UPI/DR/501079697254/MAbhina/YESB/paytmqr60o/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "336.00",
    Credit: "",
    Balance: "2538.40",
  },
  {
    Date: "25/12/2023",
    Narration: "TO TRANSFER- UPI/DR/509514344426/MR MD RA/YESB/paytmqr69x/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1906.00",
    Credit: "",
    Balance: "632.40",
  },
  {
    Date: "25/12/2023",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "190.74",
    Balance: "823.14",
  },
  {
    Date: "30/12/2023",
    Narration:
      "TO TRANSFER- UPI/DR/145655790200/AKINABOI/YESB/Q224344190/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "265.00",
    Credit: "",
    Balance: "558.14",
  },
  {
    Date: "01/01/2024",
    Narration:
      "BY TRANSFER- UPI/CR/322210234900/PIXELTES/SBIN/pixeltests/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "271.00",
    Balance: "829.14",
  },
  {
    Date: "02/01/2024",
    Narration:
      "TO TRANSFER- UPI/DR/652035529920/THAKUR J/YESB/paytm.s1ej/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "592.00",
    Credit: "",
    Balance: "237.14",
  },
  {
    Date: "05/01/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN23260235596*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33022.14",
  },
  {
    Date: "07/01/2024",
    Narration: "TO TRANSFER- UPI/DR/502992789486/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "7251.00",
    Credit: "",
    Balance: "25771.14",
  },
  {
    Date: "08/01/2024",
    Narration: "TO TRANSFER- UPI/DR/544412323437/Google I/utib/playstore-/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2420.00",
    Credit: "",
    Balance: "23351.14",
  },
  {
    Date: "09/01/2024",
    Narration:
      "TO TRANSFER- UPI/DR/544606658141/MOHAMMED/YESB/paytmqr66o/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1190.00",
    Credit: "",
    Balance: "22161.14",
  },
  {
    Date: "10/01/2024",
    Narration: "TO TRANSFER- UPI/DR/539512411280/THAMMIS/YESB/q808936565/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "20500.00",
    Credit: "",
    Balance: "1661.14",
  },
  {
    Date: "23/01/2024",
    Narration:
      "TO TRANSFER- UPI/DR/545159327240/Zepto/ICIC/zeptonow.b/Paid via-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "847.00",
    Credit: "",
    Balance: "814.14",
  },
  {
    Date: "25/01/2024",
    Narration:
      "TO TRANSFER- UPI/DR/523571722241/ASEEMA B/YESB/paytm.s141/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "730.00",
    Credit: "",
    Balance: "84.14",
  },
  {
    Date: "29/01/2024",
    Narration: "BY TRANSFER- UPI/CR/509319682855/MYAKALA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "857.00",
    Balance: "941.14",
  },
  {
    Date: "29/01/2024",
    Narration:
      "TO TRANSFER- UPI/DR/890387768165/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "356.00",
    Credit: "",
    Balance: "585.14",
  },
  {
    Date: "30/01/2024",
    Narration: "TO TRANSFER- UPI/DR/502992789486/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "400.00",
    Credit: "",
    Balance: "185.14",
  },
  {
    Date: "31/01/2024",
    Narration:
      "BY TRANSFER- UPI/CR/362720098112/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "455.00",
    Balance: "640.14",
  },
  {
    Date: "05/02/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24195439997*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33425.14",
  },
  {
    Date: "08/02/2024",
    Narration:
      "BY TRANSFER- UPI/CR/505203382315/slice/N ESF/sliceborro/BW84647b-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "986.00",
    Balance: "34411.14",
  },
  {
    Date: "09/02/2024",
    Narration: "TO TRANSFER- UPI/DR/500637147974/NARESHK/YESB/paytmqr5z2/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "3301.00",
    Credit: "",
    Balance: "31110.14",
  },
  {
    Date: "09/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/548372221749/Challa C/YESB/paytmqr5bl/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2358.00",
    Credit: "",
    Balance: "28752.14",
  },
  {
    Date: "10/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/947570563750/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "452.00",
    Credit: "",
    Balance: "28300.14",
  },
  {
    Date: "10/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/755427076991/HASITHA/UTIB/gpay-11255/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "216.00",
    Credit: "",
    Balance: "28084.14",
  },
  {
    Date: "12/02/2024",
    Narration:
      "BY TRANSFER- UPI/CR/823525980243/BURUGU  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "812.00",
    Balance: "28896.14",
  },
  {
    Date: "13/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/554308176775/ZEPTONOW/HDFC/zeptonow.e/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "490.00",
    Credit: "",
    Balance: "28406.14",
  },
  {
    Date: "14/02/2024",
    Narration: "TO TRANSFER- UPI/DR/500858436286/MDMAHAB/YESB/q301101075/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "6636.00",
    Credit: "",
    Balance: "21770.14",
  },
  {
    Date: "14/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/831515587117/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "143.00",
    Credit: "",
    Balance: "21627.14",
  },
  {
    Date: "14/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/319508768864/CHAMARTH/SBIN/7013118441/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "858.00",
    Credit: "",
    Balance: "20769.14",
  },
  {
    Date: "14/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/162342479667/EDIGIBH/YESB/Q505694359/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1098.00",
    Credit: "",
    Balance: "19671.14",
  },
  {
    Date: "14/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/873082119309/BuruguR/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "5331.00",
    Credit: "",
    Balance: "14340.14",
  },
  {
    Date: "16/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/371353327970/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "10700.00",
    Credit: "",
    Balance: "3640.14",
  },
  {
    Date: "17/02/2024",
    Narration:
      "BY TRANSFER- UPI/CR/946788327630/PULKAM N/SBIN/naveenpate/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "668.00",
    Balance: "4308.14",
  },
  {
    Date: "24/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/623110987743/Gujjula/YESB/Q402832283/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "727.00",
    Credit: "",
    Balance: "3581.14",
  },
  {
    Date: "25/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/539408514178/A1BAKERY/YESB/paytmqr1bt/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "50.00",
    Credit: "",
    Balance: "3531.14",
  },
  {
    Date: "25/02/2024",
    Narration:
      "TO TRANSFER- UPI/DR/100916624115/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1801.00",
    Credit: "",
    Balance: "1730.14",
  },
  {
    Date: "27/02/2024",
    Narration: "TO TRANSFER- UPI/DR/502569500848/YAMARAG/YESB/paytmqr633/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "417.00",
    Credit: "",
    Balance: "1313.14",
  },
  {
    Date: "01/03/2024",
    Narration:
      "BY TRANSFER- UPI/CR/706314755776/BURUGU S/SBIN/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "737.00",
    Balance: "2050.14",
  },
  {
    Date: "03/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/509753548829/Upparapu/SBIN/9866308659/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "213.00",
    Credit: "",
    Balance: "1837.14",
  },
  {
    Date: "05/03/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24846587842*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34622.14",
  },
  {
    Date: "09/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/691219239211/MITAP ELL/YESB/Q230872072/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1818.00",
    Credit: "",
    Balance: "32804.14",
  },
  {
    Date: "09/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/915686858215/PULKAM /KKBK/6303798573/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1230.00",
    Credit: "",
    Balance: "31574.14",
  },
  {
    Date: "09/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/713800632927/UNIQUEI/UTIB/PAYUPAYMEN/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "207.00",
    Credit: "",
    Balance: "31367.14",
  },
  {
    Date: "11/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/941249519433/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "63.00",
    Credit: "",
    Balance: "31304.14",
  },
  {
    Date: "12/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/554718768730/CRED Club/UTIB/cred.club@/paym-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "94.00",
    Credit: "",
    Balance: "31210.14",
  },
  {
    Date: "12/03/2024",
    Narration: "TO TRANSFER- UPI/DR/539847377058/Active/YESB/paytmqr5yz/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "827.00",
    Credit: "",
    Balance: "30383.14",
  },
  {
    Date: "12/03/2024",
    Narration: "TO TRANSFER- UPI/DR/545172448506/MS KESH/ICIC/eazypay.2r/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2968.00",
    Credit: "",
    Balance: "27415.14",
  },
  {
    Date: "13/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/248251466090/The coco/YESB/paytmqr5jp/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "8600.00",
    Credit: "",
    Balance: "18815.14",
  },
  {
    Date: "14/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/548223560388/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "926.00",
    Credit: "",
    Balance: "17889.14",
  },
  {
    Date: "15/03/2024",
    Narration: "TO TRANSFER- UPI/DR/502230074338/AMERMOH/YESB/paytm.s10t/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2042.00",
    Credit: "",
    Balance: "15847.14",
  },
  {
    Date: "21/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/506593813287/SRI KRIS/YESB/paytmqr6af/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "337.00",
    Credit: "",
    Balance: "15510.14",
  },
  {
    Date: "22/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/554838743276/SANDELA /FDRL/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "482.00",
    Credit: "",
    Balance: "15028.14",
  },
  {
    Date: "25/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/510414183819/SHESHADR/YESB/paytm-8845/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "870.00",
    Credit: "",
    Balance: "14158.14",
  },
  {
    Date: "25/03/2024",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "251.79",
    Balance: "14409.93",
  },
  {
    Date: "27/03/2024",
    Narration:
      "BY TRANSFER- UPI/CR/509506247856/Maredip u/SBIN/chaiturock/UPI-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "466.00",
    Balance: "14875.93",
  },
  {
    Date: "27/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/982374720290/BuruguR/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "91.00",
    Credit: "",
    Balance: "14784.93",
  },
  {
    Date: "28/03/2024",
    Narration:
      "TO TRANSFER- UPI/DR/409714078924/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "354.00",
    Credit: "",
    Balance: "14430.93",
  },
  {
    Date: "05/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/506288353120/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "4483.00",
    Credit: "",
    Balance: "9947.93",
  },
  {
    Date: "05/04/2024",
    Narration: "TO TRANSFER- UPI/DR/166513150025/BOINIR/YESB/Q627221314/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "737.00",
    Credit: "",
    Balance: "9210.93",
  },
  {
    Date: "05/04/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24231622098*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "41995.93",
  },
  {
    Date: "07/04/2024",
    Narration:
      "BY TRANSFER- UPI/CR/509780864837/slice/N ESF/sliceborro/BWe5c969-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "264.00",
    Balance: "42259.93",
  },
  {
    Date: "08/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/370880400595/MASTER T/UTIB/gpay-11225/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1220.00",
    Credit: "",
    Balance: "41039.93",
  },
  {
    Date: "13/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/541994239577/ArunPatel/AIRP/3187918513/Pay-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "132.00",
    Credit: "",
    Balance: "40907.93",
  },
  {
    Date: "13/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/280311544305/SUTARAS/YESB/Q449293071/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "721.00",
    Credit: "",
    Balance: "40186.93",
  },
  {
    Date: "14/04/2024",
    Narration: "TO TRANSFER- UPI/DR/540077688844/SAINATH/HDFC/sainathpes/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "142.00",
    Credit: "",
    Balance: "40044.93",
  },
  {
    Date: "14/04/2024",
    Narration: "TO TRANSFER- UPI/DR/539512411280/THAMMIS/YESB/q808936565/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2161.00",
    Credit: "",
    Balance: "37883.93",
  },
  {
    Date: "15/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/549313793095/ARVIND K/YESB/Q250076330/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "175.00",
    Credit: "",
    Balance: "37708.93",
  },
  {
    Date: "16/04/2024",
    Narration:
      "BY TRANSFER- UPI/CR/850096804335/NANDI M/KKBK/8499969647/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "994.00",
    Balance: "38702.93",
  },
  {
    Date: "16/04/2024",
    Narration:
      "BY TRANSFER- UPI/CR/844342550123/MADDELA /UBIN/jaganmadde/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "520.00",
    Balance: "39222.93",
  },
  {
    Date: "16/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/406184104837/BAREN KAL/CNRB/1046129040/Payt-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "680.00",
    Credit: "",
    Balance: "38542.93",
  },
  {
    Date: "18/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/548156046816/AKSHANTH/YESB/q463233814/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "211.00",
    Credit: "",
    Balance: "38331.93",
  },
  {
    Date: "19/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/622253620098/Myakala /SBIN/7337403171/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2965.00",
    Credit: "",
    Balance: "35366.93",
  },
  {
    Date: "19/04/2024",
    Narration: "ATM WDL-ATM CASH 34 +ATM/JANATHAIALLI BANGALORE",
    Ref: "",
    Debit: "10000.00",
    Credit: "",
    Balance: "25366.93",
  },
  {
    Date: "21/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/247045989190/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "669.00",
    Credit: "",
    Balance: "24697.93",
  },
  {
    Date: "22/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/806147901847/MOHAMMED/YESB/Q752284759/Pay me-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1400.00",
    Credit: "",
    Balance: "23297.93",
  },
  {
    Date: "25/04/2024",
    Narration: "TO TRANSFER- UPI/DR/500676372477/GEDDITC/YESB/paytm-8385/Sent-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "443.00",
    Credit: "",
    Balance: "22854.93",
  },
  {
    Date: "25/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/430960691962/SABAVAT /SBIN/jai.vee@ax/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "7382.00",
    Credit: "",
    Balance: "15472.93",
  },
  {
    Date: "27/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/188666612321/Maredipu/SBIN/9182170428/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "84.00",
    Credit: "",
    Balance: "15388.93",
  },
  {
    Date: "29/04/2024",
    Narration:
      "TO TRANSFER- UPI/DR/546010116218/LAXMINA/BARB/3070302@yb/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1561.00",
    Credit: "",
    Balance: "13827.93",
  },
  {
    Date: "02/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/690604563558/MANALAZ/HDFC/Vyapar.171/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "635.00",
    Credit: "",
    Balance: "13192.93",
  },
  {
    Date: "06/05/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24969859462*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "45977.93",
  },
  {
    Date: "10/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/508414007247/BBNOW/HDFC/bbnow.ebz@/Paid via-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1806.00",
    Credit: "",
    Balance: "44171.93",
  },
  {
    Date: "12/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/962732365774/The coco/YESB/paytmqr5xc/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2836.00",
    Credit: "",
    Balance: "41335.93",
  },
  {
    Date: "14/05/2024",
    Narration:
      "BY TRANSFER- UPI/CR/973531074353/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "595.00",
    Balance: "41930.93",
  },
  {
    Date: "14/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/114917771049/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1276.00",
    Credit: "",
    Balance: "40654.93",
  },
  {
    Date: "14/05/2024",
    Narration: "TO TRANSFER- UPI/DR/500975400987/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2279.00",
    Credit: "",
    Balance: "38375.93",
  },
  {
    Date: "14/05/2024",
    Narration: "TO TRANSFER- UPI/DR/502992793396/PULKAMN/SBIN/naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "4040.00",
    Credit: "",
    Balance: "34335.93",
  },
  {
    Date: "14/05/2024",
    Narration: "ATM WDL-ATM CASH 51012 JEEDIMETLA Secunderabad-",
    Ref: "",
    Debit: "25000.00",
    Credit: "",
    Balance: "9335.93",
  },
  {
    Date: "20/05/2024",
    Narration: "TO TRANSFER- UPI/DR/502345813298/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "643.00",
    Credit: "",
    Balance: "8692.93",
  },
  {
    Date: "21/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/588854854909/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "499.00",
    Credit: "",
    Balance: "8193.93",
  },
  {
    Date: "22/05/2024",
    Narration:
      "BY TRANSFER- UPI/CR/548599081975/Upparap u/SBIN/9866308659/Paid-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "262.00",
    Balance: "8455.93",
  },
  {
    Date: "23/05/2024",
    Narration: "TO TRANSFER- UPI/DR/502642580910/GoogleI/utib/playstore-/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "4144.00",
    Credit: "",
    Balance: "4311.93",
  },
  {
    Date: "23/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/667333437810/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "138.00",
    Credit: "",
    Balance: "4173.93",
  },
  {
    Date: "25/05/2024",
    Narration:
      "BY TRANSFER- UPI/CR/502992982539/PULKA M N/SBIN/8096752729/UPI-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "487.00",
    Balance: "4660.93",
  },
  {
    Date: "27/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/511547734095/Pincode/UTIB/pincodesho/Paymen-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "872.00",
    Credit: "",
    Balance: "3788.93",
  },
  {
    Date: "27/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/811306294792/MUNNA KU/YESB/paytmqr60x/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "59.00",
    Credit: "",
    Balance: "3729.93",
  },
  {
    Date: "27/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/792357384767/Navneet /YESB/paytmqr5wl/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "3124.00",
    Credit: "",
    Balance: "605.93",
  },
  {
    Date: "27/05/2024",
    Narration:
      "TO TRANSFER- UPI/DR/217090315986/MD AZAM/YESB/Q851178672/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "302.00",
    Credit: "",
    Balance: "303.93",
  },
  {
    Date: "05/06/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24676493417*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33088.93",
  },
  {
    Date: "13/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/290028119274/Mittapal/SBIN/9640059203/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1631.00",
    Credit: "",
    Balance: "31457.93",
  },
  {
    Date: "15/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/035427645862/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2965.00",
    Credit: "",
    Balance: "28492.93",
  },
  {
    Date: "17/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/424387745632/KRISHNA /YESB/Q252051047/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "12900.00",
    Credit: "",
    Balance: "15592.93",
  },
  {
    Date: "17/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/260067211135/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2441.00",
    Credit: "",
    Balance: "13151.93",
  },
  {
    Date: "20/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/012861904122/Mr MOHAM/YESB/Q991125685/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "181.00",
    Credit: "",
    Balance: "12970.93",
  },
  {
    Date: "23/06/2024",
    Narration:
      "BY TRANSFER- UPI/CR/850096804335/NANDI M/KKBK/8499969647/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "930.00",
    Balance: "13900.93",
  },
  {
    Date: "23/06/2024",
    Narration:
      "BY TRANSFER- UPI/CR/452352234892/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "535.00",
    Balance: "14435.93",
  },
  {
    Date: "23/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/449525563790/MARGAM G/FDRL/9989647658/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "541.00",
    Credit: "",
    Balance: "13894.93",
  },
  {
    Date: "24/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/775525086053/LIMGAMPE/YESB/Q660345130/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "731.00",
    Credit: "",
    Balance: "13163.93",
  },
  {
    Date: "25/06/2024",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "154.52",
    Balance: "13318.45",
  },
  {
    Date: "28/06/2024",
    Narration: "TO TRANSFER- UPI/DR/501170369653/BURUGUR/ICIC/swarnakuma/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "432.00",
    Credit: "",
    Balance: "12886.45",
  },
  {
    Date: "30/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/717856210315/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "647.00",
    Credit: "",
    Balance: "12239.45",
  },
  {
    Date: "30/06/2024",
    Narration:
      "TO TRANSFER- UPI/DR/793489133002/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "5144.00",
    Credit: "",
    Balance: "7095.45",
  },
  {
    Date: "02/07/2024",
    Narration:
      "TO TRANSFER- UPI/DR/512126698999/MURAGAN /YESB/paytmqr5w5/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "164.00",
    Credit: "",
    Balance: "6931.45",
  },
  {
    Date: "03/07/2024",
    Narration:
      "TO TRANSFER- UPI/DR/145655790200/AKINABOI/YESB/Q224344190/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2016.00",
    Credit: "",
    Balance: "4915.45",
  },
  {
    Date: "05/07/2024",
    Narration:
      "TO TRANSFER- UPI/DR/085212494198/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2117.00",
    Credit: "",
    Balance: "2798.45",
  },
  {
    Date: "05/07/2024",
    Narration:
      "TO TRANSFER- UPI/DR/243793513476/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "153.00",
    Credit: "",
    Balance: "2645.45",
  },
  {
    Date: "05/07/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24668082100*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "35430.45",
  },
  {
    Date: "08/07/2024",
    Narration:
      "BY TRANSFER- UPI/CR/823759396199/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "865.00",
    Balance: "36295.45",
  },
  {
    Date: "08/07/2024",
    Narration: "TO TRANSFER- UPI/DR/505853161521/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "702.00",
    Credit: "",
    Balance: "35593.45",
  },
  {
    Date: "13/07/2024",
    Narration: "TO TRANSFER- UPI/DR/544933768635/SIVAVEN/YESB/paytmqr67m/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "4101.00",
    Credit: "",
    Balance: "31492.45",
  },
  {
    Date: "13/07/2024",
    Narration: "TO TRANSFER- UPI/DR/500217998759/GOLLABA/YESB/paytmqr62o/Sent-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "3874.00",
    Credit: "",
    Balance: "27618.45",
  },
  {
    Date: "14/07/2024",
    Narration:
      "TO TRANSFER- UPI/DR/505846655146/SHEELAR/YESB/bharatpe5k/Pay T-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "16300.00",
    Credit: "",
    Balance: "11318.45",
  },
  {
    Date: "14/07/2024",
    Narration:
      "TO TRANSFER- UPI/DR/508210199139/Upparapu/SBIN/9866308659/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "6525.00",
    Credit: "",
    Balance: "4793.45",
  },
  {
    Date: "15/07/2024",
    Narration: "TO TRANSFER- UPI/DR/511199152524/AMERMOH/YESB/paytm.s1cz/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1966.00",
    Credit: "",
    Balance: "2827.45",
  },
  {
    Date: "27/07/2024",
    Narration:
      "BY TRANSFER- UPI/CR/509733491635/slice/N ESF/sliceborro/BWb5913c-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "868.00",
    Balance: "3695.45",
  },
  {
    Date: "27/07/2024",
    Narration:
      "TO TRANSFER- UPI/DR/687464587808/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1212.00",
    Credit: "",
    Balance: "2483.45",
  },
  {
    Date: "02/08/2024",
    Narration:
      "BY TRANSFER- UPI/CR/472488679103/MR RAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "625.00",
    Balance: "3108.45",
  },
  {
    Date: "03/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/293976046372/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "67.00",
    Credit: "",
    Balance: "3041.45",
  },
  {
    Date: "05/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/114043233312/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1245.00",
    Credit: "",
    Balance: "1796.45",
  },
  {
    Date: "05/08/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24682350079*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34581.45",
  },
  {
    Date: "08/08/2024",
    Narration: "TO TRANSFER- UPI/DR/508269023713/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2896.00",
    Credit: "",
    Balance: "31685.45",
  },
  {
    Date: "11/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/604208225576/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "7708.00",
    Credit: "",
    Balance: "23977.45",
  },
  {
    Date: "11/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/237701220935/Zepto/YESB/ZEPTOONLIN/Payment-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "917.00",
    Credit: "",
    Balance: "23060.45",
  },
  {
    Date: "16/08/2024",
    Narration: "TO TRANSFER- UPI/DR/508269021922/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "213.00",
    Credit: "",
    Balance: "22847.45",
  },
  {
    Date: "17/08/2024",
    Narration:
      "BY TRANSFER- UPI/CR/850096804335/NANDI M/KKBK/8499969647/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "826.00",
    Balance: "23673.45",
  },
  {
    Date: "18/08/2024",
    Narration:
      "BY TRANSFER- UPI/CR/522654321012/MR RAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "325.00",
    Balance: "23998.45",
  },
  {
    Date: "20/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/566212124989/YALLAVI/ICIC/9676140884/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "3069.00",
    Credit: "",
    Balance: "20929.45",
  },
  {
    Date: "21/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/482911046811/Katla Ch/SBIN/7382326202/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "503.00",
    Credit: "",
    Balance: "20426.45",
  },
  {
    Date: "22/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/094899032808/THAMMIS/YESB/Q808936565/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2277.00",
    Credit: "",
    Balance: "18149.45",
  },
  {
    Date: "26/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/545394250457/Paramesh/UTIB/gpay-11246/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1858.00",
    Credit: "",
    Balance: "16291.45",
  },
  {
    Date: "26/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/771782264207/Sri Adhi/UTIB/gpay-11251/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1077.00",
    Credit: "",
    Balance: "15214.45",
  },
  {
    Date: "27/08/2024",
    Narration: "TO TRANSFER- UPI/DR/544933768635/SIVAVEN/YESB/paytmqr67m/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1280.00",
    Credit: "",
    Balance: "13934.45",
  },
  {
    Date: "28/08/2024",
    Narration: "TO TRANSFER- UPI/DR/509581269668/slice/N ESF/repayments/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2437.00",
    Credit: "",
    Balance: "11497.45",
  },
  {
    Date: "28/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/800810481988/BAKI HY/YESB/paytmqr67o/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "823.00",
    Credit: "",
    Balance: "10674.45",
  },
  {
    Date: "29/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/372784348961/Tata Play/YESB/paytm-5674/Tran-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1498.00",
    Credit: "",
    Balance: "9176.45",
  },
  {
    Date: "30/08/2024",
    Narration:
      "TO TRANSFER- UPI/DR/500442343767/Zepto/AIRP/zepto36581/Sent usi-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "299.00",
    Credit: "",
    Balance: "8877.45",
  },
  {
    Date: "01/09/2024",
    Narration: "TO TRANSFER- UPI/DR/507319707090/SURARAM/FDRL/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "540.00",
    Credit: "",
    Balance: "8337.45",
  },
  {
    Date: "04/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/215718099112/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2526.00",
    Credit: "",
    Balance: "5811.45",
  },
  {
    Date: "05/09/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24538808215*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "38596.45",
  },
  {
    Date: "06/09/2024",
    Narration:
      "BY TRANSFER- UPI/CR/913376792017/DIVYA S/CNRB/8867379317/Paymen-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "458.00",
    Balance: "39054.45",
  },
  {
    Date: "06/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/507354605551/BURUGUR/PPIW/9652172933/Add M-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1446.00",
    Credit: "",
    Balance: "37608.45",
  },
  {
    Date: "08/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/415904925797/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "14000.00",
    Credit: "",
    Balance: "23608.45",
  },
  {
    Date: "09/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/837802788038/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "7671.00",
    Credit: "",
    Balance: "15937.45",
  },
  {
    Date: "11/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/242198760355/Farahath/YESB/paytmqr6kc/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2013.00",
    Credit: "",
    Balance: "13924.45",
  },
  {
    Date: "14/09/2024",
    Narration: "TO TRANSFER- UPI/DR/545058965948/KKOTESW/YESB/q701963034/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "776.00",
    Credit: "",
    Balance: "13148.45",
  },
  {
    Date: "14/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/545052352576/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "447.00",
    Credit: "",
    Balance: "12701.45",
  },
  {
    Date: "15/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/215784225543/Pankaj K/YESB/paytmqr6k1/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "4315.00",
    Credit: "",
    Balance: "8386.45",
  },
  {
    Date: "16/09/2024",
    Narration: "TO TRANSFER- UPI/DR/500965600422/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "943.00",
    Credit: "",
    Balance: "7443.45",
  },
  {
    Date: "21/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/068216009769/POTNURU /YESB/paytmqr281/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "123.00",
    Credit: "",
    Balance: "7320.45",
  },
  {
    Date: "21/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/489305393977/Srinivas/UTIB/gpay-11246/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "805.00",
    Credit: "",
    Balance: "6515.45",
  },
  {
    Date: "22/09/2024",
    Narration: "TO TRANSFER- UPI/DR/500965600422/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2131.00",
    Credit: "",
    Balance: "4384.45",
  },
  {
    Date: "25/09/2024",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "375.31",
    Balance: "4759.76",
  },
  {
    Date: "29/09/2024",
    Narration:
      "TO TRANSFER- UPI/DR/114917771049/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "800.00",
    Credit: "",
    Balance: "3959.76",
  },
  {
    Date: "04/10/2024",
    Narration:
      "BY TRANSFER- UPI/CR/507791175032/Myakal a /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "234.00",
    Balance: "4193.76",
  },
  {
    Date: "05/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/612636923770/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2902.00",
    Credit: "",
    Balance: "1291.76",
  },
  {
    Date: "07/10/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24502270060*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34076.76",
  },
  {
    Date: "14/10/2024",
    Narration: "TO TRANSFER- UPI/DR/539508941936/KUMBHA/YESB/q423446934/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "7242.00",
    Credit: "",
    Balance: "26834.76",
  },
  {
    Date: "14/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/510515668369/KRISHNAR/YESB/q130613978/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "3348.00",
    Credit: "",
    Balance: "23486.76",
  },
  {
    Date: "16/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/308786872652/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2697.00",
    Credit: "",
    Balance: "20789.76",
  },
  {
    Date: "16/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/006490593500/Mittapal/SBIN/9640059203/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2573.00",
    Credit: "",
    Balance: "18216.76",
  },
  {
    Date: "19/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/638607567981/VISHAL M/HDFC/vishalmega/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "702.00",
    Credit: "",
    Balance: "17514.76",
  },
  {
    Date: "23/10/2024",
    Narration: "TO TRANSFER- UPI/DR/508269023179/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "6129.00",
    Credit: "",
    Balance: "11385.76",
  },
  {
    Date: "24/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/497687938494/THADIGOP/UBIN/8767566104/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2077.00",
    Credit: "",
    Balance: "9308.76",
  },
  {
    Date: "25/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/660889067436/Upparap u/SBIN/9866308659/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "7535.00",
    Credit: "",
    Balance: "1773.76",
  },
  {
    Date: "27/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/730689737010/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "623.00",
    Credit: "",
    Balance: "1150.76",
  },
  {
    Date: "30/10/2024",
    Narration:
      "TO TRANSFER- UPI/DR/367355925683/MRRAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "81.00",
    Credit: "",
    Balance: "1069.76",
  },
  {
    Date: "31/10/2024",
    Narration: "TO TRANSFER- UPI/DR/540077688844/SAINATH/HDFC/sainathpes/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "650.00",
    Credit: "",
    Balance: "419.76",
  },
  {
    Date: "05/11/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24883683594*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33204.76",
  },
  {
    Date: "07/11/2024",
    Narration:
      "TO TRANSFER- UPI/DR/497687938494/THADIGOP/UBIN/8767566104/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "16900.00",
    Credit: "",
    Balance: "16304.76",
  },
  {
    Date: "13/11/2024",
    Narration:
      "TO TRANSFER- UPI/DR/457317304863/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2531.00",
    Credit: "",
    Balance: "13773.76",
  },
  {
    Date: "15/11/2024",
    Narration:
      "TO TRANSFER- UPI/DR/762112788635/Maredipu/SBIN/9182170428/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "155.00",
    Credit: "",
    Balance: "13618.76",
  },
  {
    Date: "15/11/2024",
    Narration:
      "TO TRANSFER- UPI/DR/313291440279/MR MD RA/YESB/paytmqr69x/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1912.00",
    Credit: "",
    Balance: "11706.76",
  },
  {
    Date: "16/11/2024",
    Narration: "TO TRANSFER- UPI/DR/539401814320/PankajK/YESB/paytm.s120/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "283.00",
    Credit: "",
    Balance: "11423.76",
  },
  {
    Date: "16/11/2024",
    Narration: "TO TRANSFER- UPI/DR/500217998759/GOLLABA/YESB/paytmqr62o/Sent-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "467.00",
    Credit: "",
    Balance: "10956.76",
  },
  {
    Date: "20/11/2024",
    Narration:
      "TO TRANSFER- UPI/DR/782418744445/PENCHIKA/YESB/paytmqr67o/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2490.00",
    Credit: "",
    Balance: "8466.76",
  },
  {
    Date: "20/11/2024",
    Narration:
      "TO TRANSFER- UPI/DR/510515668369/KRISHNAR/YESB/q130613978/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2586.00",
    Credit: "",
    Balance: "5880.76",
  },
  {
    Date: "23/11/2024",
    Narration: "TO TRANSFER- UPI/DR/968955010630/CHIPPAN/UNBA/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "36.00",
    Credit: "",
    Balance: "5844.76",
  },
  {
    Date: "24/11/2024",
    Narration:
      "BY TRANSFER- UPI/CR/295329654821/BURUG U R/IBKL/swarnakuma/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "537.00",
    Balance: "6381.76",
  },
  {
    Date: "25/11/2024",
    Narration:
      "TO TRANSFER- UPI/DR/500442343767/Zepto/AIRP/zepto36581/Sent usi-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "5577.00",
    Credit: "",
    Balance: "804.76",
  },
  {
    Date: "01/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/539408564375/A1BAKERY/YESB/paytmqr1bt/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "571.00",
    Credit: "",
    Balance: "233.76",
  },
  {
    Date: "05/12/2024",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24734267547*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "33018.76",
  },
  {
    Date: "06/12/2024",
    Narration:
      "BY TRANSFER- UPI/CR/509319682855/MYAKA LA /SBIN/ajithmyaka/UPI-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "767.00",
    Balance: "33785.76",
  },
  {
    Date: "08/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/821485989756/LINGAMPE/UBIN/lingampell/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "567.00",
    Credit: "",
    Balance: "33218.76",
  },
  {
    Date: "08/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/360405515004/AMARNATH/YESB/Q699723821/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1286.00",
    Credit: "",
    Balance: "31932.76",
  },
  {
    Date: "08/12/2024",
    Narration: "ATM WDL-ATM CASH 134 SBH SANJIVAREDDYNAGA HYDERABAD-",
    Ref: "",
    Debit: "14000.00",
    Credit: "",
    Balance: "17932.76",
  },
  {
    Date: "10/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/806147901847/MOHAMMED/YESB/Q752284759/Pay me-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "222.00",
    Credit: "",
    Balance: "17710.76",
  },
  {
    Date: "12/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/544602502012/Kukatpal/YESB/q067258595/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "4946.00",
    Credit: "",
    Balance: "12764.76",
  },
  {
    Date: "13/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/548372326309/MOHAMMED/YESB/paytmqr66o/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2543.00",
    Credit: "",
    Balance: "10221.76",
  },
  {
    Date: "20/12/2024",
    Narration: "BY TRANSFER- UPI/CR/518115281508/Eluri D/SBIN/vinodpotti/UPI-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "945.00",
    Balance: "11166.76",
  },
  {
    Date: "21/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/430960691962/SABAVAT /SBIN/jai.vee@ax/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "4216.00",
    Credit: "",
    Balance: "6950.76",
  },
  {
    Date: "23/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/845056699288/The coco/YESB/paytmqr5jp/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "54.00",
    Credit: "",
    Balance: "6896.76",
  },
  {
    Date: "23/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/460340777659/VARSHITH/SBIN/Q372520541/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2539.00",
    Credit: "",
    Balance: "4357.76",
  },
  {
    Date: "24/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/543460757407/MD MAHEB/YESB/paytmqr67p/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "302.00",
    Credit: "",
    Balance: "4055.76",
  },
  {
    Date: "24/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/288721840625/NYATHARI/HDFC/9505611804/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "26.00",
    Credit: "",
    Balance: "4029.76",
  },
  {
    Date: "25/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/941249519433/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "892.00",
    Credit: "",
    Balance: "3137.76",
  },
  {
    Date: "25/12/2024",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "202.79",
    Balance: "3340.55",
  },
  {
    Date: "28/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/538477367353/Srinivas/UTIB/gpay-11246/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2072.00",
    Credit: "",
    Balance: "1268.55",
  },
  {
    Date: "29/12/2024",
    Narration:
      "TO TRANSFER- UPI/DR/290028119274/Mittapal/SBIN/9640059203/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1124.00",
    Credit: "",
    Balance: "144.55",
  },
  {
    Date: "06/01/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN24623330478*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "32929.55",
  },
  {
    Date: "07/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/507064403293/Rapido R/YESB/paytm-8128/Sent-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "345.00",
    Credit: "",
    Balance: "32584.55",
  },
  {
    Date: "08/01/2025",
    Narration:
      "BY TRANSFER- UPI/CR/509268443192/slice/N ESF/sliceborro/BWe33969-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "325.00",
    Balance: "32909.55",
  },
  {
    Date: "08/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/287036378735/LAKSHMIP/YESB/Q646908539/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2851.00",
    Credit: "",
    Balance: "30058.55",
  },
  {
    Date: "09/01/2025",
    Narration: "TO TRANSFER- UPI/DR/511199149424/AMERMOH/YESB/paytm.s1cz/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "235.00",
    Credit: "",
    Balance: "29823.55",
  },
  {
    Date: "14/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/909192250387/KUMMARI /UTIB/gpay-11252/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "473.00",
    Credit: "",
    Balance: "29350.55",
  },
  {
    Date: "14/01/2025",
    Narration: "TO TRANSFER- UPI/DR/548265615013/SHREEGO/HDFC/vyapar.170/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "310.00",
    Credit: "",
    Balance: "29040.55",
  },
  {
    Date: "15/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/515717118312/BuruguR/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1055.00",
    Credit: "",
    Balance: "27985.55",
  },
  {
    Date: "18/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/055565297925/THAMMI S/YESB/Q808936565/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2475.00",
    Credit: "",
    Balance: "25510.55",
  },
  {
    Date: "19/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/811101239622/MYAKALA/SBIN/7337403171/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "3156.00",
    Credit: "",
    Balance: "22354.55",
  },
  {
    Date: "20/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/214775815778/MohdMun/YESB/Q647081622/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "740.00",
    Credit: "",
    Balance: "21614.55",
  },
  {
    Date: "25/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/540077049869/SHEELAR/YESB/bharatpe5k/Pay T-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "577.00",
    Credit: "",
    Balance: "21037.55",
  },
  {
    Date: "30/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/795625495778/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "104.00",
    Credit: "",
    Balance: "20933.55",
  },
  {
    Date: "31/01/2025",
    Narration:
      "TO TRANSFER- UPI/DR/507212560747/PAYYAVUL/FDRL/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "996.00",
    Credit: "",
    Balance: "19937.55",
  },
  {
    Date: "01/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/055565297925/THAMMI S/YESB/Q808936565/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2563.00",
    Credit: "",
    Balance: "17374.55",
  },
  {
    Date: "01/02/2025",
    Narration: "TO TRANSFER- UPI/DR/166513150025/BOINIR/YESB/Q627221314/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "3676.00",
    Credit: "",
    Balance: "13698.55",
  },
  {
    Date: "03/02/2025",
    Narration: "TO TRANSFER- UPI/DR/539847377058/Active/YESB/paytmqr5yz/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1130.00",
    Credit: "",
    Balance: "12568.55",
  },
  {
    Date: "03/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/990117341384/VYJAYANT/YESB/paytm-1540/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "358.00",
    Credit: "",
    Balance: "12210.55",
  },
  {
    Date: "04/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/133111621344/The Coco/UTIB/gpay-11244/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1122.00",
    Credit: "",
    Balance: "11088.55",
  },
  {
    Date: "05/02/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN25690926060*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "43873.55",
  },
  {
    Date: "06/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/151246672077/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2151.00",
    Credit: "",
    Balance: "41722.55",
  },
  {
    Date: "08/02/2025",
    Narration: "TO TRANSFER- UPI/DR/514580323725/GOLLAMA/YESB/q306279908/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "134.00",
    Credit: "",
    Balance: "41588.55",
  },
  {
    Date: "09/02/2025",
    Narration: "TO TRANSFER- UPI/DR/502569500848/YAMARAG/YESB/paytmqr633/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "788.00",
    Credit: "",
    Balance: "40800.55",
  },
  {
    Date: "09/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/424223493302/P VINOD/YESB/Q492629095/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "2703.00",
    Credit: "",
    Balance: "38097.55",
  },
  {
    Date: "12/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/549313793095/ARVIND K/YESB/Q250076330/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2920.00",
    Credit: "",
    Balance: "35177.55",
  },
  {
    Date: "12/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/536467920779/ASPAN M/UTIB/gpay- 11254/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "772.00",
    Credit: "",
    Balance: "34405.55",
  },
  {
    Date: "13/02/2025",
    Narration:
      "BY TRANSFER- UPI/CR/564614334823/Jampall y/YESB/paytmqr63f/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "926.00",
    Balance: "35331.55",
  },
  {
    Date: "19/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/409627715467/THOTA NA/BARB/7981008912/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "978.00",
    Credit: "",
    Balance: "34353.55",
  },
  {
    Date: "20/02/2025",
    Narration: "ATM WDL-ATM CASH 34 +ATM/JANATHAIALLI BANGALORE",
    Ref: "",
    Debit: "16000.00",
    Credit: "",
    Balance: "18353.55",
  },
  {
    Date: "21/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/099765005262/AKSHANTH/YESB/Q463233814/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1616.00",
    Credit: "",
    Balance: "16737.55",
  },
  {
    Date: "26/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/544826072027/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1058.00",
    Credit: "",
    Balance: "15679.55",
  },
  {
    Date: "28/02/2025",
    Narration:
      "TO TRANSFER- UPI/DR/106987673019/MARG AM G/FDRL/9989647658/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "165.00",
    Credit: "",
    Balance: "15514.55",
  },
  {
    Date: "01/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/814057286197/SRINIDHI/HDFC/vennalokes/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2930.00",
    Credit: "",
    Balance: "12584.55",
  },
  {
    Date: "05/03/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN25144160670*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "45369.55",
  },
  {
    Date: "06/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/962376909156/Hanuman /ICIC/gpay-11220/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1324.00",
    Credit: "",
    Balance: "44045.55",
  },
  {
    Date: "07/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/675596767281/MUDUNURI/UBIN/kumarmudun/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "42.00",
    Credit: "",
    Balance: "44003.55",
  },
  {
    Date: "07/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/121862187173/PAPPU MA/YESB/BHARATPE9Y/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "4822.00",
    Credit: "",
    Balance: "39181.55",
  },
  {
    Date: "07/03/2025",
    Narration: "TO TRANSFER- UPI/DR/500459642470/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "4164.00",
    Credit: "",
    Balance: "35017.55",
  },
  {
    Date: "08/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/544340281568/ZEPTO/UTIB/cp.zepto13/payment-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "315.00",
    Credit: "",
    Balance: "34702.55",
  },
  {
    Date: "08/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/538144484654/BODLAGA/FDRL/bharatpe.9/Pay t-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2470.00",
    Credit: "",
    Balance: "32232.55",
  },
  {
    Date: "09/03/2025",
    Narration:
      "BY TRANSFER- UPI/CR/844342550123/MADDE LA /UBIN/jaganmadde/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "378.00",
    Balance: "32610.55",
  },
  {
    Date: "14/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/204498961527/BuruguR/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2348.00",
    Credit: "",
    Balance: "30262.55",
  },
  {
    Date: "14/03/2025",
    Narration: "TO TRANSFER- UPI/DR/543355574857/Mrs Pol/YESB/q044718316/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "990.00",
    Credit: "",
    Balance: "29272.55",
  },
  {
    Date: "19/03/2025",
    Narration:
      "BY TRANSFER- UPI/CR/836444962238/RAMES H T/ICIC/9440377972/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "229.00",
    Balance: "29501.55",
  },
  {
    Date: "21/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/100922381633/PULKAM N/SBIN/naveenpate/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "929.00",
    Credit: "",
    Balance: "28572.55",
  },
  {
    Date: "23/03/2025",
    Narration:
      "BY TRANSFER- UPI/CR/509506247856/Maredip u/SBIN/chaiturock/UPI-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "898.00",
    Balance: "29470.55",
  },
  {
    Date: "25/03/2025",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "371.54",
    Balance: "29842.09",
  },
  {
    Date: "26/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/546541783243/MR MD RA/YESB/paytmqr69x/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "3608.00",
    Credit: "",
    Balance: "26234.09",
  },
  {
    Date: "28/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/767285048511/Sri Sai/YESB/paytmqr577/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2695.00",
    Credit: "",
    Balance: "23539.09",
  },
  {
    Date: "28/03/2025",
    Narration: "ATM WDL-ATM CASH 82632 +BJP OFFICE ROAD HYDERABAD-",
    Ref: "",
    Debit: "20000.00",
    Credit: "",
    Balance: "3539.09",
  },
  {
    Date: "29/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/941249519433/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "936.00",
    Credit: "",
    Balance: "2603.09",
  },
  {
    Date: "31/03/2025",
    Narration:
      "TO TRANSFER- UPI/DR/512131725895/PINNINTI/YESB/paytmqrvlw/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1130.00",
    Credit: "",
    Balance: "1473.09",
  },
  {
    Date: "01/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/548372221749/Challa C/YESB/paytmqr5bl/Paid-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "55.00",
    Credit: "",
    Balance: "1418.09",
  },
  {
    Date: "07/04/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN25846917777*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "32785.00",
    Balance: "34203.09",
  },
  {
    Date: "08/04/2025",
    Narration:
      "BY TRANSFER- UPI/CR/513592798522/BURUG U /SBIN/9949976072/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "432.00",
    Balance: "34635.09",
  },
  {
    Date: "09/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/583085486383/SURARAM/SBIN/sura.35@yb/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "338.00",
    Credit: "",
    Balance: "34297.09",
  },
  {
    Date: "11/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/622253620098/Myakala /SBIN/7337403171/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "4488.00",
    Credit: "",
    Balance: "29809.09",
  },
  {
    Date: "14/04/2025",
    Narration:
      "BY TRANSFER- UPI/CR/370868988672/BURUG U /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "332.00",
    Balance: "30141.09",
  },
  {
    Date: "14/04/2025",
    Narration:
      "BY TRANSFER- UPI/CR/336952227376/MR RAJAP ETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER FROM 4897733162090",
    Debit: "",
    Credit: "777.00",
    Balance: "30918.09",
  },
  {
    Date: "14/04/2025",
    Narration: "TO TRANSFER- UPI/DR/500748713490/MATHRAY/YESB/paytmqr62o/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2940.00",
    Credit: "",
    Balance: "27978.09",
  },
  {
    Date: "15/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/545056134957/MANNEM N/FDRL/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "151.00",
    Credit: "",
    Balance: "27827.09",
  },
  {
    Date: "19/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/843591412209/The coco/YESB/paytmqr5xc/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "5904.00",
    Credit: "",
    Balance: "21923.09",
  },
  {
    Date: "19/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/554308176775/ZEPTONOW/HDFC/zeptonow.e/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2975.00",
    Credit: "",
    Balance: "18948.09",
  },
  {
    Date: "23/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/517850645473/VUTUKURU/YESB/paytmqr6bh/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "938.00",
    Credit: "",
    Balance: "18010.09",
  },
  {
    Date: "25/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/129773199483/MR... RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "1171.00",
    Credit: "",
    Balance: "16839.09",
  },
  {
    Date: "26/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/253519777018/Ravula C/YESB/Q686781163/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "142.00",
    Credit: "",
    Balance: "16697.09",
  },
  {
    Date: "26/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/540077049869/SHEELAR/YESB/bharatpe5k/Pay T-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "212.00",
    Credit: "",
    Balance: "16485.09",
  },
  {
    Date: "28/04/2025",
    Narration: "TO TRANSFER- UPI/DR/505629450715/LaxmiAn/YESB/q82073126@/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "918.00",
    Credit: "",
    Balance: "15567.09",
  },
  {
    Date: "29/04/2025",
    Narration:
      "TO TRANSFER- UPI/DR/990576738594/KUNDURU /YESB/paytmqr6kt/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1594.00",
    Credit: "",
    Balance: "13973.09",
  },
  {
    Date: "30/04/2025",
    Narration: "TO TRANSFER- UPI/DR/502992791102/PULKAMN/SBIN/Naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1344.00",
    Credit: "",
    Balance: "12629.09",
  },
  {
    Date: "30/04/2025",
    Narration: "TO TRANSFER- UPI/DR/511192033738/BALAJIF/YESB/q252734647/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2058.00",
    Credit: "",
    Balance: "10571.09",
  },
  {
    Date: "01/05/2025",
    Narration: "TO TRANSFER- UPI/DR/501170369653/BURUGUR/ICIC/swarnakuma/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "1870.00",
    Credit: "",
    Balance: "8701.09",
  },
  {
    Date: "03/05/2025",
    Narration:
      "BY TRANSFER- UPI/CR/530255031812/YEDAM ALA/HDFC/7207996114/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "297.00",
    Balance: "8998.09",
  },
  {
    Date: "04/05/2025",
    Narration: "TO TRANSFER- UPI/DR/508269023713/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "635.00",
    Credit: "",
    Balance: "8363.09",
  },
  {
    Date: "05/05/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN25141990294*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "65170.00",
    Balance: "73533.09",
  },
  {
    Date: "07/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/512126698999/MURAGAN /YESB/paytmqr5w5/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "41900.00",
    Credit: "",
    Balance: "31633.09",
  },
  {
    Date: "07/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/357713505341/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "5524.00",
    Credit: "",
    Balance: "26109.09",
  },
  {
    Date: "08/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/035427645862/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "532.00",
    Credit: "",
    Balance: "25577.09",
  },
  {
    Date: "08/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/971832837583/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "2057.00",
    Credit: "",
    Balance: "23520.09",
  },
  {
    Date: "10/05/2025",
    Narration:
      "BY TRANSFER- UPI/CR/500376703999/Slice/IC IC/nesfbslice/BWebe023-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "665.00",
    Balance: "24185.09",
  },
  {
    Date: "10/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/237476709904/Mr Ball/YESB/Q336434675/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "32.00",
    Credit: "",
    Balance: "24153.09",
  },
  {
    Date: "12/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/545762126069/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "963.00",
    Credit: "",
    Balance: "23190.09",
  },
  {
    Date: "14/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/548223560388/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "5643.00",
    Credit: "",
    Balance: "17547.09",
  },
  {
    Date: "15/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/502610786668/Farahath/YESB/paytmqr6kc/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "134.00",
    Credit: "",
    Balance: "17413.09",
  },
  {
    Date: "17/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/244094034844/Zepto/AIRP/zepto36581/Payment-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "2014.00",
    Credit: "",
    Balance: "15399.09",
  },
  {
    Date: "19/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/670822932755/Annpurna/YESB/paytmqr1ij/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "559.00",
    Credit: "",
    Balance: "14840.09",
  },
  {
    Date: "19/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/288045744494/SHAIK MA/YESB/Q287584489/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "737.00",
    Credit: "",
    Balance: "14103.09",
  },
  {
    Date: "24/05/2025",
    Narration:
      "BY TRANSFER- UPI/CR/850096804335/NANDI M/KKBK/8499969647/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "620.00",
    Balance: "14723.09",
  },
  {
    Date: "24/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/505481918554/Md Javeed/YESB/paytm.s1ez/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "769.00",
    Credit: "",
    Balance: "13954.09",
  },
  {
    Date: "24/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/012872217438/THAMMIS/YESB/Q808936565/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "188.00",
    Credit: "",
    Balance: "13766.09",
  },
  {
    Date: "26/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/457317304863/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2869.00",
    Credit: "",
    Balance: "10897.09",
  },
  {
    Date: "29/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/409714078924/MR RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "2440.00",
    Credit: "",
    Balance: "8457.09",
  },
  {
    Date: "31/05/2025",
    Narration:
      "TO TRANSFER- UPI/DR/273444765885/Eluri D/SBIN/vinodpotti/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "95.00",
    Credit: "",
    Balance: "8362.09",
  },
  {
    Date: "02/06/2025",
    Narration:
      "BY TRANSFER- UPI/CR/734315498688/PULKA M N/SBIN/naveenpate/Payme-",
    Ref: "TRANSFER FROM 4897736162097",
    Debit: "",
    Credit: "999.00",
    Balance: "9361.09",
  },
  {
    Date: "05/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/183616635794/KALLURI /YESB/Q061961035/Payme-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "308.00",
    Credit: "",
    Balance: "9053.09",
  },
  {
    Date: "05/06/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN25323627618*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "65170.00",
    Balance: "74223.09",
  },
  {
    Date: "09/06/2025",
    Narration:
      "BY TRANSFER- UPI/CR/062227970876/BURUG U S/UBIN/boorugusan/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "752.00",
    Balance: "74975.09",
  },
  {
    Date: "09/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/389348380306/ZOMATO/HDFC/payzomato@/Payment-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "4225.00",
    Credit: "",
    Balance: "70750.09",
  },
  {
    Date: "09/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/570379754695/Maredipu/SBIN/9182170428/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "836.00",
    Credit: "",
    Balance: "69914.09",
  },
  {
    Date: "10/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/734016390797/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "1726.00",
    Credit: "",
    Balance: "68188.09",
  },
  {
    Date: "10/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/325176006773/AngelOn/ICIC/angelonens/Payin-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "442.00",
    Credit: "",
    Balance: "67746.09",
  },
  {
    Date: "12/06/2025",
    Narration: "TO TRANSFER- UPI/DR/511907418342/ANJUMBE/UNBA/bharatpe.9/Payt-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1456.00",
    Credit: "",
    Balance: "66290.09",
  },
  {
    Date: "12/06/2025",
    Narration: "TO TRANSFER- UPI/DR/502642580910/GoogleI/utib/playstore-/UPI-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "94.00",
    Credit: "",
    Balance: "66196.09",
  },
  {
    Date: "13/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/214775815778/MohdMun/YESB/Q647081622/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "11100.00",
    Credit: "",
    Balance: "55096.09",
  },
  {
    Date: "13/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/098609694178/Thoshala/YESB/paytmqr64l/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "877.00",
    Credit: "",
    Balance: "54219.09",
  },
  {
    Date: "16/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/143810312736/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2218.00",
    Credit: "",
    Balance: "52001.09",
  },
  {
    Date: "19/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/708884987114/BABAFUE/YESB/Q451357870/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1918.00",
    Credit: "",
    Balance: "50083.09",
  },
  {
    Date: "23/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/447835607120/SURARAM/YESB/paytmqr663/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "12000.00",
    Credit: "",
    Balance: "38083.09",
  },
  {
    Date: "25/06/2025",
    Narration: "TO TRANSFER- UPI/DR/502992787180/PULKAMN/SBIN/naveenpate/UPI-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "52.00",
    Credit: "",
    Balance: "38031.09",
  },
  {
    Date: "25/06/2025",
    Narration: "CREDIT INTEREST--",
    Ref: "",
    Debit: "",
    Credit: "302.52",
    Balance: "38333.61",
  },
  {
    Date: "26/06/2025",
    Narration:
      "BY TRANSFER- UPI/CR/973531074353/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "630.00",
    Balance: "38963.61",
  },
  {
    Date: "27/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/085107925817/Thoshala/YESB/paytmqr64l/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "35300.00",
    Credit: "",
    Balance: "3663.61",
  },
  {
    Date: "28/06/2025",
    Narration:
      "TO TRANSFER- UPI/DR/522963349165/Zepto/YESB/ZEPTOONLIN/Payment-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "1895.00",
    Credit: "",
    Balance: "1768.61",
  },
  {
    Date: "06/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/030578249516/Rocky Bo/YESB/paytmqr5kf/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "1654.00",
    Credit: "",
    Balance: "114.61",
  },
  {
    Date: "07/07/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN25156705788*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "65170.00",
    Balance: "65284.61",
  },
  {
    Date: "08/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/098609694178/Thoshala/YESB/paytmqr64l/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "932.00",
    Credit: "",
    Balance: "64352.61",
  },
  {
    Date: "10/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/472228712353/MrVENKA/YESB/paytmqr60k/Pay me-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "874.00",
    Credit: "",
    Balance: "63478.61",
  },
  {
    Date: "11/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/541994239577/ArunPatel/AIRP/3187918513/Pay-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2828.00",
    Credit: "",
    Balance: "60650.61",
  },
  {
    Date: "11/07/2025",
    Narration: "TO TRANSFER- UPI/DR/502007985320/GURRAMR/YESB/paytm.s14r/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "633.00",
    Credit: "",
    Balance: "60017.61",
  },
  {
    Date: "12/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/547809884620/GUNDREDD/YESB/paytm.s16y/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "571.00",
    Credit: "",
    Balance: "59446.61",
  },
  {
    Date: "14/07/2025",
    Narration: "ATM WDL-ATM CASH 6131 MOTH NAGAR 2HYDERABAD-",
    Ref: "",
    Debit: "20000.00",
    Credit: "",
    Balance: "39446.61",
  },
  {
    Date: "14/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/660889067436/Upparap u/SBIN/9866308659/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "893.00",
    Credit: "",
    Balance: "38553.61",
  },
  {
    Date: "15/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/307833761680/DOSTHIF/YESB/paytm.s1ar/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "482.00",
    Credit: "",
    Balance: "38071.61",
  },
  {
    Date: "20/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/929508059730/Srinivas/UTIB/gpay-11246/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "299.00",
    Credit: "",
    Balance: "37772.61",
  },
  {
    Date: "22/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/500560879377/magicpin/UTIB/magicpin.p/UPIIn-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "765.00",
    Credit: "",
    Balance: "37007.61",
  },
  {
    Date: "23/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/711062802887/BATTARO/UTIB/rock143roh/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "12200.00",
    Credit: "",
    Balance: "24807.61",
  },
  {
    Date: "26/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/489305393977/Srinivas/UTIB/gpay-11246/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2072.00",
    Credit: "",
    Balance: "22735.61",
  },
  {
    Date: "27/07/2025",
    Narration:
      "BY TRANSFER- UPI/CR/440665217457/RAJAP ETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER FROM 4897734162099",
    Debit: "",
    Credit: "918.00",
    Balance: "23653.61",
  },
  {
    Date: "30/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/548616079563/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "922.00",
    Credit: "",
    Balance: "22731.61",
  },
  {
    Date: "30/07/2025",
    Narration:
      "TO TRANSFER- UPI/DR/793489133002/RAJAPETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "5494.00",
    Credit: "",
    Balance: "17237.61",
  },
  {
    Date: "31/07/2025",
    Narration:
      "BY TRANSFER- UPI/CR/564614334823/Jampall y/YESB/paytmqr63f/Payme-",
    Ref: "TRANSFER FROM 4897732162091",
    Debit: "",
    Credit: "748.00",
    Balance: "17985.61",
  },
  {
    Date: "02/08/2025",
    Narration: "TO TRANSFER- UPI/DR/538479207898/EDLABHA/YESB/q206259366/Paid-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "641.00",
    Credit: "",
    Balance: "17344.61",
  },
  {
    Date: "02/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/237476709904/Mr Ball/YESB/Q336434675/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "2057.00",
    Credit: "",
    Balance: "15287.61",
  },
  {
    Date: "05/08/2025",
    Narration:
      "BY TRANSFER-NEFT*ICIC0004370*ICIN25110011977*IGLOBALCONSPVTLTDSALARY-",
    Ref: "TRANSFER FROM 4898316472842",
    isSalary: true,
    Debit: "",
    Credit: "65170.00",
    Balance: "80457.61",
  },
  {
    Date: "10/08/2025",
    Narration: "ATM WDL-ATM CASH 91816 THRRGALAGUTTAPALLI KARKARIMNAGAR-",
    Ref: "",
    Debit: "16000.00",
    Credit: "",
    Balance: "64457.61",
  },
  {
    Date: "10/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/499678528199/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2587.00",
    Credit: "",
    Balance: "61870.61",
  },
  {
    Date: "12/08/2025",
    Narration:
      "BY TRANSFER- UPI/CR/509268443192/slice/N ESF/sliceborro/BWe33969-",
    Ref: "TRANSFER FROM 4897735162098",
    Debit: "",
    Credit: "649.00",
    Balance: "62519.61",
  },
  {
    Date: "15/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/545282653980/Pankaj K/YESB/paytm.s18s/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "6896.00",
    Credit: "",
    Balance: "55623.61",
  },
  {
    Date: "18/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/100047818927/AIRBNB/HDFC/billdeskpg/AIRBNB-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "996.00",
    Credit: "",
    Balance: "54627.61",
  },
  {
    Date: "18/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/814057286197/SRINIDHI/HDFC/vennalokes/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "4315.00",
    Credit: "",
    Balance: "50312.61",
  },
  {
    Date: "19/08/2025",
    Narration: "TO TRANSFER- UPI/DR/543023567504/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "2159.00",
    Credit: "",
    Balance: "48153.61",
  },
  {
    Date: "19/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/223500402541/Farahath/YESB/paytmqr6kc/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "937.00",
    Credit: "",
    Balance: "47216.61",
  },
  {
    Date: "21/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/501081097806/MOHAMMED/YESB/paytmqr5wx/Paid-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "1911.00",
    Credit: "",
    Balance: "45305.61",
  },
  {
    Date: "22/08/2025",
    Narration: "TO TRANSFER- UPI/DR/546434235198/CHALOCH/YESB/paytmqr664/Paid-",
    Ref: "TRANSFER TO 4897692162094",
    Debit: "940.00",
    Credit: "",
    Balance: "44365.61",
  },
  {
    Date: "22/08/2025",
    Narration: "TO TRANSFER- UPI/DR/500459645264/Myakala /SBIN/7337403171/UPI-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "2923.00",
    Credit: "",
    Balance: "41442.61",
  },
  {
    Date: "23/08/2025",
    Narration: "TO TRANSFER- UPI/DR/515671034306/slice/N ESF/borrowrepa/UPI-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "28300.00",
    Credit: "",
    Balance: "13142.61",
  },
  {
    Date: "24/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/192573305836/JELLA AK/UTIB/7569565947/Payme-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "4402.00",
    Credit: "",
    Balance: "8740.61",
  },
  {
    Date: "28/08/2025",
    Narration:
      "TO TRANSFER- UPI/DR/427854497618/KODITYAL/FDRL/BHARATPE.9/Payt-",
    Ref: "TRANSFER TO 4897695162091",
    Debit: "202.00",
    Credit: "",
    Balance: "8538.61",
  },
  {
    Date: "01/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/989661808356/NADIMIDO/KKBK/8897700559/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "105.00",
    Credit: "",
    Balance: "8433.61",
  },
  {
    Date: "02/09/2025",
    Narration:
      "BY TRANSFER- UPI/CR/050001234012/RAJAP ETA/SBIN/bhargavnan/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "361.00",
    Balance: "8794.61",
  },
  {
    Date: "03/09/2025",
    Narration:
      "BY TRANSFER- UPI/CR/452352234892/BURUG U  /SBIN/buruguswra/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "789.00",
    Balance: "9583.61",
  },
  {
    Date: "03/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/159235655126/GOLLA MA/YESB/Q306279908/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "172.00",
    Credit: "",
    Balance: "9411.61",
  },
  {
    Date: "03/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/217090315986/MD AZAM/YESB/Q851178672/Payme-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1117.00",
    Credit: "",
    Balance: "8294.61",
  },
  {
    Date: "04/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/500559372365/zeptonow/NSPB/cf.zeptono/Sent-",
    Ref: "TRANSFER TO 4897690162095",
    Debit: "1893.00",
    Credit: "",
    Balance: "6401.61",
  },
  {
    Date: "04/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/697150797526/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "861.00",
    Credit: "",
    Balance: "5540.61",
  },
  {
    Date: "05/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/114043233312/MRRAJAP/SCBL/bhargavnan/Pay me-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "471.00",
    Credit: "",
    Balance: "5069.61",
  },
  {
    Date: "05/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/630006549725/GURRAM R/YESB/paytm.s14r/Payme-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "811.00",
    Credit: "",
    Balance: "4258.61",
  },
  {
    Date: "05/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/129773199483/MR... RAJAP/SCBL/bhargavnan/Payme-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "3812.00",
    Credit: "",
    Balance: "446.61",
  },
  {
    Date: "05/09/2025",
    Narration:
      "BY TRANSFER- UPI/CR/175517336957/Burugu R/SBIN/rakeshpate/Payme-",
    Ref: "TRANSFER FROM 4897735162098",
    isSalary: false,
    Debit: "",
    Credit: "1753.00",
    Balance: "2199.61",
  },
  {
    Date: "06/09/2025",
    Narration:
      "BY TRANSFER- UPI/CR/844342550123/MADDELA /UBIN/jaganmadde/Payme-",
    Ref: "TRANSFER FROM 4897738162095",
    Debit: "",
    Credit: "870.00",
    Balance: "3069.61",
  },
  {
    Date: "08/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/355820197840/SATTIBA/YESB/paytmqr635/Payme-",
    Ref: "TRANSFER TO 4897693162093",
    Debit: "403.00",
    Credit: "",
    Balance: "2666.61",
  },
  {
    Date: "08/09/2025",
    Narration:
      "TO TRANSFER- UPI/DR/409729391656/EDLABHA/YESB/Q163435771/Payme-",
    Ref: "TRANSFER TO 4897696162090",
    Debit: "763.00",
    Credit: "",
    Balance: "1903.61",
  },
  {
    Date: "09/09/2025",
    Narration: "TO TRANSFER- UPI/DR/504161341305/KattaR/YESB/q099098188/Paid-",
    Ref: "TRANSFER TO 4897691162095",
    Debit: "791.00",
    Credit: "",
    Balance: "1112.61",
  },
  {
    Date: "11/09/2025",
    Narration: "TO TRANSFER- UPI/DR/541000834498/MONUSO/YESB/q507091220/Paid-",
    Ref: "TRANSFER TO 4897694162092",
    Debit: "991.00",
    Credit: "",
    Balance: "121.61",
  },
  {
    Date: "11/09/2025",
    Narration:
      "BY TRANSFER- UPI/CR/993530001022/MESU SAM/IPOS/9014794997/Payme-",
    Ref: "TRANSFER FROM 4897737162096",
    Debit: "",
    Credit: "735.59",
    Balance: "857.20",
  },
];

module.exports = {
  numOfYears,
  accountInfo,
  transactions,
};
