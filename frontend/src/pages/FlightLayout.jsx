import { useEffect, useState } from 'react'
import FlightInfo from '../components/flights/FlightInfo'
import NavbarStar from '../components/flights/NavbarStar'
import NavbarTabs from '../components/flights/NavbarTabs'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import axios from 'axios'

const FlightLayout = () => {
  const [flightList, setFlightList] = useState([])

  useEffect(() => {
    const getAllFlights = async () => {
      try {
        const responseData = await axios.get(
          '/local-api/flight/get-all-flights'
        )
        setFlightList(responseData.data.flights)
      } catch (error) {
        console.log(error)
      }
    }
    getAllFlights()
  }, [])

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

  return (
    //navbar part
    <div className='flex flex-col min-h-screen bg-[#f5f3f7] '>
      <div className='h-20 bg-white flex items-center justify-between shadow-md'>
        <div className='flex gap-6 ml-16'>
          <NavbarTabs text={'Times'} />
          <NavbarTabs text={'Stops'} />
          <NavbarTabs text={'Airlines'} />
          <NavbarTabs text={'Airports'} />
          <NavbarTabs text={'Amenities'} />
        </div>
        <div>
          <NavbarStar />
        </div>
      </div>
      {
        // flight content
      }
      <div className=' mx-24 mt-10'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center '>
            <div className='text-xl font-bold text-slate-600'>Sort by: </div>
            <div className=' '>
              <select className='rounded-xl pl-4  pr-4  w-54 text-xl font-bold text-slate-800  bg-transparent'>
                <option value='deneme'>Recommended</option>
                <option value='deneme'>Highest Price</option>
              </select>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <div className='text-slate-200'>
              <IoMdInformationCircleOutline size={25} color={'#3a8ddb'} />
            </div>
            <div className='text-xl font-semibold '>Avg Fare:</div>
            <div className='text-xl font-bold'>$225</div>
          </div>
        </div>

        <div className='flex flex-col mb-5 gap-4 overflow-auto'>
          {flightList.map((flight, i) => {
            return (
              <FlightInfo
                key={i}
                flight={flight}
                formatDate={formatDate}
                calculateTravelTime={calculateTravelTime}
                getDepartureTime={getDepartureTime}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default FlightLayout
