import { SchemaTypeDefinition } from "sanity"

export default {
    name:"Project",
    type:"document",
    title:"Project",
    fields:[
        {
            name:"name",
            type:"string",
            title:"Name"
        },{
            name:"description",
            type:"string",
            title:"Description"
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{
                source:"title",
                maxLength:100
            }
        },
        { 
            name:"image",
            type:"image",
            title:"image"
        }
    ]
} satisfies SchemaTypeDefinition