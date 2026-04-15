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
    let mainContainer = ``;
    const { products } = data;

    products.forEach((product) => {
        const cardText = `
        <div class='card'>
            <img src="${product.thumbnail}" />
            <div>
                <h4>${product.title}</h4>
                <p>${product.price}</p>
            </div>
        </div>
        `;
        mainContainer += cardText;
    });

    return mainContainer;
};

module.exports = { getData, renderCards };
