import Navbar from '../components/home/Navbar'
import Search from '../components/home/Search'
import SideCartContainer from '../components/home/SideCartContainer'

const HomeLayout = () => {
  return (
    <div className=' min-h-screen bg-[#F5F3F7]'>
      <Navbar />
      <div className='flex  justify-between'>
        <div>
          <Search />
          <div className='flex items-center justify-between text-3xl'>
            <div>flight list</div>
            <div>sort list</div>
          </div>
        </div>

        <div>
          <SideCartContainer />
        </div>
      </div>
    </div>
  )
}
export default HomeLayout
