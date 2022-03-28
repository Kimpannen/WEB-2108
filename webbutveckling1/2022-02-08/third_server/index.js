//const express = require('express')
import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
//const port = 3001
const port = process.env.SERVER_PORT
const app = express()

app.get('/', (req, res) => {
    res.send('API Alive!')
})

app.listen(3001, () => {
    console.log(`Server listening on port: http://localhost:${port}`)
})