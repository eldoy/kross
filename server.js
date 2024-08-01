var sirloin = require('sirloin')

var cors = require('./index.js')

var app = sirloin({ port: 8024 })

var request = async function (req, res) {
  cors(req, res)
  return 'hello'
}

app.use(request)
