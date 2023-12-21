import { g, config } from '@grafbase/sdk'

const User=g.model('User',{
  name:g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avater:g.url(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  linkinUrl:g.url().optional(),
  projects:g.relation(()=>Projects).list().optional(),
})

const Projects=g.model('Projects',{
  title:g.string().length({min:3}),
  discription:g.string(),
  image:g.url(),
  liveSiteUrl:g.url(),
  githubUrl:g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=>User)

})



export default config({
  schema: g,

  auth: {
   
    rules: (rules) => {
      rules.public()
    },
  },

})
