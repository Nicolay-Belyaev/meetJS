const baseUrl = "https://api.unsplash.com";
const APIkey = "OdudFgs7KAS-VaDAWri16MxDiBhxKOhEPrY8khnyZSM";

// TODO: сделать обработку ошибок сервера
// TODO: сделать дебаунс для фетчей
const fetchRandomImage = async () => {
    return (await fetch(`${baseUrl}/photos/random`, {
        method: "GET",
        headers: {
            authorization: `Client-ID ${APIkey}`
        }
    })).json();
}

const fetchLike = async (id, isLiked) => {
    return (await fetch(`${baseUrl}/photos/${id}/like`, {
        method: `${isLiked ? "DELETE" : "POST"}`,
        headers: {
            authorization: `Client-ID ${APIkey}`
        }
    })).json();
}


const createCard = (imgLink, author, isLiked) => {
    const wrapper = document.createElement("div");
    const img = document.createElement("img");
    const data = document.createElement("div");
    const name = document.createElement("span");
    const like = document.createElement("span");

    img.src = `${imgLink}`;
    name.innerText = `${author}`;
    like.innerText = "Like"
    isLiked ? like.classList.remove("liked") : like.classList.add("liked"); // вынести в отдельную функцию
    wrapper.append(img, data);
    data.append(name, like);

    return wrapper;
}

const randomPhoto = await fetchRandomImage();
document.body.append(createCard(randomPhoto.urls.small, `${randomPhoto.user?.first_name} ${randomPhoto.user?.last_name}`, randomPhoto.liked_by_user));

