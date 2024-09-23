import Logo from './Logo'
import Profile from './Profile'
import { ImPriceTag } from 'react-icons/im'
import { FaGlobeAmericas } from 'react-icons/fa'
import Link from './Link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-3 '>
      <div>
        <Logo />
      </div>
      <div className='md:flex md:items-center gap-6 hidden  '>
        <Link text={'Deals'} icon={ImPriceTag} flip={'yes'} color={'#4A1C97'} />
        <Link text={'Discover'} icon={FaGlobeAmericas} color={'#4A1C97'} />
        <Profile />
      </div>
    </div>
  )
}
export default Navbar
