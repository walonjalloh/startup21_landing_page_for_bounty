import { logo } from "../assets/asset";
import Button from "./Button";



function Navbar() {
  return (
        <header className="mx-4 my-4 sticky top-0">
        <nav>
          <div className="flex justify-between items-center">
            <div><img src={logo} alt="logo" className="h-[65px] w-[100px] bg-transparent" /></div>
            <div className="hidden md:flex justify-center gap-3 text-3xl font-serif cursor-pointer list-none">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </div>
            <div>
              <Button classname='bg-black text-white px-4 py-2 rounded-xl' name='Sign Up'/>
            </div>
          </div>
        </nav>
      </header>
  
  )
}

export default Navbar;

