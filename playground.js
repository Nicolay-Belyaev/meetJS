// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const list = document.querySelector(".list");

const addButton = document.createElement("button");
addButton.classList.add("addButton");
addButton.textContent = "Добавить новый элемент";

addButton.addEventListener("click", () => {
    const newListElement = document.createElement("li");
    newListElement.textContent = "новый элемент списка";
    list.append(newListElement);
})

document.body.append(addButton);

const removeButton = document.createElement("button");
removeButton.classList.add("removeButton");
removeButton.textContent = "Удалить верхний элемент";

removeButton.addEventListener("click", () => {
    list.children[0].remove();
})
document.body.append(removeButton);


const classButton = document.createElement("button");
classButton.textContent = "Добавить класс"
classButton.addEventListener("click", () => {
    classButton.classList.add("click")
})

document.body.append(classButton);
