import type { CollectionConfig } from 'payload'


export const Blogs:CollectionConfig={
    slug:'blogs',
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
            name:"coverimage",
            type:"text",
            required:true
        },
        {
            name:"content",
            type:"richText",
            required:true
        }
    ],
    timestamps:true
}