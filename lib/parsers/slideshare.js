(function(SlideShare) {

  var SS_URL_REGEX = /\/\/(www\.)?slideshare.net\/slideshow\/embed_code\/(\d+)/,
  URL_PREFIX = '//slideshare.net/slideshow/embed_code/';

  /**
  SlideShare.parse = function(url, options)

  Parse the given SlideShare url

  @param {Object} Instance of cheerio
  @param {String} SlideShare url
  @param {Object} Options. Eg: {secure: true}
  */
  SlideShare.parse = function($, url, options) {
    var match = url.match(SS_URL_REGEX);
      ret = {},
      description = '',
      useSecure = options.secure || true;
    if (match && match.length) {
      ret.embed_code = match[2];
    }
    var HTTP_PREFIX = useSecure ? 'https:' : 'http:';
    ret.direct_url = HTTP_PREFIX + URL_PREFIX + ret.embed_code;
    ret.original_url = HTTP_PREFIX + $('strong a').attr('href');
    ret.title = $('strong a').html();
    var author_node = $('strong').next('strong');
    ret.author_url = HTTP_PREFIX + author_node.find('a').attr('href');
    ret.author = author_node.text();
    return ret;
  }

}(exports));
