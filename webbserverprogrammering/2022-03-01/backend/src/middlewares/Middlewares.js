import cors from 'cors'
import express from "express";
import helmet from "helmet";
import morgan from 'morgan'

const AllowedRequestOrigins = '*'
const AllowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: AllowedRequestOrigins,
    methods: AllowedRequestMethods
}

const someBananaMiddlewareFunction = (req, res, next) => {
    console.log('Middleware function is running and printing "Banana" to console')
    next()
}




const apply = (app) => {
    app.use(helmet())
    app.use(cors(cors_options))
    app.use(express.json())
    app.use(someBananaMiddlewareFunction)
    app.use(morgan('common'))
}

const notFound = (req, res, next) => {
    const error = new Error(`Not found "${req.originalUrl}"!`)
    res.status(404)
    next(error)
}

const wrongPath = (app) => {
    app.use(notFound)
}

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode: statusCode,
        message: error.message,
        stackTrace: error.stack
    })
    next()
}

const errorHandling = (app) => {
    app.use(errorHandler)
}



export default {
    apply,
    wrongPath,
    errorHandling
}


// 2022-03-01 testning del 2 22:10


