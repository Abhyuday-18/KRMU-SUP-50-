// import getIndexFile function -- helper.js
// import cardTemplate function -- helper.js
// import getDummyJsonProductsData function -- helper.js
const { getDummyJsonProductsData, getIndexFile, cardTemplate, saveOutputFile } = require("./helper");

const indexFileText = getIndexFile();
const cardTemplateText = cardTemplate();

const createUI = (data) => {
    let finalCardsText = ``;

    const { list } = data;
    list.forEach((product) => {
        let filledTemplateText = cardTemplateText.replace("__IMG_LINK__", product.videoThumbnails[2].url);
        filledTemplateText = filledTemplateText.replace("__TITLE__", product.title);
        filledTemplateText = filledTemplateText.replace("__PRICE__", product.viewCountText);

        finalCardsText += `\n${filledTemplateText} \n`;
    });

    const finalHTML = indexFileText.replace("__PLACE_HOLDER__", finalCardsText);

    saveOutputFile(finalHTML);
};

getDummyJsonProductsData(createUI);
