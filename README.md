# Kross

Cors plugin for NodeJS. Makes it easy to control which domains can access your API from the browser.

### Install
```
npm i kross
```

### Usage

In your web application do this:
```js
const cors = require('kross')

// The default will allow all domains
cors(req, res)
```

MIT Licensed. Enjoy!
