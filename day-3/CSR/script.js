const getData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        return data;
    } catch (err) {
        alert(`Api call failed: ${err.message}`);
    }
};

const renderCards = (data) => {
    const mainContainer = document.getElementById("root");
    const { products } = data;

    products.forEach((product) => {
        const cardContainer = document.createElement("div");
        cardContainer.className = "card";
        cardContainer.innerHTML = `
            <img src="${product.thumbnail}" />
            <div>
                <h4>${product.title}</h4>
                <p>${product.price}</p>
            </div>
        `;
        mainContainer.appendChild(cardContainer);
    });
};

const startShowingLoaders = () => {
    const mainContainer = document.getElementById("root");
    [1, 2, 3, 4, 6, 7, 8, 9, 10].forEach(() => {
        const cardContainer = document.createElement("div");
        cardContainer.className = "loading-card";
        mainContainer.appendChild(cardContainer);
    });
};

const stopShowingLoaders = () => {
    document.getElementsByTagName("main")[0].classList.add("hidden");
};

const main = async () => {
    startShowingLoaders();
    const data = await getData();
    stopShowingLoaders();
    renderCards(data);
};

main();
