import cors from 'cors'
import express from "express";

const AllowedRequestOrigins = '*'
const AllowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: AllowedRequestOrigins,
    methods: AllowedRequestMethods
}

const ApplyMiddlewares = (app) => {
    app.use(cors(cors_options))
    app.use(express.json())
}

export default ApplyMiddlewares







