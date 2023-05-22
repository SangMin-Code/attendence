
export default {
    title:'Seat',
    name:'seat',
    type:'document',
    fields:[
        {
            title:'SeatNumber',
            name:'seatNumber',
            type:'string'
        },
        {
            title:'Student',
            name:'student',
            type:'reference',
            to:[{type:'student'}],
        },
    ],
}