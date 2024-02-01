const productInput = document.querySelector("#product");
const reviewInput = document.querySelector("#review");
const submitButton = document.querySelector("#add-review");
const localStorage = window.localStorage;

submitButton.addEventListener("click", () => {
   if (localStorage.getItem("allViews") == null) {localStorage.setItem("allView", "{}");}

   const allView = JSON.parse(localStorage.getItem("allView"));
   console.log(allView)
   allView[productInput.value] = allView[productInput.value] ? [...allView[productInput.value], reviewInput.value] : [reviewInput.value];

   localStorage.setItem("allView", JSON.stringify(allView));
});
