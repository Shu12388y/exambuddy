import type { CollectionConfig } from 'payload'


export const Notification:CollectionConfig={
    slug:'notifications',
     access: {
    read: () => true,
    },
    fields:[
        {
            name:"title",
            type:"text",
            required:true
        },
        {
            name:"importantdate",
            type:"date",
            required:true
        },
        {
            name:"downloadlink",
            type:"text",
        },
        {
            name:"applylink",
            type:"text"
        },
        {
            name:"content",
            type:"richText",
            required:true
        }
    ],
    timestamps:true
}