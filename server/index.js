require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db/connectDB');
const HomeIntroSchema = require('./models/HomeIntroduction')
const AboutIntroSchema = require('./models/AboutIntroduction')
const CGPASchema = require('./models/CGPA')
const SemesterSchema = require('./models/Semester')
const SkillSchema = require('./models/Skill')
const ProjectSchema = require('./models/Project')
const CourseSchema = require('./models/Course')
const AdditionalSkill = require('./models/AdditionalSkill')


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.post("/PostIntro", (req, res) => {
    HomeIntroSchema.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetIntro", (req, res) => {
    HomeIntroSchema.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteIntro/:id', (req, res) => {
    const id = req.params.id;
    HomeIntroSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/PostAboutIntro", (req, res) => {
    AboutIntroSchema.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetAboutIntro", (req, res) => {
    AboutIntroSchema.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteAboutIntro/:id', (req, res) => {
    const id = req.params.id;
    AboutIntroSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/PostCGPA", (req, res) => {
    CGPASchema.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetCGPA", (req, res) => {
    CGPASchema.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteCGPA/:id', (req, res) => {
    const id = req.params.id;
    CGPASchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/PostSemester", (req, res) => {
    SemesterSchema.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetSemester", (req, res) => {
    SemesterSchema.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteSemester/:id', (req, res) => {
    const id = req.params.id
    SemesterSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/PostSkill", (req, res) => {
    SkillSchema.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetSkill", (req, res) => {
    SkillSchema.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteSkill/:id', (req, res) => {
    const id = req.params.id
    SkillSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/PostProject", (req, res) => {
    ProjectSchema.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetProject", (req, res) => {
    ProjectSchema.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteProject/:id', (req, res) => {
    const id = req.params.id
    ProjectSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/PostCourse", (req, res) => {
    CourseSchema.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetCourse", (req, res) => {
    CourseSchema.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteCourse/:id', (req, res) => {
    const id = req.params.id
    CourseSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/PostAdditionalSkill", (req, res) => {
    AdditionalSkill.create(req.body)
        .then(result => res.json(result.data))
        .catch(error => res.json(error))
})

app.get("/GetAdditionalSkill", (req, res) => {
    AdditionalSkill.find()
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.delete('/DeleteAdditionalSkill/:id', (req, res) => {
    const id = req.params.id
    AdditionalSkill.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})



const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server Connected Successful!`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();