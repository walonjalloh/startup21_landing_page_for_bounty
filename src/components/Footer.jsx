
import { Link } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo2 from '../assets/logo2.png'

function Footer() {

    const date = new Date().getFullYear();

  return (
    <footer name='contact' className='bg-black'>
      
      <div className='flex flex-col gap-4 items-center mt-2 pt-2'>
      <div className='flex items-center justify-center'>
        <img src={logo2} alt="logo" className='h-[150px] '/>
      </div>
        <nav className='list-none flex flex-col md:flex-row md:gap-5 text-center text-white md:text-xl gap-4 font-bold '>
          <li><Link>About Us</Link></li>
          <li><Link>Pricing</Link></li>
          <li><Link>Contact Us</Link></li>
          <li><Link>Career</Link></li>
          <li><Link>Help</Link></li>
        </nav>
        <div className='flex gap-10 items-center h-10  text-white justify-center'>
          <FaFacebook/>
          <FaWhatsapp/>
          <FaTwitter/>
          <FaInstagram/>
        </div>
        <div>
          <p className='font-bold text-md text-white '>All right reserved Walon &copy;{date}</p>
        </div>
      </div>  
    </footer>
  )
}

export default Footer