import {bookButton} from "./bookButton.js";
import {userSlice} from "../slices/userSlice.js";
import {cancelButton} from "./cancelButton.js";

export const lesson = ({id, name, time, maxParticipants, currentParticipants, imgPath}) => {
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
    const unBookButton = cancelButton(id);

    wrapper.className = "wrapper";
    wrapper.id = `lesson-${id}`;
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

    wrapper.append(description, participants, buttons);
    description.append(headline, img, timeSpan);
    participants.append(maxParticipantsSpan, currentParticipantsSpan);
    buttons.append(reservButton, unBookButton);

    if (userSlice.getUserSlice()[id] === true) {
        const info = document.createElement("div");
        info.innerText = "Вы записаны на это занятие";
        info.className = "info";
        wrapper.append(info);
        return wrapper;
    }

    if (currentParticipants === maxParticipants) {
        const info = document.createElement("div");
        info.innerText = "Все места на занятии заняты."
        info.className = "info";
        wrapper.append(info);
    }
    return wrapper;
}
