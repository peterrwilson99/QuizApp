import seng401Midterm1 from './seng401/midterm1.json'
import seng460Midterm1 from './seng460/midterm1.json'
import seng468Midterm1 from './seng468/midterm1.json'
import seng468Midterm2 from './seng468/midterm2.json'
import seng468Final from './seng468/final.json'

export const quizDictionary = {
    "1": {
        id: "1",
        course: "SENG401",
        quiz: "Midterm 1",
        questions: seng401Midterm1
    },
    "2": {
        id: "2",
        course: "SENG460",
        quiz: "Midterm 1",
        questions: seng460Midterm1
    },
    "3": {
        id: "3",
        course: "SENG468",
        quiz: "Midterm 1",
        questions: seng468Midterm1
    },
    "4": {
        id: "4",
        course: "SENG468",
        quiz: "Midterm 2",
        questions: seng468Midterm2
    },
    "5": {
        id: "5",
        course: "SENG468",
        quiz: "Final Exam",
        questions: seng468Final
    },
}


export const Quizzies = Object.values(quizDictionary);