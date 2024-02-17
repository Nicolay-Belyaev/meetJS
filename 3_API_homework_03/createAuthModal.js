import {fetchOathToken} from "./API.js";
import {APIkey, redirectURI} from "./CONSTANTS.js";

export const createAuthModal = () => {
    const closeModal = () => {document.querySelector(".modal__wrapper").remove()}
    const wrapper = document.createElement("div")
    const messageUnsplash = document.createElement("span");
    const messageToken = document.createElement("span");
    const authCodeInput = document.createElement("input");
    const authButton = document.createElement('button');
    const close = document.createElement("div")

    wrapper.className = "modal__wrapper";
    messageToken.className = "modal__message";
    messageUnsplash.className = "modal__message";
    authCodeInput.className = "modal__input";
    authButton.className = "modal__button";
    close.className = "modal__close"

    messageUnsplash.innerText = "Для того что бы поставить лайк, необходимо авторизоваться в сервисе Unsplash."
    messageToken.innerText = "После авторизации сервис сообщит вам специальный код. Передайте его через поле ниже."
    authCodeInput.placeholder = "вставьте код сюда";
    authButton.innerText = "Авторизовать в Unsplash";
    close.innerText = "X";

    close.addEventListener("click", closeModal);

    authButton.addEventListener("click", () => {
        authButton.innerText = "Ввести код";
        window.open(`https://unsplash.com/oauth/authorize/` +
                        `?client_id=${APIkey}` +
                        `&redirect_uri=${redirectURI}`+
                        `&response_type=code` +
                        `&scope=public+write_likes`, "_blank");

        authButton.addEventListener("click",  async () => {
            const oathResponce = await fetchOathToken(authCodeInput.value);
            if (oathResponce) {
                localStorage.setItem("unsplashToken", oathResponce);
                messageUnsplash.innerText = "Код сохранен, залайкайте эти фоточки полностью!"
                messageToken.innerText = "";
                authCodeInput.remove();
                authButton.innerText = "Закрыть";
                    authButton.addEventListener("click", closeModal);
            } else {
                messageUnsplash.innerText = "Похоже, вы ошиблись! Попробуйте ввести код еще раз.";
                messageToken.innerText = "";
            }
        })
    }, {once: true})

    wrapper.append(close, messageUnsplash, messageToken, authCodeInput, authButton);
    return wrapper;
}


