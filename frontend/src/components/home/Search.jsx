import { FaPlane } from 'react-icons/fa'
import SearchParam from './SearchParam'
import axios from 'axios'
import { useState } from 'react'

const Search = () => {
  //show flight a tıklanıldığında api den 20 adet flight listeler

  const handleShowFlight = async () => {
    try {
      const response = await axios.get('/api/public-flights/flights', {
        headers: {
          ResourceVersion: 'v4',
          app_id: import.meta.env.VITE_APP_ID,
          app_key: import.meta.env.VITE_APP_KEY,
          Accept: 'application/json',
        },
      })
      // Handle the response
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error('Error fetching flight data:', error.response?.data)
    }
  }

  return (
    <div className=' w-full h-1/4 ml-7 rounded-2xl bg-white'>
      <div className='flex justify-between pt-2'>
        <div className='flex mt-4 ml-5 gap-2 items-center '>
          <FaPlane size={20} />
          <span className='font-bold'>BOOK YOUR FLIGHT</span>
        </div>
        <div className='flex mt-4 mr-3'>
          <div className='flex bg-[#4A1C97] text-slate-50 font-semibold text-sm h-8 p-4 rounded-tl-2xl rounded-bl-2xl items-center'>
            <button>Round trip</button>
          </div>
          <div className='flex bg-purple-200 h-8 p-4 text-sm font-semibold rounded-tr-2xl rounded-br-2xl items-center'>
            <button>One way</button>
          </div>
        </div>
      </div>
      <div className='flex mt-8'>
        <SearchParam />
      </div>
      <div className='h-[40px] w-28 bg-[#4A1C97] text-white font-semibold rounded-lg ml-5 mt-5 items-center justify-center flex'>
        <button
          onClick={() => {
            handleShowFlight()
          }}
        >
          Show flights
        </button>
      </div>
    </div>
  )
}

export default Search
