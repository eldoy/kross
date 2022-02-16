// const URL = require('url').URL

module.exports = async function(req, res) {

  // TODO: Find exact origin
  // const url = new URL($.req.headers.referer)
  // const origin = url.hostname

  let origin = req.headers.referer
  if (!origin) return
  if (origin.endsWith('/')) origin = origin.slice(0, -1)
  res.setHeader('Access-Control-Allow-Origin', origin)
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control')
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
}
