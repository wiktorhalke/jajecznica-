import express from 'express'
import { createConnection } from 'mysql'
import { databaseCredentials } from '../globals/mysql.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('kontakt')
})

router.post('/', (req, res) => {
  const { name, email, radio, message } = req.body
  console.log(name, email, radio, message)

  const connection = createConnection(databaseCredentials)
  connection.connect((err) => {
    if (err) throw err
    const sql = `INSERT INTO messages (name, email, radio, message) VALUES ('${name}', '${email}', '${radio}', '${message}')`
    connection.query(sql, (err, result) => {
      if (err) throw err
      console.log('1 reciord inserted')
    })
  })
  res.redirect('/')
})

export default router
