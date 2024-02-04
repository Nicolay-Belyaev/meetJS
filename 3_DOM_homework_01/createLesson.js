import {bookButton} from "./bookButton.js";

export const createLesson = ({id, name, time, maxParticipants, currentParticipants, imgPath}) => {
    const wrapper = document.createElement("div");
        const description = document.createElement("div");
            const headline = document.createElement("h2");
            const img = document.createElement("img");
            const timeSpan = document.createElement("span");
        const participants = document.createElement("div");
            const maxParticipantsSpan = document.createElement("span");
            const currentParticipantsSpan = document.createElement("span");
        const buttons = document.createElement("div");
            const reservButton = bookButton(id);
            const unBookButton = document.createElement("button");

    wrapper.className = "wrapper";
        description.className = "lesson_description";
            headline.className = "lesson_name";
            headline.innerText = `${name}`;
            img.className = "lesson_img";
            img.src = `${imgPath}`;
            timeSpan.className = "lesson_time";
            timeSpan.innerText = `Время занятия: ${time}`;
        participants.className = "lesson_participants";
            maxParticipantsSpan.className = "lesson_participants-max";
            currentParticipantsSpan.className = "lesson_participants-current";
            maxParticipantsSpan.innerText = `Максимум участников: ${maxParticipants}`;
            currentParticipantsSpan.innerText = `Участников сейчас: ${currentParticipants}`;
        buttons.className = "lesson_buttons";
            // bookButton.className = "btn btn__book-lesson";
            unBookButton.className = "btn btn__unbook-lesson"

    wrapper.append(description, participants, buttons);
            description.append(headline, img, timeSpan);
            participants.append(maxParticipantsSpan, currentParticipantsSpan);
            buttons.append(reservButton, unBookButton);

    if (currentParticipants === maxParticipants) {
        const allBooked = document.createElement("div")
        allBooked.innerText = "Все места на занятии заняты."
        allBooked.className = "allBooked";
        wrapper.append(allBooked);
    }
    return wrapper;
}