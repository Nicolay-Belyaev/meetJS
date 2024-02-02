const viewsDiv = document.querySelector(".views");
const localStorage = window.localStorage;

const productsNames = [];
for (let i = 0; i < localStorage.length; i++) {productsNames.push(localStorage.key(i));}

productsNames.forEach((product) => {
    const div = document.createElement("div");
    const headline = document.createElement("p");
    const ul = document.createElement("ul");

    div.append(headline, ul);
    div.addEventListener("click", ({target}) => {
        if (target.tagName === "P") {
            ul.insertAdjacentHTML(renderViewsList(product));
        }
    });
    headline.textContent = `${product}`;
    viewsDiv.append(div);
})

const renderViewsList = (product) => {
    const productViews = JSON.parse(localStorage.getItem(product));
    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");



}