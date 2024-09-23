import mongoose from 'mongoose'

const FlightSchema = new mongoose.Schema(
  {
    flightId: String,
    flightName: String,
    flightNumber: String,
    flightArrival: String,
    flightRoute: [String],
    flightDirection: String,
  },
  { timestamps: true }
)

export default mongoose.model('Flight', FlightSchema)
