console.log("START");
const fs = require("fs");

const readFileText = (i) => {
    fs.readFile("./huge-data.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("File reading error:", err.message);
        } else {
            const endTime = performance.now();
            console.log(i, "-->", endTime - startTime);
        }
    });
};

const startTime = performance.now();
for (let i = 0; i < 20; i++) {
    readFileText(i);
}

const endTime = performance.now();

console.log(endTime - startTime, "END");
