import FlightInfoContainer from '../components/home/FlightInfoContainer'
import Navbar from '../components/home/Navbar'
import Search from '../components/home/Search'
import SideCartContainer from '../components/home/SideCartContainer'
import SortList from '../components/home/SortList'

const HomeLayout = () => {
  return (
    <div className=' h-full bg-[#F5F3F7]'>
      <Navbar />
      <div className='flex  justify-between'>
        <div>
          <Search />
          <div className='flex  items-center justify-between text-3xl'>
            <div>
              <FlightInfoContainer />
            </div>
            <div>
              <SortList />
            </div>
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
