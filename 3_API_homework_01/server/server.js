import express from "express";
import fs from "fs";
import cors from "cors";

const server = express();
const port = 3000;
const mockDataPath = "mockData.json";
const userPath = "user.json";

server.use(
    cors(),        // вот с этим надо как следует разобраться.
    express.json()
    );

server.get('/allLessons', (req, res) => {
    res.send(fs.readFileSync(mockDataPath));
})

server.get('/lesson/:id', (req, res) => {
    const mockData = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));
    let resultLesson = mockData.find((lesson) => lesson.id == req.params.id)
    resultLesson ? res.send(resultLesson) : res.send({resultLesson:null})
})

server.get('/getUser', (req, res) => {
    res.send(fs.readFileSync(userPath));
})

server.put('/addParticipant/:lessonID', (req, res) => {
    const mockData = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));
    const user = JSON.parse(fs.readFileSync(userPath, "utf-8"));
    let targetLesson = mockData.find((lesson) => lesson.id == req.params.lessonID);

    if (targetLesson &&                                                    // есть такое занятие,
        targetLesson.currentParticipants < targetLesson.maxParticipants && // на нем есть места,
        user[req.params.lessonID] === false) {                             // пользователь еще не записан

        targetLesson.currentParticipants += 1;
        user[req.params.lessonID] = true;
        fs.writeFileSync(mockDataPath, JSON.stringify(mockData));
        fs.writeFileSync(userPath, JSON.stringify(user));
        res.send(targetLesson);

    } else {
        res.status(targetLesson ? 400 : 404)
        res.send(targetLesson ? {error:"Can't add another participant."} : {error:"Lesson not found."})
    }
})

server.put('/removeParticipant/:lessonID', (req, res) => {
    const mockData = JSON.parse(fs.readFileSync(mockDataPath, "utf-8"));
    const user = JSON.parse(fs.readFileSync(userPath, "utf-8"));
    let targetLesson = mockData.find((lesson) => lesson.id == req.params.lessonID);

    if (targetLesson && user[req.params.lessonID] === true) {
        targetLesson.currentParticipants -= 1;
        user[req.params.lessonID] = false;
        fs.writeFileSync(mockDataPath, JSON.stringify(mockData));
        fs.writeFileSync(userPath, JSON.stringify(user));
        res.send(targetLesson);
    } else {
        res.status(targetLesson ? 400 : 404)
        res.send(targetLesson ? {error:"Can't add another participant."} : {error:"Lesson not found."})
    }
})
server.listen(port, () => {
    console.log(`Lessons server started on ${port}`)
})
