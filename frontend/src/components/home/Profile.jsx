import pfp from '../../assets/avatar-1.jpg'
const Profile = () => {
  return (
    <div className='flex items-center gap-2'>
      <img src={pfp} alt='avatar' className='h-11  rounded-full' />
      <div className='text-slate-700 font-semibold'>Joane Smith</div>
    </div>
  )
}
export default Profile
