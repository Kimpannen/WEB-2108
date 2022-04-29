//import express from 'express'
const express = require('express')

const port = 3001
const app = express()

// CRUD Create Read Update Delete
//       POST  GET   PUT   Delete



// READ
app.get('/', (req, res) => {
    console.log('GET Method')
    res.send(`Välkommen till mitt API på port: ${port}!`)
})


// CREATE
app.post('/', (req, res) => {
    console.log('POST Method')
    res.send(`Got a POST request!`)
})


// UPDATE
app.put('/', (req, res) => {
    console.log('PUT Method')
    res.send(`Got a PUT/Update request!`)
})

app.delete('/', (req, res) => {
    console.log('DELETE Method')
    res.send(`Got a DELETE request!`)
})

app.listen(port, () => {
   // console.log('Server running on port 3001')
    console.log(`Server running on port http://localhost:${port}`)
})
