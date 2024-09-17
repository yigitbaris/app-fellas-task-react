const Link = ({ icon: Icon, text, color }) => {
  return (
    <div className='flex items-center gap-2'>
      {/* Render the icon component */}
      <Icon style={{ transform: 'scaleX(-1)' }} color={color} size={20} />
      <span className='font-semibold'>{text}</span>
    </div>
  )
}
export default Link
