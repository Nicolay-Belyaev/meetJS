import {addParticipant} from "../API.js";
import {userSlice} from "../slices/userSlice.js";
import {lessonsSlice} from "../slices/lessonsSlice.js";
import {rerenderLesson} from "../utils.js";

export const bookButton = (lessonID) => {
    const button = document.createElement("button");
    button.innerText = "Записаться";
    button.className = "btn btn__book-lesson";
    button.disabled = userSlice.getUserSlice()[lessonID] || !lessonsSlice.isLessonHaveFreeSlots(lessonID);

    button.addEventListener("click", () => {
        addParticipant(lessonID).then(res => {
            if (res.hasOwnProperty("Error")) {
                alert(res.error);
                return;
            }
            userSlice.setUserSlice(lessonID, true);
            rerenderLesson(lessonID, res);
        })
    })
    return button;
}


