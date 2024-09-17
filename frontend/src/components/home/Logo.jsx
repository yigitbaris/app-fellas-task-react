import logo from '../../assets/plane.png'
const Logo = () => {
  return (
    <div className='flex items-center gap-1'>
      <img src={logo} alt='plane' className='h-14' />
      <div className='font-bold text-lg'>PLANE SCAPE</div>
    </div>
  )
}
export default Logo
