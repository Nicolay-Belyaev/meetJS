import {getLessonByID, incrementParticipantsNumber} from "./fakeAPI.js";
import {createLesson} from "./createLesson.js";

export const bookButton = (lessonID) => {
    const button = document.createElement("button");
    button.innerText = "Записаться";
    button.className = "btn btn__book-lesson";

    button.addEventListener("click", () => {
        incrementParticipantsNumber(lessonID);
        console.log(createLesson(getLessonByID(lessonID)))
        console.log("done!")
    })
    return button;
}
