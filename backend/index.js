import connectDB from './config/db.js'

import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
const port = 5000
connectDB()
app.listen(port, () => console.log(`the port running at ${port}`))
