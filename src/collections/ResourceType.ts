import type { CollectionConfig } from "payload";



export const ResourceTypes: CollectionConfig = {
  slug: 'resourcetypes',
  access: { read: () => true },
  fields: [
    {
      name: "category",
      type: "select",
      options: [
        { label: "Notes", value: "notes" },
        { label: "Dpps", value: "dpps" },
        { label: "Pyqs", value: "pyqs" },
        { label: "Cheat Sheet", value: "cheatsheet" },
      ],
      required: true,
    },
    {
      name: "resoucename",
      type: "text",
      required: true,
    },
    {
      name: "resourcedescription",
      type: "richText",
      required: true,
    },
    {
      name: "resourcelink",
      type: "text",
      required: true,
    },
    {
      name: "resources", 
      type: "relationship",
      relationTo: "resources",
      hasMany: true,
    },
  ],
  timestamps: true,
}
