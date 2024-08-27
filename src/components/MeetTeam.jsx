
import team from '../assets/team.jpg'
import { motion } from "framer-motion"


function MeetTeam() {
  return (
    <section className="py-24">
        <div>
            <h1 className="text-center font-extrabold text-3xl py-10 bg-gradient-to-r from-stone-600 via-red-600 to-green-300 bg-clip-text text-transparent">Meet the team</h1>
        </div>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <motion.div
        animate = {{
            translateX: '-50%',
        }}
        transition={{
            duration: 10,
            repeat:Infinity,
            ease: 'linear',
            repeatType: 'loop',
        }}
        className="flex flex-none gap-4 pr-4">
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Mohamed Lamin Walon-Jalloh</h2>
                    <p className="font-medium text-md my-2">CEO and Founder</p>
                    <p className="w-[300px] text-center">He is a multi-talented person,that believes that education is something every should have access to</p>
                </div>   
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Alpha Jalloh</h2>
                    <p className="font-medium text-md my-2">CFO</p>
                    <p className="w-[300px] text-center">Keep the finances of Learn X in check and also an educationist</p>
                </div> 
                 <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">John Doe</h2>
                    <p className="font-medium text-md my-2">Education Analyst</p>
                    <p className="w-[300px] text-center">Responsible for curating and making sure Learn X give the best education possible at low cost</p>
                </div> 
                 <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Coker Mitch</h2>
                    <p className="font-medium text-md  my-2">Head Of BackEnd Engineering</p>
                    <p className="w-[300px] text-center">Responsible for making sure Learn X is alway online and ready to deliver to student at any time and anywhere</p>
                </div> 
                 <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Jane Doe</h2>
                    <p className="font-medium text-md my-4 ">PRO</p>
                    <p className="w-[300px] text-center">She is the one that keep us in check so we do not say things that we wont deliver on.</p>
                </div>  
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4]  my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2"  />
                    <h2 className="font-bold text-black/70 my-2">Harriet John</h2>
                    <p className="font-medium text-md my-4 ">FrontEnd Lead Engineer</p>
                    <p className="w-[300px] text-center">Responsible for making Learn X homepage and assets look catchy sexy and elegant</p>
                </div>  
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4  ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Susan John</h2>
                    <p className="font-medium text-md my-4 ">Lead Engineer</p>
                    <p className="w-[300px] text-center">Keeping engineers in check and make sure the operation of Learn X goes well</p>
                </div>  
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Mohamed Lamin Walon-Jalloh</h2>
                    <p className="font-medium text-md my-2">CEO and Founder</p>
                    <p className="w-[300px] text-center">He is a multi-talented person,that believes that education is something every should have access to</p>
                </div>   
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Alpha Jalloh</h2>
                    <p className="font-medium text-md my-2">CFO</p>
                    <p className="w-[300px] text-center">Keep the finances of Learn X in check and also an educationist</p>
                </div> 
                 <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">John Doe</h2>
                    <p className="font-medium text-md my-2">Education Analyst</p>
                    <p className="w-[300px] text-center">Responsible for curating and making sure Learn X give the best education possible at low cost</p>
                </div> 
                 <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Coker Mitch</h2>
                    <p className="font-medium text-md  my-2">Head Of BackEnd Engineering</p>
                    <p className="w-[300px] text-center">Responsible for making sure Learn X is alway online and ready to deliver to student at any time and anywhere</p>
                </div> 
                 <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Jane Doe</h2>
                    <p className="font-medium text-md my-4 ">PRO</p>
                    <p className="w-[300px] text-center">She is the one that keep us in check so we do not say things that we wont deliver on.</p>
                </div>  
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4]  my-4 ">
                    <img src={team} alt="img" className="h-10 w-10 my-2"  />
                    <h2 className="font-bold text-black/70 my-2">Harriet John</h2>
                    <p className="font-medium text-md my-4 ">FrontEnd Lead Engineer</p>
                    <p className="w-[300px] text-center">Responsible for making Learn X homepage and assets look catchy sexy and elegant</p>
                </div>  
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4  ">
                    <img src={team} alt="img" className="h-10 w-10 my-2" />
                    <h2 className="font-bold text-black/70 my-2">Susan John</h2>
                    <p className="font-medium text-md my-4 ">Lead Engineer</p>
                    <p className="w-[300px] text-center">Keeping engineers in check and make sure the operation of Learn X goes well</p>
                </div>  
        </motion.div>
        </div>
      
    </section>
  )
}

export default MeetTeam


