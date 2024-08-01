/**
 * @jest-environment jsdom
 */

var axios = require('axios')
var url = 'http://localhost:8024'

it('should allow origin', async () => {
  await new Promise((r) => setTimeout(r, 500))

  let result
  try {
    result = await axios.post(
      url,
      {},
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        responseType: 'json',
        withCredentials: true
      }
    )
  } catch (e) {}
  expect(result.data).toBe('hello')
})
