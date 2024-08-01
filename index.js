var OPTIONS = {
  credentials: true,
  headers: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control'
  ],
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE']
}

module.exports = async function (req, res, opt = {}) {
  opt = { ...OPTIONS, ...opt }

  var origin = req.headers.origin
  if (!origin) return

  if (
    !opt.domains ||
    (Array.isArray(opt.domains) && opt.domains.includes(origin))
  ) {
    res.setHeader('Access-Control-Allow-Origin', origin)
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
