const divContent = document.querySelector(".content");
const someParagraph = document.createElement("p");
someParagraph.textContent = "Some text in paragraph";

const button = document.createElement('button');
button.textContent = "Send";
button.onclick = () => {
    button.textContent = "Text sent!";
}

const anotherButton = document.createElement("button");
anotherButton.state = "not-clicked";
anotherButton.textContent = "Show text";
anotherButton.onclick = () => {
    if (anotherButton.state === "not-clicked") {
        anotherButton.state = "clicked";
        anotherButton.textContent = "Hide text";
        divContent.append(someParagraph);
        return;
    }
    anotherButton.state = "not-clicked";
    anotherButton.textContent = "Show text";
    divContent.removeChild(someParagraph);
}

divContent.append(button);
divContent.append(anotherButton);


