// TODO: сделать обработку ошибок сервера
// TODO: сделать дебаунс для фетчей

import {updateHeaders} from "./utils.js";
import {APIkey, APIsecret, baseUrl, redirectURI} from "./CONSTANTS.js";

export const fetchRandomImage = async () => {
    return (await fetch(`${baseUrl}/photos/random`, {
        method: "GET",
        headers: {
            authorization: `Client-ID ${APIkey}`
        }
    })).json();
}

export const fetchLike = async (id, isLiked) => {
    return (await fetch(`${baseUrl}/photos/${id}/like`, {
        method: `${isLiked ? "DELETE" : "POST"}`,
        ...updateHeaders()
    })).json();
}

export const fetchOathToken = async (code) => {
    const oathResponceJSON = await (await fetch("https://unsplash.com/oauth/token/" +
        `?client_id=${APIkey}` +
        `&client_secret=${APIsecret}` +
        `&redirect_uri=${redirectURI}` +
        `&code=${code}` +
        "&grant_type=authorization_code",
        {
            method: "POST"
        })).json();

    return oathResponceJSON.access_token;
}
