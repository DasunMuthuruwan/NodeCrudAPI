import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"

import usersRoutes from './routes/users.js'

const app = express()
// config dotenv
dotenv.config()

const PORT = process.env.PORT

app.use(bodyParser.json())
// all routes start /users
app.use('/users', usersRoutes)

app.get('/',(req, res) => res.send("Hello from HomePage"))
//listen port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))