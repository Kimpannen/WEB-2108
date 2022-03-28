import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import middlewares from './source/middlewares/Middlewares.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pancakes!')
    })


app.use(middlewares.notFound)
app.use(middlewares.errorHandler)


app.listen(3001, () => {
    console.log(`Servern är igång på port ${port}`)
})

https://www.youtube.com/watch?v=_8RszRjjTMI&list=PLo-BJUIALMg_twGJ5IjJIUpXqZH-ULmx0&index=12