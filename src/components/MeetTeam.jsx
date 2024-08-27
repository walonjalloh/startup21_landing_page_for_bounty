import teamMember from "../utils/team"
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel'

function MeetTeam() {
  return (
    <section className="py-24 overflow-clip">
        <div>
            <h1 className="text-center font-extrabold text-3xl py-10">Meet the team</h1>
        </div>
        <Carousel showArrows={true} showThumbs={false}>
        <div className="flex gap-4">
            {teamMember.map((team) => (
                <div className="flex flex-col justify-center items-center border border-white/50 shadow-[0_7px_14px_#f4f4f4] my-4 " key={team.key}>
                    <img src={team.img} alt="img" className="h-10 w-10" />
                    <h2 className="font-bold text-black/70">{team.name}</h2>
                    <p className="font-medium text-md ">{team.position}</p>
                    <p className="w-[300px] text-center">{team.text}</p>
                </div>
            ))}
        </div>
        </Carousel>
        
    </section>
  )
}

export default MeetTeam


