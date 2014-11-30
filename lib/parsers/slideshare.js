(function(SlideShare) {

  var SS_URL_REGEX = /\/\/(www\.)?slideshare.net\/slideshow\/embed_code\/(\d+)/,
  URL_PREFIX = '//slideshare.net/';

  /**
  SlideShare.parse = function(url, options)

  Parse the given SlideShare url

  @param {String} SlideShare url
  @param {Object} Options. Eg: {secure: true}
  */
  SlideShare.parse = function(url, options) {
    var match = url.match(SS_URL_REGEX);
      ret = {},
      useSecure = options.secure || true;
    if (match && match.length) {
      ret.embed_code = match[2];
    }
    var HTTP_PREFIX = useSecure ? 'https:' : 'http:';
    ret.direct_url = HTTP_PREFIX + URL_PREFIX + ret.embed_code;
    return ret;
  }

}(exports));
