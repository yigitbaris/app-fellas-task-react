import SideCart from './SideCart'
import { FaUmbrellaBeach } from 'react-icons/fa6'
import { FaHotel } from 'react-icons/fa6'
import { FaCar } from 'react-icons/fa6'

const SideCartContainer = () => {
  return (
    <div className='mr-5'>
      <SideCart image='/car.jpg' icon={FaCar} text='CAR RENTALS' />
      <SideCart image='/hotel.jpeg' icon={FaHotel} text='HOTELS' />
      <SideCart
        image='/travel.jpg'
        icon={FaUmbrellaBeach}
        text='TRAVEL PACKAGES'
      />
    </div>
  )
}
export default SideCartContainer
