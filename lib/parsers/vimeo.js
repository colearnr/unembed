(function(Vimeo) {

  var VIMEO_URL_REGEX = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/,
  PLAYER_PREFIX = '//player.vimeo.com/video/',
  URL_PREFIX = '//vimeo.com/',
  PLAYER_REGEX = /\/\/player.vimeo.com\/video\/(\d+)/;

  /**
  Vimeo.parse = function(url, options)

  Parse the given vimeo url

  @param {Object} Instance of cheerio
  @param {String} Vimeo url
  @param {Object} Options. Eg: {secure: true}
  */
  Vimeo.parse = function($, url, options) {
    var match = url.match(VIMEO_URL_REGEX);
      ret = {},
      useSecure = options.secure || true,
      description = '';
    if (match && match.length) {
      ret.embed_code = match[5];
    } else if (url.indexOf(PLAYER_PREFIX) != -1) {
      match = url.match(PLAYER_REGEX);
      ret.embed_code = match[1];
    }
    var HTTP_PREFIX = useSecure ? 'https:' : 'http:';
    ret.direct_url = HTTP_PREFIX + URL_PREFIX + ret.embed_code;
    ret.player_url = HTTP_PREFIX + PLAYER_PREFIX + ret.embed_code;
    var nodes = $('iframe').nextAll();
    while (nodes && nodes.length) {
      description += '<p>' + nodes.html() + '</p>';
      nodes = nodes.nextAll();
    }
    ret.description = description;
    return ret;
  }

}(exports));
