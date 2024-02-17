import {fetchRandomImage} from "./API.js";
import {createCard} from "./createCard.js";

const randomPhoto = await fetchRandomImage();
document.body.append(createCard(randomPhoto));

