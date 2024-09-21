import mongoose from 'mongoose'

const FlightSchema = new mongoose.Schema(
  {
    id: String,
    flightName: String,
    flightArrival: String,
    flightDeparture: String,
    flightRoute: [String],
    flightDirection: String,
  },
  { timestamps: true }
)

export default mongoose.model('Flight', FlightSchema)
