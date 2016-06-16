;(function (Vimeo) {
  const VIMEO_URL_REGEX = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/
  const PLAYER_PREFIX = '//player.vimeo.com/video/'
  const URL_PREFIX = '//vimeo.com/'
  const PLAYER_REGEX = /\/\/player.vimeo.com\/video\/(\d+)/

  /**
  Vimeo.parse = function(url, options)

  Parse the given vimeo url

  @param {Object} $ Instance of cheerio
  @param {String} url Vimeo url
  @param {Object} options Options. Eg: {secure: true}
  */
  Vimeo.parse = function ($, url, options) {
    let match = url.match(VIMEO_URL_REGEX)
    let ret = {}
    let useSecure = options.secure || true
    let description = ''
    if (match && match.length) {
      ret.embed_code = match[5]
    } else if (url.indexOf(PLAYER_PREFIX) != -1) {
      match = url.match(PLAYER_REGEX)
      ret.embed_code = match[1]
    }
    const HTTP_PREFIX = useSecure ? 'https:' : 'http:'
    ret.direct_url = HTTP_PREFIX + URL_PREFIX + ret.embed_code
    ret.player_url = HTTP_PREFIX + PLAYER_PREFIX + ret.embed_code
    let nodes = $('iframe').nextAll()
    while (nodes && nodes.length) {
      description += '<p>' + nodes.html() + '</p>'
      nodes = nodes.nextAll()
    }
    ret.description = description
    return ret
  }
}(exports))
