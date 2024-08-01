# Kross

Cors plugin for NodeJS. Makes it easy to control which domains can access your API from the browser.

### Install
```
npm i kross
```

### Usage

In your web application do this:
```js
var cors = require('kross')

// The default will allow all domains
cors(req, res)

// These are the default options
var options = {

  // If credentials are allowed
  credentials: true,

  // The headers allowed
  headers: [
     'Origin',
     'X-Requested-With',
     'Content-Type',
     'Accept',
     'Authorization',
     'Cache-Control'
  ],

  // The methods allowed
  methods: [
    'GET',
    'POST',
    'OPTIONS',
    'PUT',
    'PATCH',
    'DELETE'
  ],

  // The domain names allowed
  // Undefined (default) means all domains are allowed
  domains: undefined,

  // Specific, multiple supported
  domains: ['https://www.7i.no', 'https://docs.7i.no']
}

// Override them with
cors(req, res, options)
```

MIT Licensed. Enjoy!
