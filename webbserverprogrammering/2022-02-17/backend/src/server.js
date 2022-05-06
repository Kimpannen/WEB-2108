import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

// Config stuff
const port = process.env.SERVER_PORT || 8080
const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}

// Initiate ExpressAPP
const app = express()

// Middleware
app.use(cors(cors_options))
app.use(express.json())

// Databas Namn
const userDatabase = [
    {
        name: 'Adam',
        age: 30,
        gender: 'Male'
    },

    {
        name: 'Bengtina',
        age: 19,
        gender: 'Female'
    },

    {
        name: 'Carin',
        age: 29,
        gender: 'Female'
    },

    {
        name: 'Emil',
        age: 32,
        gender: 'Male'
    }
]

// API Functions
const userNames = () => {
    const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    } )
    return names
}

const getUserByName = (name) => {
    let object = `Could not find "${name}" in database`
    userDatabase.forEach(user => {
        console.log(user.name)
        if (name === user.name) {
            object = user
            return
        }
    })
    return object
}

const updateUserByName = (name, newName, age, gender) => {
    let object = `Could not find "${name}" in database`
    userDatabase.forEach(user => {
        console.log(user.name)
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

// Endpoint + Business logic
app.get('/', (req, res) => {
    res.send('API is Alive!')
})


// CRUD

// Create
app.post('/user/', (req, res) => {
    const {name, age, gender} = req.body
    const newObject =  {
            name: name,
            age: age,
            gender: gender
        }
        userDatabase.push(newObject)
    res.status(201).send(userDatabase)
})


// Read
app.get('/users', (req,res) => {
    res.status(200).send(userDatabase)
})

app.get('/users/name', (req,res) => {
    const responseFromDb = userNames()
    res.status(200).send(responseFromDb)
})

// Hitta Adam
app.get('/user/:name', (req,res) => {
    const name = req.params.name
    const responseFromDb = getUserByName(name)
    res.status(200).send(responseFromDb)
})

//READ

//UPDATE
app.put('/user/', (req, res) => {
    const {name, newName, age, gender} = req.body
    const response = updateUserByName(name, newName, age, gender)


    userDatabase.push()
    res.status(202).send(response)
})


//DELETE



// Start Server
app.listen(port, () => {
    console.log(`Server running on adress:port http:localhost:${port}`)
})


// 2022-02-17 del 6