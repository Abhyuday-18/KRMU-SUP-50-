const { getCardTemplateFile, getIndexFile, getData, saveOutputFile } = require("./helper");

const main = (data, res) => {
    const { recipes } = data;
    let finalCardsText = ``;

    recipes.forEach((recipe) => {
        const cardTemplateText = getCardTemplateFile();

        let newText = cardTemplateText.replace("__IMG_LINK__", recipe.image);
        newText = newText.replace("__TITLE__", recipe.name);
        newText = newText.replace("__CUISINE__", recipe.cuisine);

        finalCardsText += newText;
    });

    saveOutputFile(finalCardsText, res);
};

const render = (res) => {
    getData(main, res);
};

module.exports = { render };
