import {fetchImageByID} from "./API.js";
import {createCard} from "./createCard.js";

export const createMiniature = (id, imgSrc) => {
    const miniature = document.createElement("div");
    const img = document.createElement("img")
    miniature.className = "miniature";
    img.src = imgSrc;
    miniature.append(img);

    miniature.addEventListener("click", async () => {
        const photoFromMiniature = await fetchImageByID(id);
        const randomPhotoContainer = document.querySelector(".picContainer");
        randomPhotoContainer.innerHTML = "";
        randomPhotoContainer.append(createCard(photoFromMiniature));
    })

    return miniature;
}

export const miniaturesRenderer = () => {
    const history = JSON.parse(localStorage.getItem("picHistory"));
    const gallery = document.createElement("section");
    gallery.className = "gallery";
    history.forEach(pic => {gallery.append(createMiniature(pic.id, pic.urls.small))});

    return gallery;
}
