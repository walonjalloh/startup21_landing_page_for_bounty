import AboutUs from "../components/AboutUs"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Services from "../components/Services"
import MeetTeam from "../components/MeetTeam"
import CallToAction from "../components/CallToAction"


function Page() {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Products/>
        <Services/>
        <MeetTeam/>
        <CallToAction/>
    </div>
  )
}

export default Page