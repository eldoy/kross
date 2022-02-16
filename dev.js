const sirloin = require('sirloin')

const cors = require('./index.js')

const app = sirloin({ port: 8024 })

const request = async function(req, res) {
  cors(req, res)
  return 'hello'
}

app.use(request)
