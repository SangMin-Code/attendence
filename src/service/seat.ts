import path from "path";
import {readFile} from 'fs/promises'

export type SeatProp = {
    seatNum:number,
    name:string,
    studentNum:string,
    period:number
}

export async function getSeats():Promise<SeatProp[]>{
    const filePath = path.join(process.cwd(),'data','seats.json');
    const data = await readFile(filePath,'utf-8')
    return JSON.parse(data);
    
}