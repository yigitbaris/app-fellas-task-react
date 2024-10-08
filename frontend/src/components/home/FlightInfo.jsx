import { TbPlaneDeparture } from 'react-icons/tb'
import { TbPlaneArrival } from 'react-icons/tb'
import { IoIosAirplane } from 'react-icons/io'
import Link from './Link'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const FlightInfo = ({ flightData }) => {
  const [flightInfo, setFlightInfo] = useState({
    flightNumber: flightData.flightNumber,
    flightName: flightData.flightName,
    flightArrival: flightData.flightArrival,
    flightRoute: flightData.flightRoute,
    flightDirection: flightData.flightDirection,
    flightId: flightData.flightId,
  })

  const navigate = useNavigate()

  const {
    flightNumber,
    flightName,
    flightArrival,
    flightRoute,
    flightDirection,
    flightId,
  } = flightData

  // Handle button click
  const handleFlightButtonClick = async () => {
    try {
      const response = await axios.post(
        '/local-api/flight/create-flight',
        flightInfo
      )
    } catch (error) {}
    toast.success('Flight booked successfully')
    navigate('/flight') // Use navigate instead of redirect
  }

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return dateString // Handle undefined or null dates
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'Europe/Amsterdam', // Replace with appropriate timezone
    })
  }

  // Calculate travel time function
  const calculateTravelTime = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const diffInMs = Math.abs(endDate - startDate) // Get the difference in milliseconds
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)) // Convert to hours
    const diffInMinutes = Math.floor(
      (diffInMs % (1000 * 60 * 60)) / (1000 * 60)
    ) // Get remaining minutes

    return `${diffInHours}h ${diffInMinutes}m`
  }

  // Generate departure time
  const getDepartureTime = (dateString) => {
    const arrivalDate = new Date(dateString)
    const earlierDate = new Date(arrivalDate)
    earlierDate.setHours(arrivalDate.getHours() - 2) // Subtract 2 hours
    earlierDate.setMinutes(arrivalDate.getMinutes() - 25) // Subtract 25 minutes
    return earlierDate
  }

  const flightDepartureFromArrival = getDepartureTime(flightArrival)

  return (
    <div className='w-full h-1/2'>
      <div className='bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'>
        <div className='font-semibold px-8 pt-4 text-lg mb-4'>
          Madrid - Amsterdam
        </div>
        <div className='flex items-center justify-between mb-5 px-8'>
          <div>
            <div className='text-sm text-slate-600'>
              <Link icon={TbPlaneDeparture} text={'Departure'} />
            </div>
            <div className='text-xl font-bold mt-1'>
              {formatDate(flightDepartureFromArrival)}
            </div>
            <div className='text-base text-slate-600 font-medium'>
              Airport: {flightRoute}
            </div>
          </div>
          <div className='border border-slate-400 w-[90px] h-[3px] rounded-2xl bg-slate-400'></div>
          <div className='flex flex-col items-center justify-center'>
            <img src='/alitalia.png' alt='logo' className='w-12' />
            <div className='mt-2'>
              <IoIosAirplane size={30} color='#4A1C97' />
            </div>
            <div className='text-base text-slate-600 font-medium mt-2'>
              {calculateTravelTime(flightDepartureFromArrival, flightArrival)}
              {/*dönen sonuçlara göre değişen yazılar*/}
              (Nonstop)
            </div>
          </div>
          <div className='border border-slate-400 w-[90px] h-[3px] rounded-2xl bg-slate-400'></div>
          <div>
            <div>
              <div className='text-sm text-slate-500'>
                <Link icon={TbPlaneArrival} text={'Arrival'} />
              </div>
            </div>
            <div className='text-xl font-bold mt-1'>
              {formatDate(flightArrival)}
            </div>
            <div className='text-base text-slate-600 font-medium'>
              Airport: AMS
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='ml-7'>
            <div className='text-xl font-bold text-[#4A1C97]'>Price: $200</div>
            <div className='text-sm text-slate-500 font-semibold'>
              Round Trip
            </div>
          </div>
          <div className='flex text-base font-bold items-center justify-center rounded-tl-xl rounded-br-xl text-white h-[70px] w-44 bg-[#4A1C97]'>
            <button onClick={handleFlightButtonClick}>Book Flight</button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-12 rounded-br-xl rounded-bl-xl bg-[#E6E0EB] w-1/6'>
        <button className='text-base underline text-purple-900 font-semibold'>
          Check the details
        </button>
      </div>
    </div>
  )
}
export default FlightInfo
