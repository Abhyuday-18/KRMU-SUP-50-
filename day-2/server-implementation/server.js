const http = require("http");
const url = "https://dummyjson.com/recipes?limit=10&select=name,cuisine,image";
const fs = require("fs");

const getIndexFile = () => {
    const data = fs.readFileSync("./input/index.html", "utf-8");
    return data;
};

const getCardTemplateFile = () => {
    const data = fs.readFileSync("./input/card-template.html", "utf-8");
    return data;
};

const render = (res) => {
    const req = fetch(url);
    req.then((response) => {
        const pr2 = response.json();
        pr2.then((data) => {
            const { recipes } = data;
            let finalCardsText = ``;

            recipes.forEach((recipe) => {
                const cardTemplateText = getCardTemplateFile();

                let newText = cardTemplateText.replace("__IMG_LINK__", recipe.image);
                newText = newText.replace("__TITLE__", recipe.name);
                newText = newText.replace("__CUISINE__", recipe.cuisine);

                finalCardsText += newText;
            });

            const indexFileText = getIndexFile();
            const finalFile = indexFileText.replace("__PLACE_HOLDER__", finalCardsText);

            res.end(finalFile);
        });
    });
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log("-->", req.url);
    // res.end("<h1 style='color:red'>Hello - hi!!!</h1>");
    render(res);
});

server.listen(4001, () => {
    console.log("------- Server is running! --------");
});

// npx nodemon server.js
