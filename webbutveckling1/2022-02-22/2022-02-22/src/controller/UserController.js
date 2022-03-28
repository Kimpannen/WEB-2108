import userDatabase from "../data/userDatabase.js";

const createUser = (req, res) => {
    const { name, age, gender } = req.body
    const newObject = {
    name: name,
    age: age,
    gender: gender
    }
    userDatabase.push(newObject)
     res.status(201).send(userDatabase)
}

const getUsers = (req, res) => {
    res.status(200).send(userDatabase)
}

const getUserNames = (req, res) => {
    const responseFromDb = userNames()
    res.status(200).send(responseFromDb)
}

export default {
    createUser,
    getUsers,
    getUserNames
}