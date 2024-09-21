import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

import morgan from 'morgan'
import mongoose from 'mongoose'

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})
/* dummy route */
app.get('/api/v1/test', (req, res) => {
  res.json({ msg: 'test route' })
})

const port = process.env.PORT || 5100

try {
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`server running on PORT  ${port}...`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
