import testimonial from "../utils/testimonial"
import { v4 as uuidv4 } from 'uuid';

const table1 = testimonial.slice(0,3);
const table2 = testimonial.slice(3,6);
const table3 = testimonial.slice(6,9);

function Testimonials() {
  return (
    <section className="py-24 mx-2 flex flex-col justify-center items-center">
      <div>
        <div>
          <div className="text-center font-extrabold text-3xl py-4 ">Testimonials</div>
          <h1 className="text-center font-medium text-2xl tracking-tight">What people say about us </h1>
        </div>
          <div className="flex justify-center  gap-6 lg:gap-10">
             <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] "> 
              {table1.map((table)=> (
                <div className="py-5 flex flex-col border border-white justify-center items-center rounded-3xl shadow-[0_7px_14px_#EAEAEA]  max-w-xs" key={uuidv4}>
                  <p className="text-center font-medium tracking-tight">{table.text}</p>
                  <div className="flex flex-row justify-start items-start mx-2 mt-4">
                    <img src={table.img} alt="img" className="h-10 mx-2"/>
                    <div>
                      <h1 className="font-bold text-md text-center">{table.name}</h1>
                      <p className="font-medium text-md text-center">{table.username}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:flex flex-col gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] "> 
              {table2.map((table)=> (
                <div className="py-5 flex flex-col border border-white justify-center items-center rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs" key={uuidv4}>
                  <p className="text-center font-medium tracking-tight">{table.text}</p>
                  <div className="flex flex-row justify-start items-start mx-2 mt-4">
                    <img src={table.img} alt="img" className="h-10 mx-2"/>
                    <div>
                      <h1 className="font-bold text-md text-center">{table.name}</h1>
                      <p className="font-medium text-md text-center">{table.username}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] "> 
              {table3.map((table)=> (
                <div className="py-5 flex flex-col border border-white justify-center items-center rounded-3xl shadow-[0_7px_14px_#EAEAEA]  max-w-xs" key={uuidv4}>
                  <p className="text-center font-medium tracking-tight">{table.text}</p>
                  <div className="flex flex-row justify-start items-start mx-2 mt-4">
                    <img src={table.img} alt="img" className="h-10 mx-2"/>
                    <div>
                      <h1 className="font-bold text-md text-center">{table.name}</h1>
                      <p className="font-medium text-md text-center">{table.username}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>  
      </div>
    </section>
  )
}

export default Testimonials