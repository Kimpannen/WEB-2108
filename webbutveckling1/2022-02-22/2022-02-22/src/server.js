import express from 'express'
import Configuration from './configurations/configuration.js'
import ApplyMiddlewares from './configurations/ApplyMiddlewares.js'
import AliveController from './controller/AliveController.js'
import UserController from "./controller/UserController.js";
import userDatabase from "./data/userDatabase.js";


// Initiate ExpressAPP
const app = express()
ApplyMiddlewares(app)

// Database


// API Functions
const userNames = () => {
    const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getUserByName = (name) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return user
        }
    })
    return object
}

const updateUserByName = (name, newName, age, gender) => {
    let object = `Could not find "${ name }" in database`
    userDatabase.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.age = age
            user.gender = gender
            object = user
            return
        }
    })
    return object
}

const deleteUserByName = (name) => {
    let text = `User with name: "${name}" `

    for (let i = 0; i < userDatabase.length; i++) {
        if (name === userDatabase[i].name) {
            text += `was deleted from database!`
            userDatabase.splice(i, 1)
            return text
        }
    }

    text += `don't exist in database!`
    return text
}

// Endpoint + Business Logic
// app.get('/', (req, res) => {
// res.send('API is Alive')
// })
app.get('/', AliveController.alive)

// CRUD
// CREATE
app.post('/user/', UserController.createUser)

// READ
app.get('/users', UserController.getUsers)

})

app.get('/users/name', (req, res) => {

})

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    const responseFromDb = getUserByName(name)
    res.status(200).send(responseFromDb)
})

// UPDATE
app.put('/user/', (req, res) => {
    const { name, newName, age, gender } = req.body
    const response = updateUserByName(name, newName, age, gender)

    res.status(202).send(response)
})

// DELETE
app.delete('/user/:name', (req, res) => {
    const name = req.params.name
    const responseFromDB = deleteUserByName(name)
    res.status(200).send(responseFromDB)
})

// Start Server
Configuration.connectToPort(app)
