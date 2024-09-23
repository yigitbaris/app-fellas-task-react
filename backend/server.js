import express from 'express'
import * as dotenv from 'dotenv'
//.env dosyası okuması
dotenv.config()

import flightRouter from './routes/flightRouter.js'

const app = express()

import morgan from 'morgan'
import mongoose from 'mongoose'

//console'da server takibi için js kütüphanesi
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

//route'ların dahil edilmesi
app.use('/flight', flightRouter)

const port = process.env.PORT || 5100

try {
  //database bağlantısı
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`server running on PORT  ${port}...`)
  })
} catch (error) {
  console.log(error)
  process.exit(1)
}
