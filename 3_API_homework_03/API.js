// TODO: сделать обработку ошибок сервера
// TODO: сделать дебаунс для фетчей

import {updateHeaders} from "./utils.js";

const baseUrl = "https://api.unsplash.com";
const APIkey = "OdudFgs7KAS-VaDAWri16MxDiBhxKOhEPrY8khnyZSM";
const APIsecret = "kA3rkHTZzna_wz8Y6hvZqwunq8DW3076SFchqtdwHIY"
const redirectURI = "urn:ietf:wg:oauth:2.0:oob"

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
    return (await fetch(`${baseUrl}/oath/token/?client_id=${APIkey}&client_secret=${APIsecret}&redirect_uri=${redirectURI}&code=${code}&grant_type=authorization_code`, {
        method: "POST"
    })).json()
}
