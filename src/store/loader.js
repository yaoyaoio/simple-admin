const modelsFiles = require.context('./models', false, /\.js$/)
const models = {}

modelsFiles.keys().forEach(key => {
  const filename = key.replace(/(\.\/|\.js)/g, '')
  models[filename] = modelsFiles(key).default
})

export default models
