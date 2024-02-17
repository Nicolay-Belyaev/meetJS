import {createCard} from "./createCard.js";
import {fetchRandomImage} from "./API.js";

export const createButton = () => {
    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "Хочу случайную фоточку";

    button.addEventListener("click", async () => {
        document.body.append(createCard(await fetchRandomImage()));
    })

    return button;
}
