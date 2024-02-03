const body = document.querySelector("body");

const renderLesson = ({name, time, maxParticipants, currentParticipants, imgPath}) => {
    return(
        `<div class="wrapper">` +
        `    <div class="lesson_description">` +
        `        <h2 class="lesson_name">${name}</h2>` +
        `        <img src="${imgPath}" alt="" class="lesson_img">` +
        `        <span class="lesson_time">Время занятия: ${time}</span>`+
        `    </div>` +
        `    <div class="lesson_participants">` +
        `        <span class="lesson_participants-max">Максимум участников: ${maxParticipants}</span>`+
        `        <span class="lesson_participants-current">Участников сейчас: ${currentParticipants}</span>`+
        `    </div>`+
        `    <div class="lesson_buttons">` +
        `        <button class="btn btn__book-lesson">Записаться</button>`+
        `        <button class="btn btn__unbook-lesson">отменить запись</button>`+
        `    </div>`+
        `</div>`
    )
}


mockData.forEach((lesson) => body.insertAdjacentHTML("beforeend", renderLesson(lesson)))

