let year = 1928;

if (year % 4 === 0) console.log("leap year ", year);
else if (year % 100 === 0) console.log("leap year ", year);
else if (year % 400 === 0) console.log("leap year ", year);
else console.log("Something went wrong...");
