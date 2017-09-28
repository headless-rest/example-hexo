const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')
const matter = require('gray-matter')

const HEADLESS_TOKEN = '3eqUsAwZa59vNSHXhQBQ1lxWILXy9u7u'

axios.get('https://content.headless.rest/api/v1/demo-website/content/blog', {
  params: {
    token: HEADLESS_TOKEN
  }
}).then((res) => {
  fs.emptyDirSync(path.join(__dirname, '..', 'source', '_posts'))

  for (const post of res.data.items) {
    if (post.content.en.body.draft) continue // Skip drafts

    const hexoFileContent = matter.stringify(post.content.en.body, {
      title: post.content.en.title,
      date: post.content.en.publish_date,
      tags: post.content.en.tags
    })

    const filename = (new Date(post.created)).toISOString().replace(/:/g, '-') + '.md' // Replace colon because filesystems don't like it

    fs.outputFileSync(path.join(__dirname, '..', 'source', '_posts', filename), hexoFileContent)
  }
}).catch((err) => {
  console.error(err.message)
  process.exit(-1)
})
