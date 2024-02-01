const viewsDiv = document.querySelector(".views");
const localStorage = window.localStorage;
const allView = JSON.parse(localStorage.getItem("allView"));
const allProducts = Object.keys(allView);

const productRender = (product) => {
    const productDiv = document.createElement("div")
    productDiv.insertAdjacentHTML("beforeend", `${product}`);
    productDiv.addEventListener("click", () => {

    })
    return productDiv;
}

allProducts.forEach((product) => {
    viewsDiv.append(productRender(product));
})