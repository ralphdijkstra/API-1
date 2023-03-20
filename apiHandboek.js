const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors")
app.use(express.json())    // nodig om inputdata in json te verwerken
app.use(cors("*"))        // Access-Control-Allow-Origin: * en preflight

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'handboek'
})

db.connect((err) =>  {     // test connection
  if (err) throw err
  console.log("Database handboek connected")
})

app.get('/', (req, res) => {
	res.send('Zie document Endpoints')
})

/* GET scripts. */
app.get('/api/scripts', (req, res) => {
  let query = "SELECT * FROM scripts" 
  if('naam' in req.query) query += ` WHERE naam = "${req.query.naam}" `
  if('sort' in req.query) query += ` ORDER BY "${req.query.naam}" `

  console.log('query = ',query)
  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.length == 0) return res.status(404).end()
    res.status(200).send(rows)
  })
})

/* GET script. */
app.get('/api/scripts/:id', (req, res) => {
  const query = `SELECT * FROM scripts WHERE id= ${req.params.id}`
  console.log('query = ',query)
  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.length == 0) return res.status(404).end()
    res.status(200).send(rows)
  })
})

/* PATCH script */
app.patch('/api/scripts/:id', (req, res) => {
  let s = ''
  Object.keys(req.body).map(el => s += `, ${el} = "${req.body[el]}"`)
  const query = `UPDATE scripts SET ${s.slice(2)} WHERE id= ${req.params.id}`
  console.log('query = ',query)

  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.affectedRows == 0) return res.status(404).end()
    res.send("row updated")
  })
})  

app.post('/api/scripts', (req, res) => {
  // const isoString = new Date().toISOString()
  // const sinds = isoString.slice(0, 10)
  // req.body.sinds = sinds

  let n = ''
  Object.keys(req.body).map(el => n += `, ${el}`)
  let v = ''
  Object.keys(req.body).map(el => v += `, "${req.body[el]}"`) 
  const query = `INSERT INTO scripts (${n.slice(2)}) VALUES (${v.slice(2)})`
  console.log('query = ',query)

  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.affectedRows == 0) return res.status(404).end()
    res.status(201).send("row inserted")
  })
})  

/* DELETE script. */
app.delete('/api/scripts/:id', (req, res) => {
  const query = `DELETE FROM scripts WHERE id= ${req.params.id}`
  console.log('query = ',query)
  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.affectedRows == 0) return res.status(404).end()
    res.status(204).send()
  })
})

/* GET hoofdstukken. */
app.get('/api/hoofdstukken', (req, res) => {
  const query = `SELECT * FROM hoofdstukken`
  console.log('query = ',query)
  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.length == 0) return res.status(404).end()
    res.status(200).send(rows)
  })
})

/* GET hoofdstuk. */
app.get('/api/hoofdstukken/:id', (req, res) => {
  const query = `SELECT * FROM hoofdstukken WHERE id= ${req.params.id}`
  console.log('query = ',query)
  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.length == 0) return res.status(404).end()
    res.status(200).send(rows)
  })
})

/* GET hoofdstuk. */
app.get('/api/hoofdstukken/:id/scripts', (req, res) => {
  console.log(req.query)
  console.log(req.params)
  let query = `SELECT * FROM scripts WHERE hoofdstuk_id= ${req.params.id}`
  if('sort' in req.query) query += ` ORDER BY ${req.query.sort} `

  console.log('query = ',query)
  db.query(query, 0, (err, rows) => {
    if (err) {console.log(err); return res.status(400).end()}
    if (rows.length == 0) return res.status(404).end()
    res.status(200).send(rows)
  })
})

app.all('*', (req, res) => {      // fallback routes
  return res.status(404).end()
})

const server = app.listen(8081, () => {
	const host = server.address().address
	const port = server.address().port
  console.log("Luister op http://%s%s", host, port)
})
