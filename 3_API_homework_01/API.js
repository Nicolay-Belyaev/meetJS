const jsonificator = (data) => {return data.json()}
const rejected = (reject) => {console.log(`Ошибка! ${reject}`)}

const url = "http://localhost:3000"

export const getLessons = () => {
    return fetch(`${url}/allLessons`, {
        method: "GET",
    })
        .then(jsonificator)
        .catch(rejected)
}

export const getLessonByID = (id) => {
    return fetch(`${url}/lesson/${id}`, {
        method: "GET"
    })
        .then(jsonificator)
        .catch(rejected)
}

export const getUser = () => {
    return fetch(`${url}/getUser`, {
        method: "GET"
    })
        .then(jsonificator)
        .catch(rejected)
}

export const addParticipant = (lessonID) => {
    return fetch(`${url}/addParticipant/${lessonID}`, {
        method: "PUT",
    })
        .then(jsonificator)
        .catch(rejected)
}

export const removeParticipant = (lessonID) => {
    return fetch(`${url}/removeParticipant/${lessonID}`, {
        method: "PUT",
    })
        .then(jsonificator)
        .catch(rejected)
}
