const productInput = document.querySelector("#product");
const reviewInput = document.querySelector("#review");
const submitButton = document.querySelector("#add-review");
const localStorage = window.localStorage;

submitButton.addEventListener("click", () => {
   if (localStorage.getItem(`${productInput.value}`) == null) {localStorage.setItem(`${productInput.value}`, "[]");}

   const productViews = JSON.parse(localStorage.getItem(`${productInput.value}`));
   console.log(productViews);
   productViews.push(reviewInput.value);

   localStorage.setItem(`${productInput.value}`, JSON.stringify(productViews));
   productInput.value = reviewInput.value = "";
});