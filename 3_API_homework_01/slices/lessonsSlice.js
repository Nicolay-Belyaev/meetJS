import {getLessons} from "../API.js";

const lessonsData = await getLessons();

class LessonsSlice {
    _lessons = {};

    constructor(lessonsData) {
        if (typeof LessonsSlice.instance === "object") {
            return LessonsSlice.instance;
        }
        this._lessons = lessonsData;
        LessonsSlice.instance = this;
        return this;
    }

    get slice() {
        return this._lessons;
    }

    getLessonFromSliceByID (lessonID) {
        return this._lessons.find((lesson) => lesson.id == lessonID)
    }

    isLessonHaveFreeSlots (lessonID) {
        const targetLesson = this.getLessonFromSliceByID(lessonID);
        return targetLesson.currentParticipants < targetLesson.maxParticipants;
    }
}


export const lessonsSlice = new LessonsSlice(lessonsData);
