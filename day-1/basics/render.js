console.log("2");

const getData = require("./data.js");
const fs = require("fs");

const render = () => {
    const data = getData();

    // console.log("-->", data);

    fs.writeFileSync("output.html", data);
};

console.log("5");

module.exports = render;
