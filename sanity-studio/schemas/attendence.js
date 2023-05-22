
export default {
    title:'Attendence',
    name:'attendence',
    type:'document',
    fields:[
        {
            title:'Student',
            name:'student',
            type:'reference',
            to:[{type:'student'}],
        },
        {
            title:'Time',
            name:'schedule',
            type:'reference',
            to:[{type:'schedule'}],
        },
        {
            title:'Teacher',
            name:'teacher',
            type:'string'
        },
   
    ],
    preview: {
        select: {
          title: 'teacher',
          student: 'student.name',
          studentId:'student.studentId',
          startTime:'schedule.startTime',
          endTime:'schedule.endTime'
        },
        prepare(selection){
            const {title,student,studentId,startTime,endTime} = selection;
            return {
                title,
                subtitle: `${studentId}:${student} ${startTime}~${endTime}`,
            }
        }
      }
}