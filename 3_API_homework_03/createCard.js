import {fetchLike} from "./API.js";
import {createAuthModal} from "./createAuthModal.js";

export const createCard = ({id, urls, user, liked_by_user}) => {
    const wrapper = document.createElement("div");
    const img = document.createElement("img");
    const data = document.createElement("div");
    const name = document.createElement("span");
    const like = document.createElement("span");

    img.src = `${urls.small}`;
    name.innerText = `${user?.first_name } ${user?.last_name}`;
    like.innerText = "Like"
    liked_by_user ? like.classList.add("liked") : like.classList.remove("liked"); // вынести в отдельную функцию


    like.addEventListener("click", async () => {
        if (localStorage.getItem("unsplashToken")) {
            const APIresponse = await fetchLike(id, liked_by_user);
            console.log(APIresponse)
            APIresponse.photo.liked_by_user ? like.classList.add("liked") : like.classList.remove("liked");
            liked_by_user = !liked_by_user;
        } else {
            document.body.append(createAuthModal())
        }})

    wrapper.append(img, data);
    data.append(name, like);
    return wrapper;
}

