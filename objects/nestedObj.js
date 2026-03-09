let reservedKey = {
  for: "for key word",
  let: "let key word",
  var: "var key word",
};

// console.log(reservedKey.for);

let user = {
  id: 10,
  fullName: "lokesh ingle",
  technologies: {
    1: "React.js",
    2: "Express.js",
  },
};

// console.log(user.technologies);

let obj = {
  id: 10,
  name: "MK",
  farmer: {
    CID: "C2002",
    CName: "Bruce wayne",
    techstack: {
      mern: "Transfer",
      pyral: "AI115",
    },
    city: "indore",
  },
  pin: 452001,
};

// console.log(obj.farmer.city);

let obj2 = {
  id: 10,
  name: "MK",
  "data-info": {
    cid: "AC2025",
    cname: "7cd",
    salaryPay: {
      Department: ["HR", "Developer", "payroll", "IT"],
      "c2 15": "data Info",
      415: {
        420: {
          211: 300,
          id: 113,
        },
      },
    },
  },
};
console.log(obj2["data-info"].salaryPay[415][420][211]);
