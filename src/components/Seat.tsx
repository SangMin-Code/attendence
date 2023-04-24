'use client'

import { SeatProp } from "@/service/seat"
import { useState } from "react"

export default function Seat({seat:{seatNum, name, studentNum, period}}:{seat:SeatProp}){
    
    const [active, setActive] = useState(false);

    const handleClick = ()=>{
        console.log(seatNum);
        setActive((prev)=>!prev);
    }

    return(
        <ul className="flex flex-col justify-center items-center bg-white">
            <li className="w-full text-center bg-lime-100">{seatNum}</li>
            <li 
                className={`w-full text-center h-16 ${active ? "bg-cyan-500":"bg-white"}`} 
                onClick={handleClick}
            >{name}</li>
        </ul>
    )
}