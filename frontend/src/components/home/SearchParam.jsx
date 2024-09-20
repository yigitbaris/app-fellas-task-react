import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'

const SearchParam = () => {
  return (
    <div className='flex'>
      <div className='flex ml-5 '>
        <div className='flex items-center justify-between border-2 rounded-tl-3xl rounded-bl-3xl border-zinc-300 h-[38px] w-[355px] mr-1'>
          <FaPlaneDeparture size={20} className='ml-2' />
        </div>
        <div className='flex items-center justify-between border-2 rounded-tr-3xl rounded-br-3xl border-zinc-300 h-[38px] w-[355px]'>
          <FaPlaneArrival size={20} className='ml-2' />
        </div>
      </div>
      <div className='flex ml-5 '>
        <div className='flex items-center justify-between border-2 rounded-tl-3xl rounded-bl-3xl border-zinc-300 h-[38px] w-[355px] mr-1'>
          <MdDateRange size={20} className='ml-2' />
        </div>
        <div className='flex items-center justify-between border-2 rounded-tr-3xl rounded-br-3xl border-zinc-300 h-[38px] w-[355px]'>
          <MdDateRange size={20} className='ml-2' />
        </div>
      </div>
    </div>
  )
}

export default SearchParam
