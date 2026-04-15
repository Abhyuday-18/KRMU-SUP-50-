const fs = require("fs");
const url = "https://dummyjson.com/recipes?limit=10&select=name,cuisine,image";

const getIndexFile = () => {
    const data = fs.readFileSync("./input/index.html", "utf-8");
    return data;
};

const getCardTemplateFile = () => {
    const data = fs.readFileSync("./input/card-template.html", "utf-8");
    return data;
};

const saveOutputFile = (cardsText, res) => {
    const indexFileText = getIndexFile();
    const finalFile = indexFileText.replace("__PLACE_HOLDER__", cardsText);
    fs.writeFileSync("./output/output.html", finalFile);
    res.end(finalFile);
};

const getData = (successCallback, res) => {
    const req = fetch(url);
    req.then((response) => {
        const pr2 = response.json();
        pr2.then((data) => {
            successCallback(data, res);
        });
    });
};

module.exports = {
    getData: getData,
    getCardTemplateFile,
    saveOutputFile,
};
