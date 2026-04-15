console.log("START");
const fs = require("fs");

const readFileText = () => {
    const data = fs.readFileSync("./huge-data.txt", "utf-8");
};

const startTime = performance.now();
for (let i = 0; i < 20; i++) {
    readFileText();
    const endTime = performance.now();
    console.log(i, "-->", endTime - startTime);
}

console.log("END");
