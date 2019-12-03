const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/windpursuer/IdeaProjects/tb/sedum/sedum-client/src/pages/404.js"))),
  "component---src-pages-error-js": hot(preferDefault(require("/Users/windpursuer/IdeaProjects/tb/sedum/sedum-client/src/pages/error.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/windpursuer/IdeaProjects/tb/sedum/sedum-client/src/pages/index.js")))
}

