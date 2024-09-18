const SideCart = ({ image, icon: Icon, text }) => {
  return (
    <div
      className='relative flex items-end h-[260px] w-[260px] mb-4 rounded-3xl bg-center bg-cover'
      style={{ backgroundImage: `url(${image})` }} // Set the background image
    >
      {/* Dark overlay behind the content */}
      <div className='absolute inset-0 bg-black opacity-25 rounded-3xl z-0'></div>

      {/* Content above the overlay */}
      <div className='relative mb-4 ml-4 z-10'>
        <Icon color={'white'} size={30} />
        <div className='text-white font-semibold text-xl'>{text}</div>
      </div>
    </div>
  )
}

export default SideCart
