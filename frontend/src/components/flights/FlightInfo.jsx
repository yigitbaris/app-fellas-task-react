const FlightInfo = () => {
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
            7:40 AM
            <div className='h-[2px] w-[18px] bg-black'></div>
            9:12 AM
          </div>
          <div className='flex w-[500px] items-center justify-between mt-6'>
            <div>
              <div className='ml-1 font-semibold text-lg'>Delta Airlines</div>
              <div className=''>
                <select className='rounded-xl text-blue-400   text-start w-32 text-base font-bold bg-transparent'>
                  <option value='deneme'>Flight Details</option>
                  <option value='deneme'>Highest Price</option>
                </select>
              </div>
            </div>
            <div>
              <div className='font-semibold text-lg'>Nonstop</div>
              <div className='font-semibold text-slate-500'>1h 32m</div>
            </div>
            <div>
              <div className='font-semibold text-lg'>SFO to LAX</div>
              <div className='font-semibold text-slate-500'>DL 1443</div>
            </div>
          </div>
        </div>
      </div>

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
          <div className='text-sm text-slate-500 font-semibold'>Delta One</div>
        </div>
        <div className='  border-2 rounded-lg  h-28 w-20'>
          <div className=' flex items-center justify-center h-full w-full  font-bold text-xl bg-[#f5f3f7] text-slate-300'>
            - - -
          </div>
        </div>
      </div>
    </div>
  )
}
export default FlightInfo
