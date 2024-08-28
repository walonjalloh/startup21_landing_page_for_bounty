import AboutUs from "../components/AboutUs"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Services from "../components/Services"
import MeetTeam from "../components/MeetTeam"
import CallToAction from "../components/CallToAction"
import Contact from "../components/Contact"
import { useState } from "react"
import Testimonials from "../components/Testimonials"


function Page() {

  const [open, setOpen] = useState(false);

  function hanldeOpen(){
    setOpen(!open);
  }


  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Products/>
        <Services/>
        <Testimonials/>
        <MeetTeam/>
        <CallToAction btn={hanldeOpen}/>
        <Contact open={open}/>
    </div>
  )
}

export default Page