console.log("START");
const fs = require("fs");

const readFileText = () => {
    const data = fs.readFileSync("./data.txt", "utf-8");
};

const startTime = performance.now();
for (let i = 0; i < 1; i++) {
    console.log("i", i);
    readFileText();
}
const endTime = performance.now();

console.log("-->", endTime - startTime);
