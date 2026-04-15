console.log("A");
const getTotalPrice = (data) => {
    console.log("B");
    const { products } = data;

    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += product.price;
    });

    return totalPrice;
};

const getProducts = async () => {
    try {
        console.log("C");
        const response = await fetch("https://dummyjson.com/products");
        console.log("D");
        const data = await response.json();
        console.log("E");
        return data;
    } catch (err) {
        console.log("F");
        console.log("---> Error:", err.message);
    }
};

const main = async () => {
    console.log("G");
    const data = await getProducts();
    console.log("H");
    const totalPrice = getTotalPrice(data);
    console.log("I");
    console.log(totalPrice);
};

console.log("J");
main();
console.log("K");
