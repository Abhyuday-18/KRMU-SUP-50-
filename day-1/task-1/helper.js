const fs = require("fs");

const getIndexFile = () => {
    const data = fs.readFileSync("./ui/index.html", "utf-8");
    return data;
};

const cardTemplate = () => {
    const data = fs.readFileSync("./ui/card-template.html", "utf-8");
    return data;
};

// promise is a object which represents eventual completion / failure
// of an asynchronous operation and its resulting value
// <pending> <fulfilled> <rejected>
const getDummyJsonProductsData = (successCallback) => {
    const request = fetch("https://youtube138.p.rapidapi.com/v2/trending", {
        method: "GET",
        headers: {
            "x-rapidapi-key": "e0523f703cmsh8f9cfcc0479bb48p19c858jsnf190bdad14a2",
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
        },
    });
    request
        .then((data) => {
            const pr2 = data.json();
            pr2.then((finalData) => {
                successCallback(finalData);
            });
        })
        .catch((err) => {
            console.log("----Something went wrong in API call!", err.message);
        });
};

const saveOutputFile = (htmlText) => {
    fs.writeFileSync("output.html", htmlText);
};

module.exports = {
    getIndexFile: getIndexFile,
    cardTemplate,
    getDummyJsonProductsData,
    saveOutputFile,
};
