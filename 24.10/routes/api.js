import express from 'express'
import apiLinks from '../data/apiLinks.js'
import studentList from '../data/studentsList.js'
import subjectsList from '../data/subjectsList.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(apiLinks)
})

router.get('/students', (req, res) => {
  res.json(studentList)
})

router.get('/students/:id', (req, res) => {
  const paramId = parseInt(req.params.id)
  const student = studentList.find((student) => student.id === paramId)

  if (!student) {
    res.status(404).json({ error: 'Student not found' })
  } else {
    res.json(student)
  }
})

router.get('/subjects', (req, res) => {
  res.json(subjectsList)
})

router.get('/subjects/:id', (req, res) => {
  const paramId = parseInt(req.params.id)
  const subject = subjectsList.find((subject) => subject.id === paramId)

  if (!subject) {
    res.status(404).json({ error: 'Student not found' })
  } else {
    res.json(subject)
  }
})

export default router
