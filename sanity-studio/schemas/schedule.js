export default {
    title: 'Schedule Time',
    name: 'schedule',
    type: 'document',
    fields:[
        {
          title:'ScheduleName',
          name:'scheduleName',
          type:'string'
        },
        {
            title: 'Schedule start time',
            name: 'startTime',
            type: 'string',
            validation: Rule => Rule.regex(/^[\d]{2}:[\d]{2}$/,{name:'time',invert:false}) 
          },
        {
            title: 'Schedule end time',
            name: 'endTime',
            type: 'string',
            validation: Rule => Rule.regex(/^[\d]{2}:[\d]{2}$/,{name:'time',invert:false}) 
          }
    ],
    preview: {
        select: {
          title:'scheduleName',  
          startTime:'startTime',
          endTime:'endTime',
        },
        prepare(selection) {
            const {title,startTime,endTime} = selection
            return {
              title,
              subtitle: `${startTime} ~ ${endTime}`
            }
          }
      }
  }