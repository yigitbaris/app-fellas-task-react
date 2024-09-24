import { useState } from 'react'

const SortList = ({ setSortParams }) => {
  const [selectedArrivalTime, setSelectedArrivalTime] = useState('')

  const handleArrivalTimeChange = (event) => {
    console.log('sort changed')
    const value = event.target.value
    setSelectedArrivalTime(value) // Update selected state

    if (value === 'sevenToOne') {
      setSortParams(1) // Set sortParams to 1 for '7:00 PM - 1:59 AM'
    } else if (value === 'twoToSix') {
      setSortParams(2) // Set sortParams to 2 for '2:00 AM - 6:59 PM'
    }
  }
  return (
    <div className=' flex flex-col gap-4 overflow-y-auto overflow-x-hidden  h-[600px] w-96 p-2 px-10'>
      <div className='mt-5'>
        <div className='text-xl font-bold '>Sort by:</div>
        <div className='w-[600px] '>
          <select className='rounded-xl pl-4 mt-3 pr-14 h-10 w-72 text-lg font-semibold text-start'>
            <option value='deneme'>Lowest Price</option>
            <option value='deneme'>Highest Price</option>
          </select>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold mb-3'>Arrival Time</div>
        <label className='text-lg font-semibold'>
          <input
            type='radio'
            value='sevenToOne'
            name='arrivalTime'
            className='mr-2'
            checked={selectedArrivalTime === 'sevenToOne'} // Bind state
            onChange={handleArrivalTimeChange}
          />
          7:00 PM - 1:59 AM
        </label>
        <label className='text-lg font-semibold'>
          <input
            type='radio'
            value='twoToSix'
            name='arrivalTime'
            className='mr-2'
            checked={selectedArrivalTime === 'twoToSix'} // Bind state
            onChange={handleArrivalTimeChange}
          />
          2:00 AM - 6:59 PM
        </label>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold mb-3'>Stops</div>
        <label className='text-lg font-semibold'>
          <div className='flex justify-between mr-3'>
            <div>
              <input type='radio' value='fiveToTwelve' className='mr-2' />
              Nonstop
            </div>
            <div>$230</div>
          </div>
        </label>
        <label className='text-lg font-semibold'>
          <div className='flex justify-between mr-3'>
            <div>
              <input type='radio' value='fiveToTwelve' className='mr-2' />1 Stop
            </div>
            <div>$230</div>
          </div>
        </label>
        <label className='text-lg font-semibold'>
          <div className='flex justify-between mr-3'>
            <div>
              <input type='radio' value='fiveToTwelve' className='mr-2' />
              2+ Stops
            </div>
            <div>$230</div>
          </div>
        </label>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold mb-3'>Stops</div>
        <label className='text-lg font-semibold'>
          <div className='flex justify-between mr-3'>
            <div>
              <input type='radio' value='fiveToTwelve' className='mr-2' />
              Alitalia
            </div>
            <div>$230</div>
          </div>
        </label>
        <label className='text-lg font-semibold'>
          <div className='flex justify-between mr-3'>
            <div>
              <input type='radio' value='fiveToTwelve' className='mr-2' />
              Lufthansa
            </div>
            <div>$230</div>
          </div>
        </label>
        <label className='text-lg font-semibold'>
          <div className='flex justify-between mr-3'>
            <div>
              <input type='radio' value='fiveToTwelve' className='mr-2' />
              2+ Stops
            </div>
            <div>$230</div>
          </div>
        </label>
      </div>
    </div>
  )
}
export default SortList
