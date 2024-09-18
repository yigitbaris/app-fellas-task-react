import { TbPlaneDeparture } from 'react-icons/tb'
import { TbPlaneArrival } from 'react-icons/tb'
import { IoIosAirplane } from 'react-icons/io'
import Link from './Link'

const FlightInfo = () => {
  return (
    <div className='w-full h-1/2'>
      <div className=' bg-white   rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'>
        <div className='font-semibold px-8 pt-4 text-lg mb-4'>
          Milano - Madrid
        </div>
        <div className='flex items-center justify-between mb-5 px-8'>
          <div>
            <div className='text-sm text-slate-600'>
              <Link icon={TbPlaneDeparture} text={'Departure'} />
            </div>
            <div className='text-xl font-bold mt-1'>7:30 AM</div>
            <div className='text-base text-slate-600 font-medium'>
              Airport: MXP
            </div>
          </div>
          <div className='border border-slate-400 w-[90px] h-[3px] rounded-2xl bg-slate-400'></div>
          <div className='flex flex-col items-center justify-center'>
            <img src='/alitalia.png' alt='logo' className='w-12' />
            <div className='mt-2 '>
              <IoIosAirplane size={30} color='#4A1C97' />
            </div>
            <div className='text-base text-slate-600 font-medium mt-2'>
              2h 25m(Nonstop)
            </div>
          </div>
          <div className='border border-slate-400 w-[90px] h-[3px] rounded-2xl bg-slate-400'></div>
          <div>
            <div>
              <div className='text-sm text-slate-500'>
                <Link icon={TbPlaneArrival} text={'Arrival'} />
              </div>
            </div>
            <div className='text-xl font-bold mt-1'>9:55 AM</div>
            <div className='text-base text-slate-600 font-medium'>
              Airport: MAD
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='ml-7'>
            <div className='text-xl font-bold text-[#4A1C97] '>Price :$200</div>
            <div className='text-sm text-slate-500 font-semibold'>
              Round Trip
            </div>
          </div>
          <div className='flex text-base font-bold items-center justify-center rounded-tl-xl rounded-br-xl text-white h-[70px] w-44 bg-[#4A1C97]'>
            <button>Book Flight</button>
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
