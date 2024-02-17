import {updateHeaders} from "./utils.js";
import {APIkey, APIsecret, baseUrl, redirectURI} from "./CONSTANTS.js";

export const fetchRandomImage = async () => {
    const randomImageResponce = await fetch(`${baseUrl}/photos/random`, {
        method: "GET",
        headers: {
            authorization: `Client-ID ${APIkey}`
        }
    });
    if (!randomImageResponce.ok) {
        alert('Похоже, у нас что-то сломалось, зайдите попозже.');
        return;
    }
    return await randomImageResponce.json();
}

export const fetchLike = async (id, isLiked) => {
    const likeResponce = await fetch(`${baseUrl}/photos/${id}/like`, {
        method: `${isLiked ? "DELETE" : "POST"}`,
        ...updateHeaders()
    })
    if (!likeResponce.ok) {
        alert('Похоже, у нас что-то сломалось, зайдите попозже.');
        return;
    }
    return await likeResponce.json();
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
