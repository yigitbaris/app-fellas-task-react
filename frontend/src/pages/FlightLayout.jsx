import FlightInfo from '../components/flights/FlightInfo'
import NavbarStar from '../components/flights/NavbarStar'
import NavbarTabs from '../components/flights/NavbarTabs'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const FlightLayout = () => {
  return (
    //navbar part
    <div className='flex flex-col h-full bg-[#f5f3f7] '>
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

        <div className='flex flex-col  gap-4 overflow-auto'>
          <FlightInfo />
          <FlightInfo />
          <FlightInfo />
          <FlightInfo />
          <FlightInfo />
          <FlightInfo />
        </div>
      </div>
    </div>
  )
}
export default FlightLayout
