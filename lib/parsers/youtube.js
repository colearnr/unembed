;(function (YouTube) {
  const YT_URL_PARSER = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(feature\=player_embedded&))\??v?=?([^#\&\?]*).*/
  const YT_IMG_PREFIX = '//img.youtube.com/vi/'
  const URL_PREFIX = '//www.youtube.com/watch?v='

  /**
  YouTube.parse = function(url, options)

  Parse the given youtube url

  @param {Object} $ Instance of cheerio
  @param {String} url Youtube url
  @param {Object} options Options. Eg: {secure: true}
  */
  YouTube.parse = function ($, url, options) {
    let embed_code = ''
    let match_content = url.match(YT_URL_PARSER)
    let ret = {}
    let useSecure = options.secure || true
    if (match_content && match_content.length && match_content[match_content.length - 1] && match_content[match_content.length - 1].length == 11) {
      embed_code = match_content[match_content.length - 1]
    }
    ret.embed_code = embed_code
    const HTTP_PREFIX = useSecure ? 'https:' : 'http:'
    const prefix = HTTP_PREFIX + YT_IMG_PREFIX + embed_code + '/'
    ret.cover_image = prefix + '0.jpg'
    ret.thumb_default = prefix + 'default.jpg'
    ret.thumb_default_hq = prefix + 'hqdefault.jpg'
    ret.thumb_default_mq = prefix + 'mqdefault.jpg'
    ret.thumb_default_sd = prefix + 'sddefault.jpg'
    ret.thumb_default_max = prefix + 'maxresdefault.jpg'
    ret.thumbnails = [prefix + '1.jpg', prefix + '2.jpg', prefix + '3.jpg']
    ret.direct_url = HTTP_PREFIX + URL_PREFIX + embed_code
    return ret
  }
}(exports))
