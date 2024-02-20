import {randomPhotoButton, } from "./randomPhotoButton.js";
import {miniaturesRenderer} from "./createMiniature.js";

if (!localStorage.getItem("picHistory")) {
    localStorage.setItem("picHistory", "[]");
}

document.body.append(miniaturesRenderer())
const mainPicContainer =  document.createElement("section");
mainPicContainer.className = "picContainer";

document.body.append(mainPicContainer)
document.body.prepend(randomPhotoButton());

