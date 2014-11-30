'use strict'

var cheerio = require('cheerio'),
  urlUtils = require('url'),
  _ = require('lodash');

(function(Unembed) {

  var parsers = {
    'youtube': require('./parsers/youtube'),
    'vimeo':  require('./parsers/vimeo'),
    'slideshare': require('./parsers/slideshare')
  }

  Unembed.register = function(type, parserObj) {
    parsers[type] = parserObj;
  }

  /**
  Unembed.parse = function(embedStr, options)

  Parse the given embed code

  @param {String} Embed code
  @param {Object} Options. Eg: {secure: true}
  */
  Unembed.parse = function(embedStr, options) {
    var $ = cheerio.load(embedStr, {normalizeWhitespace: true,
      xmlMode: true}),
      src = $('iframe').attr('src'),
      urlObj = urlUtils.parse(src, true, true),
      ret = {},
      options = options || {secure: true};
    ['host', 'hostname', 'hash', 'query', 'pathname', 'href'].forEach(function (key) {
      ret[key] = urlObj[key];
    });
    var hostname = ret['hostname'];
    ['www', 'video', 'player', 'media', 'stream'].forEach(function(media_prefix) {
      hostname = hostname.replace(media_prefix + '.', '');
    });
    ret.type = hostname.split('.')[0];
    if (parsers[ret.type]) {
      var parsedMeta = parsers[ret.type].parse(src, options);
      _.merge(ret, parsedMeta);
    }
    return ret;
  }

}(exports));
