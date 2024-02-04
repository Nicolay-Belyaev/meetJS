import {getAllLessons} from "./fakeAPI.js";
import {createLesson} from "./createLesson.js";

const body = document.querySelector("body")
const lessons = getAllLessons();
lessons.forEach((lesson) => body.append(createLesson(lesson)));