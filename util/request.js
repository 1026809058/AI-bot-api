const encrypt = require('./crypto')
const axios = require('axios')
const PacProxyAgent = require('pac-proxy-agent')
const http = require('http')
const https = require('https')
const tunnel = require('tunnel')
const { URLSearchParams, URL } = require('url')
const config = require('../util/config.json')
// request.debug = true // 开启可看到更详细信息

const createRequest = (method, url, data = {}, options) => {
  return new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
    }
    request({
        url: url,
        method: method,
        headers: headers,
        data: data,
        options: options
    })
  })
}

module.exports = createRequest