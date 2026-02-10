import type { CollectionConfig } from 'payload'


export const Resources:CollectionConfig={
    slug:'resources',
     access: {
    read: () => true,
    },
    fields:[
        {
            name:"subjectname",
            type:"text",
            required:true
        },
       {
        name:"subjectcontent",
        type:"richText",
        required:true
       },
  {
  name: "resourcetypejoin",
  type: "join",
  collection: "resourcetypes",
  on: "resources", 
}
    ],
    timestamps:true
}