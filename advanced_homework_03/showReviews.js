const viewsDiv = document.querySelector(".views");
const localStorage = window.localStorage;

const productsNames = [];
for (let i = 0; i < localStorage.length; i++) {productsNames.push(localStorage.key(i));}

productsNames.forEach((product) => {
    const div = document.createElement("div");
    const headline = document.createElement("p");
    const ul = document.createElement("ul");
    const productViews = JSON.parse(localStorage.getItem(product));

    div.append(headline, ul);
    div.addEventListener("click", ({target}) => {
        if (target.tagName === "P") {
            if (ul.innerHTML !== "") {
                ul.innerHTML = "";
            } else {
                productViews.forEach((view) => {ul.append(renderViewsList(product, view, productViews))});
            }
        }
    });
    headline.textContent = `${product}`;
    viewsDiv.append(div);
})

const renderViewsList = (product, view, productViews) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeBtn = document.createElement("button");

    span.innerText = `${view}`;
    removeBtn.innerText = "удалить";
    removeBtn.addEventListener("click", () => {
        productViews.splice(productViews.indexOf(view), 1);
        localStorage.setItem(product, JSON.stringify(productViews));
        removeBtn.parentElement.remove();
        if (productViews.length === 0) {localStorage.removeItem(product);}
    });

    li.append(span, removeBtn);
    return li;
}