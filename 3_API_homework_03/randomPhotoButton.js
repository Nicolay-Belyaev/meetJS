import {createCard} from "./createCard.js";
import {fetchRandomImage} from "./API.js";
import {createMiniature} from "./createMiniature.js";

export const randomPhotoButton = () => {
    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "Хочу случайную фоточку";
    const randomPhotoContainer = document.querySelector(".picContainer");
    const historyGallery = document.querySelector(".gallery");

    button.addEventListener("click", async () => {
        const randomPhoto = await fetchRandomImage();
        randomPhotoContainer.innerHTML = "";
        randomPhotoContainer.append(createCard(randomPhoto));

        historyGallery.append(createMiniature(randomPhoto.id, randomPhoto.urls.small));

        const history = JSON.parse(localStorage.getItem("picHistory"));
        history.push({
            id: randomPhoto.id,
            urls: {
                small: randomPhoto.urls.small
            },
            user: {
                firstName: randomPhoto.user?.first_name,
                lastName: randomPhoto.user?.last_name
            },
            liked_by_user: randomPhoto.liked_by_user,
            likes: randomPhoto.likes
        })
        localStorage.setItem("picHistory", JSON.stringify(history));
    })

    return button;
}

// id, urls, user, liked_by_user, likes
