(function(YouTube) {

  var YT_URL_PARSER = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?)|(feature\=player_embedded&))\??v?=?([^#\&\?]*).*/,
  YT_IMG_PREFIX = '//img.youtube.com/vi/';

  /**
  YouTube.parse = function(url, options)

  Parse the given youtube url

  @param {String} Youtube url
  @param {Object} Options. Eg: {secure: true}
  */
  YouTube.parse = function(url, options) {
    var embed_code = '',
      match_content = url.match(YT_URL_PARSER)
      ret = {},
      useSecure = options.secure || true;
    if (match_content && match_content.length && match_content[match_content.length - 1] && match_content[match_content.length - 1].length == 11) {
      embed_code = match_content[match_content.length - 1];
    }
    ret.embed_code = embed_code;
    var HTTP_PREFIX = useSecure ? 'https:' : 'http:';
    var prefix = HTTP_PREFIX + YT_IMG_PREFIX + embed_code;
    ret.cover_image = prefix + '0.jpg';
    ret.thumb_default = prefix + 'default.jpg';
    ret.thumb_default_hq = prefix + 'hqdefault.jpg';
    ret.thumb_default_mq = prefix + 'mqdefault.jpg';
    ret.thumb_default_sd = prefix + 'sddefault.jpg';
    ret.thumb_default_max = prefix + 'maxresdefault.jpg';
    ret.thumbnails = [prefix + '1.jpg', prefix + '2.jpg', prefix + '3.jpg']
    return ret;
  }

}(exports));
