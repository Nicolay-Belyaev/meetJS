import {userSlice} from "../slices/userSlice.js";
import {removeParticipant} from "../API.js";
import {rerenderLesson} from "../utils.js";

export const cancelButton = (lessonID) => {
    const button = document.createElement("button");
    button.innerText = "Отменить занятие";
    button.className = "btn btn__unbook-lesson";
    button.id = `cancel-lesson-${lessonID}`;
    button.disabled = !userSlice.getUserSlice()[lessonID];

    button.addEventListener("click", () => {
        removeParticipant(lessonID).then(res => {
            if (res.hasOwnProperty("error")) {
                alert(res.error);
                return;
            }
            userSlice.setUserSlice(lessonID, false);
            rerenderLesson(lessonID, res);
        })
    })
    return button;
}
