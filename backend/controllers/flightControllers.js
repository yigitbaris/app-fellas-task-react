import Flight from '../models/FlightModel.js'
import { StatusCodes } from 'http-status-codes'

export const getAllFlights = async (req, res) => {
  const flights = await Flight.find() //database den hepsini çek

  res.status(StatusCodes.OK).json({ flights })
}

export const createFlight = async (req, res) => {
  const flight = await Flight.create(req.body) //database de oluştur
  res.status(StatusCodes.CREATED).json({ flight })
}

export const deleteFlight = async (req, res) => {
  try {
    const { _id } = req.body // id yi kontrol et
    console.log('Flight ID to delete:', _id) //id yi log la

    const flight = await Flight.findByIdAndDelete(_id) //id ye göre sil
    if (!flight) {
      return res.status(404).json({ msg: 'Flight not found' })
    }

    res.status(200).json({ msg: 'Flight deleted successfully', flight })
  } catch (error) {
    console.error('Error deleting flight:', error) // Log the error
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}
