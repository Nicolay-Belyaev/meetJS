import {fetchRandomImage} from "./API.js";
import {createCard} from "./utils.js";


const randomPhoto = await fetchRandomImage();
console.log(randomPhoto)
document.body.append(createCard(randomPhoto));

