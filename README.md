# headless-example-hexo

> Example Hexo project connected to the Headless CMS

This is the Hexo demo blog website with Headless integrated.

Notable changes to integrate Headless CMS:

Added new dependencies: `npm install axios fs-extra gray-matter`

`scripts/headless.js` added

The above script is run automatically when you run `hexo generate`. It downloads from Headless and stores the files in `sources/_posts`. Edit the file so it works for your project.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
