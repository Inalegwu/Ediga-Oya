import { SchemaTypeDefinition } from "sanity"

export default {
    name:"testimonial",
    type:"document",
    title:"Testimonial",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Name"
        },{
            name:"statement",
            type:"string",
            title:"statement"
        },
        {
            name:"benefit",
            type:"string",
            title:"Benefit",
        },
        { 
            name:"image",
            type:"image",
            title:"image"
        }
    ]
} satisfies SchemaTypeDefinition