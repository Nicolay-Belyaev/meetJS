const viewsDiv = document.querySelector(".views");
const localStorage = window.localStorage;
const allView = JSON.parse(localStorage.getItem("allView"));
const allProducts = Object.keys(allView);

const reviewsRender = (product) => {
    const allProductViews = allView[product];
    let resString = "";
    allProductViews.forEach((productView) => resString += `<li>${productView}</li>`)
    return resString;
}

const productRender = (product) => {
    const productDiv = document.createElement("div");
    const productP = document.createElement("p");
    const productUl = document.createElement("ul");
    productP.textContent = `${product}`;
    productP.addEventListener("click", () => {
        if (productUl.children.length === 0) {
            productUl.insertAdjacentHTML("beforeend", reviewsRender(product));
            return;
        }
        productUl.replaceChildren();
    })
    productDiv.append(productP, productUl);
    return productDiv;
}

allProducts.forEach((product) => {
    viewsDiv.append(productRender(product));
})
