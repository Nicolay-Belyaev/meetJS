import {fetchLike} from "./API.js";

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
    wrapper.append(img, data);
    data.append(name, like);

    like.addEventListener("click", async () => {
        if (localStorage.getItem("unsplashToken")) {
            const APIresponse = await fetchLike(id, liked_by_user);
            console.log(APIresponse)
            APIresponse.photo.liked_by_user ? like.classList.add("liked") : like.classList.remove("liked");
            liked_by_user = !liked_by_user;
        } else {
            document.body.append(createAuthModal())
        }
    })
    return wrapper;
}

const createAuthModal = () => {
    const wrapper = document.createElement("div")
    const messageUnsplash = document.createElement("span");
    const messageToken = document.createElement("span");
    const authCodeInput = document.createElement("input");
    const authButton = document.createElement('button');
    const close = document.createElement("div")

    wrapper.className = "modal__wrapper";

    messageUnsplash.innerText = "Для того что бы поставить лайк, необходимо авторизоваться в сервисе Unsplash."
    messageToken.innerText = "После авторизации сервис сообщит вам специальный токен. Передайте его через поле ниже."
    authCodeInput.placeholder = "вставьте токен сюда";
    authButton.innerText = "Авторизовать в Unsplash";
    close.innerText = "X";

    authButton.addEventListener("click", () => {
        authButton.innerText = "Передать токен";
        window.open("https://unsplash.com/oauth/authorize/?client_id=OdudFgs7KAS-VaDAWri16MxDiBhxKOhEPrY8khnyZSM&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code&scope=public+write_likes", "_blank");

        authButton.addEventListener("click",  async () => {
            const oathResponce = await fetchOathToken(authCodeInput.value);
            console.log(oathResponce.access_token)
            localStorage.setItem("unsplashToken", oathResponce.access_token);
            messageUnsplash.innerText = "Токен сохранен, залайкайте эти фоточки полностью!"
            messageToken.innerText = "";
        })
    }, {once: true})

    close.addEventListener("click",() => {document.querySelector("modal__wrapper").remove()})
    wrapper.append(messageUnsplash, messageToken, authCodeInput, authButton, close);
    return wrapper;
}

const fetchOathToken = async (code) => {
    const oathResponceJSON = await (await fetch("https://unsplash.com/oauth/token/" +
        "?client_id=OdudFgs7KAS-VaDAWri16MxDiBhxKOhEPrY8khnyZSM" +
        "&client_secret=kA3rkHTZzna_wz8Y6hvZqwunq8DW3076SFchqtdwHIY" +
        "&redirect_uri=urn:ietf:wg:oauth:2.0:oob" +
        `&code=${code}` +
        "&grant_type=authorization_code",
        {
            method: "POST"
        })).json();

    return oathResponceJSON.access_token;
}


export const updateHeaders = () => {
    return {
        headers: {
            authorization: `Bearer ${localStorage.getItem("unsplashToken")}`
        }
    }
}
