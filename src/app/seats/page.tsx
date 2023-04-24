import Seat from "@/components/Seat";
import { getSeats } from "@/service/seat";

export default async function Seats(){

    const items = await getSeats();

    return(
        <section className="grid grid-cols-6 border-2 border-black gap-0.5 bg-black rounded-sm">
            {
              items.map((item)=> <Seat key={item.seatNum} seat={item}/>)
            }
        </section>

    )
}

