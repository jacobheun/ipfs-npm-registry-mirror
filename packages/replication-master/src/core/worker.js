'use strict'

const {
  connect
} = require('./workers')

module.exports = () => {
  return async (request, response, next) => {
    const info = {
      index: connect()
    }

    response.statusCode = 200
    response.setHeader('Content-type', 'application/json; charset=utf-8')
    response.send(JSON.stringify(info, null, request.query.format === undefined ? 0 : 2))
  }
}
