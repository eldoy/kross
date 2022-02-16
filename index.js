const rekvest = require('rekvest')

const DOMAIN = 'http://localhost'

const OPTIONS = {
  credentials: true,
  headers: [
     'Origin',
     'X-Requested-With',
     'Content-Type',
     'Accept',
     'Authorization',
     'Cache-Control'
  ],
  methods: [
    'GET',
    'POST',
    'OPTIONS',
    'PUT',
    'PATCH',
    'DELETE'
  ]
}

module.exports = async function(req, res, opt = {}) {
  opt = { ...OPTIONS, ...opt }

  rekvest(req)

  let domain = `${req.protocol}//${req.hostname}`
  if (!req.protocol || !req.hostname) {
    domain = DOMAIN
  }

  if (!opt.domains || Array.isArray(opt.domains) && opt.domains.includes(domain)) {
    res.setHeader('Access-Control-Allow-Origin', domain)
  }

  if (opt.credentials) {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
  }

  if (Array.isArray(opt.headers) && opt.headers.length) {
    res.setHeader('Access-Control-Allow-Headers', opt.headers.join(', '))
  }

  if (Array.isArray(opt.methods) && opt.methods.length) {
    res.setHeader('Access-Control-Allow-Methods', opt.methods.join(', '))
  }
}
