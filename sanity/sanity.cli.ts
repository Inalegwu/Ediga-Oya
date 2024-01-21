import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vrce19hd',
    dataset: 'production'
  },
  project:{
    basePath:"/studio"
  }
})
