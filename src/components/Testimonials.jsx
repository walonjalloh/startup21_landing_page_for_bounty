import testimonial from "../utils/testimonial"
import { v4 as uuidv4 } from 'uuid';

const table1 = testimonial.slice(0,3);
const table2 = testimonial.slice(3,6);
const table3 = testimonial.slice(6,9);

function Testimonials() {
  return (
    <section>
      <div>
        <div>Testimonials</div>
        <h1>What people say about us </h1>
        <p>From unique education to a life changing one</p>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Testimonials