import {mockData} from "./mockData.js";

export const getAllLessons = () => {
    return mockData;
}

export const getLessonByID = (lessonID) => {
    return mockData[getLessonIndexByID(lessonID)];
}

export const incrementParticipantsNumber = (lessonID) => {
    mockData[getLessonIndexByID(lessonID)].currentParticipants += 1
}

export const decrementParticipantsNumber = (lessonID) => {
    mockData[getLessonIndexByID(lessonID)].currentParticipants -= 1
}

const getLessonIndexByID = (id) => {
    let lessonIndex;
    mockData.some((lesson, index) => {
        lessonIndex = index;
        return lesson.id === id;
    })
    return lessonIndex;
}