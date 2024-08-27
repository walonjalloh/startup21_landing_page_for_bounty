import pricingTiers from "../utils/data"
import { FaCheck } from "react-icons/fa"
import { twMerge } from "tailwind-merge"
import { v4 as uuidv4 } from 'uuid'

function Services() {
  return (
    <section className="py-24">
        <div className="flex flex-col items-center mx-2">
            <h2 className="text-2xl font-bold text-center">Pricing</h2>
            <p className="mt-6 font-sm mx-auto max-w-[540px] text-xl text-center tracking-tight">Free forever. 
                Upgrade for better learning and
                 certificate and good mentorship program</p>
            <div className="flex flex-col gap-6 items-center mt-12 lg:flex-row lg:items-end  lg:justify-center ">
                {pricingTiers.map((card) => (
                    <div className= {twMerge("p-10 border border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs", card.inverse && 'bg-black border-black text-white')} key={card.key}>
                        <div className="flex justify-between">
                        <h3 className={twMerge("text-lg font-bold text-black/50",card.inverse && 'text-white/60' )}>{card.title}</h3>
                        {card.popular && (
                            <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                            <span className="bg-[linear-gradient(to_right,red,orange,yellow,green,blue,indigo,violet,red)] text-transparent bg-clip-text font-medium">Popular</span>
                            </div>
                        )}
                        </div>
                        <div className="flex items-baseline gap-1 mt-[30px]">
                          <span className="text-4xl font-bold tracking-tighter leading-none">${card.monthlyPrice}</span>
                          <span className="tracking-tight font-bold text-black/50">/month</span>  
                        </div>
                        <button className={twMerge("border border-black bg-black text-white rounded-xl px-2 py-2 w-full mt-[30px]",card.inverse && 'bg-white text-black')}>{card.buttonText}</button>
                        <ul className="flex flex-col gap-5 mt-8">
                            {card.features.map((feature) => (
                                <li key={uuidv4()} className="text-sm flex items-center gap-4"><FaCheck/><span>{feature}</span></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>     
        </div>

    </section>
  )
}

export default Services