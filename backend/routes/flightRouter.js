import { Router } from 'express'
const router = Router()

import {
  createFlight,
  getAllFlights,
  deleteFlight,
} from '../controllers/flightControllers.js'

router.get('/get-all-flights', getAllFlights)
router.post('/create-flight', createFlight)
router.delete('/delete-flight', deleteFlight)

export default router
