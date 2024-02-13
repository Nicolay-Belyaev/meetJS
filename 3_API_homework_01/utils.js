import {lesson} from "./componets/lesson.js";

export const rerenderLesson = (lessonID, practice) => {
    document.querySelector(`#lesson-${lessonID}`).replaceWith(lesson(practice))
}
