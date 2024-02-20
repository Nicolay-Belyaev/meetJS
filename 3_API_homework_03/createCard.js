import {fetchLike} from "./API.js";
import {createAuthModal} from "./createAuthModal.js";

export const createCard = ({id, urls, user, liked_by_user, likes}) => {
    const wrapper = document.createElement("div");
    const img = document.createElement("img");
    const data = document.createElement("div");
    const name = document.createElement("span");
    const like = document.createElement("span");
    const counter = document.createElement("span")

    data.className = "card__data";
    like.className = "card__like";
    like.dataset.id = id;

    img.src = `${urls.small}`;
    name.innerText = `${user?.first_name } ${user?.last_name}`;
    like.innerText = "Like"
    counter.innerText = likes;
    liked_by_user ? like.classList.add("liked") : like.classList.remove("liked");


    like.addEventListener("click", async () => {
        if (localStorage.getItem("unsplashToken")) {
            const APIresponse = await fetchLike(id, liked_by_user);
            if (APIresponse.photo.liked_by_user) {
                like.classList.add("liked")
                counter.innerText = `${++likes}`;
            } else {
                like.classList.remove("liked");
                counter.innerText = `${--likes}`;
            }
            liked_by_user = !liked_by_user;

            const history = JSON.parse(localStorage.getItem("picHistory"));
            history.forEach((pic) => {
                if (pic.id == like.dataset.id) {
                    pic.liked_by_user = !pic.liked_by_user;
                    pic.liked_by_user ? pic.likes++ : pic.likes--;
                }
            })
            localStorage.setItem("picHistory", JSON.stringify(history));
        } else {
            document.body.append(createAuthModal())
        }})


    wrapper.append(img, data);
    data.append(name, like, counter);
    return wrapper;
}

