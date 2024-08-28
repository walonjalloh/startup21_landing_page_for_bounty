import PropTypes from 'prop-types'
import { FaPhone, FaAt } from 'react-icons/fa6'

function Contact({ open }) {



  return (
    <section name='contact' className="py-24"> 
        {open && (
             <div className="flex flex-col justify-center items-center ">
             <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">Contact Us</h2>
             <form className="flex flex-col justify-start items-center my-10">
                 <label className="text-2xl font-md">Name</label>
                 <input  className='w-[300px] md:w-[400px]  my-2 border border-black rounded-md' type="text" name="name" placeholder="Name"/>
                 <label className="text-2xl font-md">Email</label>
                 <input className="border border-black rounded-md w-[300px] md:w-[400px] my-2" type="email" name='email' placeholder="Email"/>
                 <button className="border border-black py-2 px-4 rounded-md bg-black text-white">Submit</button>
             </form>
             <div>
              <div className='flex  flex-col py-10'>
                <h1 className='text-2xl font-bold tracking-tight py-4'>Our Contact Info</h1>
                <div className='flex flex-row gap-4 items-center py-4'>
                  <FaPhone/>
                  <p className='text-md font-bold'>+12345-556-778-65</p>
                </div> 
                <div className='flex gap-4 items-center py-4'>
                  <FaAt/> 
                  <p className='text-md font-bold'>learn_x@gamil.com</p>
                </div>  
              </div>
              <div></div>
             </div>
         </div>
        )}
       
    </section>
  )
}

export default Contact

Contact.propTypes = {
    open: PropTypes.object
}