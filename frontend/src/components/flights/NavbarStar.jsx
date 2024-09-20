import { FaStar } from 'react-icons/fa'

const NavbarStar = () => {
  return (
    <div className='flex gap-5 items-center mr-20'>
      <div className='flex flex-col'>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
          <FaStar size={15} />
        </div>
        <div className='flex text-slate-200'>
          <FaStar size={15} />
          <FaStar size={15} />
          <FaStar size={15} />
        </div>
      </div>
      <div className='h-4 w-[1px] bg-slate-200 rounded-full'></div>
      <div className='flex flex-col'>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
        </div>
        <div className='flex text-slate-200'>
          <FaStar size={15} />
          <FaStar size={15} />
          <FaStar size={15} />
        </div>
      </div>
      <div className='h-4 w-[1px] bg-slate-200 rounded-full'></div>
      <div className='flex flex-col'>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
        </div>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} />
          <FaStar size={15} />
        </div>
      </div>
      <div className='h-4 w-[1px] bg-slate-200 rounded-full'></div>
      <div className='flex flex-col'>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
        </div>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
          <FaStar size={15} />
        </div>
      </div>
      <div className='h-4 w-[1px] bg-slate-200 rounded-full'></div>
      <div className='flex flex-col'>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
        </div>
        <div className='flex text-slate-200'>
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
          <FaStar size={15} color='black' />
        </div>
      </div>
    </div>
  )
}
export default NavbarStar
