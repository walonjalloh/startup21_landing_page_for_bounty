import { Button } from './component'
import { logo } from '../assets/asset'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
 

function Navbar() {

  const [isopen, setIsOpen] = useState(false)

  function handleClick(){
    setIsOpen(!isopen)
  }

  return (
    <header>
      <nav>
        <div className='flex justify-between items-center mx-4 my-4 '>
          <div><img src={logo} alt="logo" className='h-[65px] w-[100px] lg:h-[160px] lg:w-[220px]'/></div>
          <div className='hidden md:flex gap-4 text-2xl cursor-pointer lg:text-4xl'>
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
        <div className='sticky top-0 flex flex-col text-center items-center gap-2 cursor-pointer bg-transparent'>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        <Button name='Sign Up' classname='text-white t flex bg-black rounded-md  px-6 py-2'/>
      </div>
      )}
      
    </header>
  )
}

export default Navbar