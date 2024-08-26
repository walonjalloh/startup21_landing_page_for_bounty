import  Button  from './Button'
import { logo } from '../assets/asset'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
 

function Navbar() {

  const [isopen, setIsOpen] = useState(false)

  function handleClick(){
    setIsOpen(!isopen)
  }

  return (
    <header className='md:h-[80px] lg:h-[160px] bg-blue-500 sticky top-0 z-50'> 
      <nav>
        <div className='flex justify-between items-center mx-4  '>
          <div><img src={logo} alt="logo" className='h-[65px] w-[100px] lg:h-[160px] lg:w-[220px]'/></div>
          <div className='hidden md:flex gap-4 text-2xl cursor-pointer lg:gap-5 lg:text-4xl'>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <Button name='Sign Up' classname='text-white hidden md:flex bg-black rounded-md md:text-xl lg:text-3xl px-4 py-2'/>
          </div>
          <div className='md:hidden'>
            <FaBars onClick={()=> handleClick()}/>
          </div>
        </div>
      </nav>
      {isopen && (
        <div className='flex flex-col text-xl text-center md:hidden items-center gap-3 my-2 cursor-pointer'>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        <Button name='Sign Up' classname='text-white t flex bg-black  rounded-md  px-6 py-2 my-1'/>
      </div>
      )}
      
    </header>
  )
}

export default Navbar