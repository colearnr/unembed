'use strict'

const cheerio = require('cheerio')
const urlUtils = require('url')
const _ = require('lodash')

;(function (Unembed) {
  var parsers = {
    'youtube': require('./parsers/youtube'),
    'vimeo': require('./parsers/vimeo'),
    'slideshare': require('./parsers/slideshare')
  }

  Unembed.register = function (type, parserObj) {
    parsers[type] = parserObj
  }

  /**
  Unembed.parse = function(embedStr, options)

  Parse the given embed code

  @param {String} embedStr Embed code
  @param {Object} options Eg: {secure: true}
  */
  Unembed.parse = function (embedStr, options) {
    let $ = cheerio.load(embedStr, {normalizeWhitespace: true,
      xmlMode: true})
    let src = $('iframe').attr('src')
    let urlObj = urlUtils.parse(src, true, true)
    let ret = {}
    options = options || {secure: true}
    ;['host', 'hostname', 'hash', 'query', 'pathname', 'href'].forEach(function (key) {
      ret[key] = urlObj[key]
    })
    let hostname = ret['hostname']
    ;['www', 'video', 'player', 'media', 'stream'].forEach(function (mediaPrefix) {
      hostname = hostname.replace(mediaPrefix + '.', '')
    })
    ret.type = hostname.split('.')[0]
    if (parsers[ret.type]) {
      var parsedMeta = parsers[ret.type].parse($, src, options)
      _.merge(ret, parsedMeta)
    }
    return ret
  }
}(exports))
