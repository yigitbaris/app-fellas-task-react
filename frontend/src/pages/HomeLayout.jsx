import { useEffect, useState } from 'react'
import FlightInfoContainer from '../components/home/FlightInfoContainer'
import Navbar from '../components/home/Navbar'
import Search from '../components/home/Search'
import SideCartContainer from '../components/home/SideCartContainer'
import SortList from '../components/home/SortList'
import axios from 'axios'

const HomeLayout = () => {
  const [flightData, setFlightData] = useState([])
  const [filteredFlightData, setFilteredFlightData] = useState([])

  const [sortParams, setSortParams] = useState(null)

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
        setFilteredFlightData(filteredFlights) // Set initial data
      } catch (error) {
        console.error('Error fetching flight data:', error.response?.data)
      }
    }

    apiCall()
  }, []) // Empty dependency array to run the effect only once

  useEffect(() => {
    if (!sortParams) return

    // Parse time from flightArrival and filter based on sortParams
    const filterFlights = () => {
      const filtered = flightData.filter((flight) => {
        const flightTime = new Date(flight.flightArrival).getHours() // Extract hour from ISO date

        if (sortParams === 1) {
          // 7:00 PM - 1:59 AM
          return flightTime >= 19 || flightTime <= 1
        } else if (sortParams === 2) {
          // 2:00 AM - 6:59 PM
          return flightTime >= 2 && flightTime <= 18
        }
        return true
      })

      setFilteredFlightData(filtered)
    }

    filterFlights()
  }, [sortParams, flightData]) // Runs when sortParams or flightData changes

  return (
    <div className=' h-full w-full bg-[#F5F3F7]'>
      <Navbar />
      <div className='flex  justify-between'>
        <div>
          <Search />
          <div className='flex  items-center justify-between text-3xl'>
            <div className='flex'>
              {/* Conditionally render the message if no flights are available */}
              {filteredFlightData.length === 0 ? (
                <div className=' font-semibold ml-16 '>
                  No flights available for the selected time range.
                </div>
              ) : (
                // Pass filteredFlightData instead of flightData to display the filtered results
                <FlightInfoContainer flightData={filteredFlightData} />
              )}
            </div>
            <div>
              <SortList setSortParams={setSortParams} />
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
