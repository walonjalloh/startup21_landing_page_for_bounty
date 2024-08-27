import { FaArrowRightLong } from "react-icons/fa6"
import PropTypes from 'prop-types'
import { Link } from "react-scroll"

function CallToAction({ btn }) {
  return (
    <section className="py-24 ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl text-center mx-2 my-4 tracking-tight leading-none">Sign Up For Free Today</h1>
                <p className="font-medium text-lg text-center mx-2">Boost your educational portfolio with Learn X today and get the knowledge your need to 
                    make more money
                </p>
                <div className="flex gap-10 py-5">
                    <button className="border py-2 px-4 rounded-xl bg-black text-white text-md"><Link to="pricing" smooth={true} offset={250} duration={500}>Get started for free</Link></button>
                    <button className="flex justify-center items-center gap-2 border py-2 px-4 rounded-xl bg-black text-white text-md" onClick={() => (btn())}>Contact us <span><FaArrowRightLong/></span></button>
                </div>
            </div>
    </section>
  )
}

export default CallToAction


CallToAction.propTypes = {
  btn:  PropTypes.func
}