;(function (SlideShare) {
  const SS_URL_REGEX = /\/\/(www\.)?slideshare.net\/slideshow\/embed_code\/(\d+)/
  const URL_PREFIX = '//slideshare.net/slideshow/embed_code/'

  /**
  SlideShare.parse = function(url, options)

  Parse the given SlideShare url

  @param {Object} $ Instance of cheerio
  @param {String} url SlideShare url
  @param {Object} options Options. Eg: {secure: true}
  */
  SlideShare.parse = function ($, url, options) {
    let match = url.match(SS_URL_REGEX)
    let ret = {}
    let useSecure = options.secure || true
    if (match && match.length) {
      ret.embed_code = match[2]
    }
    const HTTP_PREFIX = useSecure ? 'https:' : 'http:'
    ret.direct_url = HTTP_PREFIX + URL_PREFIX + ret.embed_code
    ret.original_url = HTTP_PREFIX + $('strong a').attr('href')
    ret.title = $('strong a').html()
    const authorNode = $('strong').next('strong')
    ret.author_url = HTTP_PREFIX + authorNode.find('a').attr('href')
    ret.author = authorNode.text()
    return ret
  }
}(exports))
