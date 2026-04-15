const http = require("http");
const fsPromises = require("fs/promises");
const { getData, renderCards } = require("./helper");

const server = http.createServer(async (req, res) => {
    if (req.url == "/") {
        const data = await getData();
        const cardsHTMLText = renderCards(data);
        let htmlText = await fsPromises.readFile("./pages/index.html", "utf-8");
        htmlText = htmlText.replace("__HELLO_WORLD__", cardsHTMLText);
        res.end(htmlText);
    } else if (req.url == "/styles.css") {
        const cssText = await fsPromises.readFile("./pages/styles.css", "utf-8");
        res.end(cssText);
    }
});

server.listen(4002);
