import { useEffect, useState } from 'react'
import FlightInfoContainer from '../components/home/FlightInfoContainer'
import Navbar from '../components/home/Navbar'
import Search from '../components/home/Search'
import SideCartContainer from '../components/home/SideCartContainer'
import SortList from '../components/home/SortList'
import axios from 'axios'

const HomeLayout = () => {
  const [flightData, setFlightData] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axios.get('/api/public-flights/flights', {
          params: { page: 1 },
          headers: {
            ResourceVersion: 'v4',
            app_id: import.meta.env.VITE_APP_ID,
            app_key: import.meta.env.VITE_APP_KEY,
            Accept: 'application/json',
          },
        })

        // Process flight data once fetched
        const filteredFlights = response.data.flights.map((flight) => ({
          flightId: flight.id,
          flightArrival: flight.scheduleDateTime,
          flightNumber: flight.flightNumber,
          flightName: flight.flightName,
          flightRoute: flight.route?.destinations || [], // Safe access to flight.route.destinations
          flightDirection: flight?.flightDirection, // Provide a fallback value for flightDirection
        }))

        setFlightData(filteredFlights) // Update state after filtering the data
      } catch (error) {
        console.error('Error fetching flight data:', error.response?.data)
      }
    }

    apiCall()
  }, []) // Empty dependency array to run the effect only once

  return (
    <div className=' h-full w-full bg-[#F5F3F7]'>
      <Navbar />
      <div className='flex  justify-between'>
        <div>
          <Search />
          <div className='flex  items-center justify-between text-3xl'>
            <div>
              {/*props passing the child*/}
              <FlightInfoContainer flightData={flightData} />
            </div>
            <div>
              <SortList />
            </div>
          </div>
        </div>

        <div>
          <SideCartContainer />
        </div>
      </div>
    </div>
  )
}
export default HomeLayout
