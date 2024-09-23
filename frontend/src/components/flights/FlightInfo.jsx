import axios from 'axios'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const FlightInfo = ({
  flight,
  formatDate,
  calculateTravelTime,
  getDepartureTime,
}) => {
  const navigate = useNavigate()

  const {
    flightArrival,
    flightDirection,
    flightId,
    flightName,
    flightNumber,
    flightRoute,
    _id,
  } = flight
  console.log(flight)

  const flightDepartureFromArrival = getDepartureTime(flightArrival)

  //ikona basılınca silinmesi için çağrılan api ve fonksiyon
  const handleDeleteButton = async (_id) => {
    try {
      const response = await axios.delete('/local-api/flight/delete-flight', {
        data: { _id }, // Send flightId in the request body
      })
      toast.success('Flight deleted successfully')
      navigate(0) //sayfayı yenile
    } catch (error) {
      console.error('Failed to delete flight', error)
      toast.error('Failed to delete flight')
    }
  }

  //durak sayılarını göstermek için fonksiyon
  const routeNumber = () => {
    if (flightRoute.length == 1) {
      return '1 Stop'
    } else if (flightRoute.length == 2) {
      return '2+ Stops'
    } else return 'Nonstop'
  }

  //flightName e harflerinden sonra boşluk koyan fonksiyon
  const formatFlightName = (flightName) => {
    return flightName.replace(/([A-Za-z]+)([0-9]+)/, '$1 $2')
  }
  return (
    <div className='flex flex-row items-center justify-between px-12  bg-white h-48 rounded-md shadow-md'>
      <div className='flex  gap-5'>
        <div className='pb-24'>
          <img
            src='/delta.png'
            alt='deneme'
            className='h-10 object-scale-down rounded-full border '
          />
        </div>
        <div className='flex flex-col'>
          <div className='text-2xl flex gap-4 items-center'>
            {formatDate(flightDepartureFromArrival)}
            <div className='h-[2px] w-[18px] bg-black'></div>
            {formatDate(flightArrival)}
          </div>
          <div className='flex w-[500px] items-center justify-between mt-6'>
            <div>
              <div className='ml-1 font-semibold text-lg'>Delta Airlines</div>
              <div className=''>
                <select className='rounded-xl text-blue-400   text-start w-32 text-base font-bold bg-transparent'>
                  <option value='deneme'>Flight Details</option>
                </select>
              </div>
            </div>
            <div>
              <div className='font-semibold text-lg'>
                {routeNumber()}
                {/* Handle singular/plural */}
              </div>
              <div className='font-semibold text-slate-500'>
                {calculateTravelTime(flightDepartureFromArrival, flightArrival)}
              </div>
            </div>
            <div>
              <div className='font-semibold text-lg'>
                {flightRoute[0]} to AMS
              </div>
              <div className='font-semibold text-slate-500'>
                {formatFlightName(flightName)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex  flex-row items-center gap-4 '>
          <div className=' flex flex-col justify-between pt-3 pb-7  border-2 rounded-lg items-center h-28 w-20'>
            <div className='font-bold text-xl'>$154</div>
            <div className='text-sm text-slate-500 font-semibold'>Main</div>
          </div>
          <div className=' flex flex-col justify-between pt-3 pb-7  border-2 rounded-lg items-center h-28 w-20'>
            <div className='font-bold text-xl'>$204</div>
            <div className='text-sm text-slate-500 font-semibold'>Comfort+</div>
          </div>
          <div className='  border-2 rounded-lg  h-28 w-20'>
            <div className=' flex items-center justify-center h-full w-full  font-bold text-xl bg-[#f5f3f7] text-slate-300'>
              - - -
            </div>
          </div>
          <div className=' flex flex-col justify-between pt-3 pb-7  border-2 rounded-lg items-center h-28 w-20'>
            <div className='font-bold text-xl'>$386</div>
            <div className='text-sm text-slate-500 font-semibold'>
              Delta One
            </div>
          </div>
          <div className='  border-2 rounded-lg  h-28 w-20'>
            <div className=' flex items-center justify-center h-full w-full  font-bold text-xl bg-[#f5f3f7] text-slate-300'>
              - - -
            </div>
          </div>
        </div>
        <div className=' pl-5  w-2  '>
          <button onClick={() => handleDeleteButton(_id)}>
            <FaRegTrashAlt size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default FlightInfo
