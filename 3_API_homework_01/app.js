import {lesson} from "./componets/lesson.js";
import {lessonsSlice} from "./slices/lessonsSlice.js";

const body =  document.querySelector("body");
lessonsSlice.slice.forEach((practice) => body.append(lesson(practice)));
