import  Button  from './Button'
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-scroll'
 

function Navbar() {

  const [isopen, setIsOpen] = useState(false)

  function handleClick(){
    setIsOpen(!isopen)
  }

  

  return (
    <header className='md:h-[65px] lg:h-[70px] bg-blue-200 sticky top-0 z-50'> 
      <nav>
        <div className='flex justify-between items-center mx-4  '>
          <div><img src={logo} alt="logo" className='h-[65px] w-[100px] lg:h-[70px] lg:w-[100px]'/></div>
          <div className='hidden md:flex gap-4 text-1xl cursor-pointer lg:gap-10 lg:text-3xl font-bold list-none'>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about_us' smooth={true} offset={-240} duration={500} >About Us</Link></li>
            <li><Link to='services' smooth={true} offset={240} duration={500}>Services</Link></li>
            <li><Link to='contact' smooth={true} offset={-150} duration={500}>Contact Us</Link></li>
          </div>
          <div>
            <Button name='Sign Up' classname='text-white hidden md:flex bg-black rounded-md md:text-xl lg:text-2xl px-4 py-2'/>
          </div>
          <div className='md:hidden'>
            <FaBars onClick={()=> handleClick()}/>
          </div>
        </div>
      </nav>
      {isopen && (
        <div className='flex flex-col text-xl text-center font-bold md:hidden items-center gap-3 my-2 cursor-pointer list-none'>
          <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='about_us' smooth={true} offset={-240} duration={500}>About Us</Link></li>
          <li><Link to='services' smooth={true} offset={240} duration={500}>Services</Link></li>
          <li><Link to='contact' smooth={true} offset={150} duration={500}>Contact Us</Link></li>
        <Button name='Sign Up' classname='text-white flex bg-black  rounded-md  px-6 py-2 my-1'/>
      </div>
      )}
      
    </header>
  )
}

export default Navbar