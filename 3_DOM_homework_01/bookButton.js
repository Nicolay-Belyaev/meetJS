import {incrementParticipantsNumber} from "./fakeAPI.js";

const bookButton = (lessonID, buttonStatus) =>
    function callback() {
        incrementParticipantsNumber(lessonID);
    }

    return(
        `<button ${buttonStatus}`
    )
}