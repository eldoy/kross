const sirloin = require('sirloin')

const app = sirloin({ port: 8024 })

const request = async function(req, res) {
  // res.setHeader('Content-Type', 'text/html')

  // // Enable CORS
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // res.setHeader('Access-Control-Allow-Credentials', 'true')
  // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
}

app.use(request)
