import {createLesson} from "./createLesson.js";
import {getAllLessons} from "./fakeAPI.js";

const body = document.querySelector("body")
const lessons = getAllLessons();
lessons.forEach((lesson) => body.insertAdjacentHTML("beforeend", createLesson(lesson)));