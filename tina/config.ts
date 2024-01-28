import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";



const now = new Date().toLocaleDateString("en-AU", {timeZone : "Australia/Perth"});
const year = now.split("/")[2];
const month = now.split("/")[1];
const day = now.split("/")[0]

const readableDate = `${year}-${month}-${day}`

console.log(readableDate);


export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            date: readableDate,
            draft: true,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'string',
            label: 'Excerpt',
            name: 'excerpt',
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            required: true,
            description: 'If this is checked the post will not be published',
          },
          {
            label: "Date",
            name: "date",
            type: "datetime",
            ui: {
              dateFormat: 'YYYY-MM-DD',
              
            },
          },
        ],
        ui: {
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${readableDate}-${values.title
                ?.toLowerCase()
                .replace(/ /g, '-')}`
            },
          },
          
        },
      },
    ],
  },
});
