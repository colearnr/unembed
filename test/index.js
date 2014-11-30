var expect = require('expect.js'),
  unembed = require('../lib/unembed.js');

describe('Simple parsing tests', function() {

  it('should parse simple iframe codes', function() {
    expect(unembed.parse('<iframe src="http://www.colearnr.com" />')).to.eql({host: 'www.colearnr.com',
  hostname: 'www.colearnr.com',
  hash: null,
  query: {},
  pathname: '/',
  href: 'http://www.colearnr.com/',
  type: 'colearnr'});
  });

});

describe('YouTube parsing tests', function() {

  it('should parse youtube iframe codes', function() {
    expect(unembed.parse('<iframe width="420" height="315" src="//www.youtube.com/embed/zOgUB1Iqd_0" frameborder="0" allowfullscreen></iframe>')).to.eql({host: 'www.youtube.com',
  hostname: 'www.youtube.com',
  hash: null,
  query: {},
  pathname: '/embed/zOgUB1Iqd_0',
  href: '//www.youtube.com/embed/zOgUB1Iqd_0',
  type: 'youtube',
  embed_code: 'zOgUB1Iqd_0',
  cover_image: 'https://img.youtube.com/vi/zOgUB1Iqd_00.jpg',
  thumb_default: 'https://img.youtube.com/vi/zOgUB1Iqd_0default.jpg',
  thumb_default_hq: 'https://img.youtube.com/vi/zOgUB1Iqd_0hqdefault.jpg',
  thumb_default_mq: 'https://img.youtube.com/vi/zOgUB1Iqd_0mqdefault.jpg',
  thumb_default_sd: 'https://img.youtube.com/vi/zOgUB1Iqd_0sddefault.jpg',
  thumb_default_max: 'https://img.youtube.com/vi/zOgUB1Iqd_0maxresdefault.jpg',
  thumbnails:
   [ 'https://img.youtube.com/vi/zOgUB1Iqd_01.jpg',
     'https://img.youtube.com/vi/zOgUB1Iqd_02.jpg',
     'https://img.youtube.com/vi/zOgUB1Iqd_03.jpg' ],
  direct_url: "https://www.youtube.com/watch?v=zOgUB1Iqd_0"
   });
  });

  it('should parse youtube iframe codes with options', function() {
    expect(unembed.parse('<iframe width="960" height="720" src="//www.youtube.com/embed/S75CeSgoGa0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')).to.eql({host: 'www.youtube.com',
  hostname: 'www.youtube.com',
  hash: null,
  query: { rel: '0', controls: '0', showinfo: '0' },
  pathname: '/embed/S75CeSgoGa0',
  href: '//www.youtube.com/embed/S75CeSgoGa0?rel=0&controls=0&showinfo=0',
  type: 'youtube',
  embed_code: 'S75CeSgoGa0',
  cover_image: 'https://img.youtube.com/vi/S75CeSgoGa00.jpg',
  thumb_default: 'https://img.youtube.com/vi/S75CeSgoGa0default.jpg',
  thumb_default_hq: 'https://img.youtube.com/vi/S75CeSgoGa0hqdefault.jpg',
  thumb_default_mq: 'https://img.youtube.com/vi/S75CeSgoGa0mqdefault.jpg',
  thumb_default_sd: 'https://img.youtube.com/vi/S75CeSgoGa0sddefault.jpg',
  thumb_default_max: 'https://img.youtube.com/vi/S75CeSgoGa0maxresdefault.jpg',
  thumbnails:
   [ 'https://img.youtube.com/vi/S75CeSgoGa01.jpg',
     'https://img.youtube.com/vi/S75CeSgoGa02.jpg',
     'https://img.youtube.com/vi/S75CeSgoGa03.jpg' ],
  direct_url: "https://www.youtube.com/watch?v=S75CeSgoGa0"
  });
  });

});

describe('Vimeo parsing tests', function() {

  it('should parse simple vimeo codes', function() {
    expect(unembed.parse('<iframe src="//player.vimeo.com/video/101896297" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/101896297">Future / Coupe</a> from <a href="http://vimeo.com/user7555033">Chris Carboni</a> on <a href="https://vimeo.com">Vimeo</a>.</p>')).to.eql({host: 'player.vimeo.com',
  hostname: 'player.vimeo.com',
  hash: null,
  query: {},
  pathname: '/video/101896297',
  href: '//player.vimeo.com/video/101896297',
  type: 'vimeo',
  embed_code: '101896297',
  direct_url: 'https://vimeo.com/101896297',
  player_url: 'https://player.vimeo.com/video/101896297'});
  });

  it('should parse vimeo codes with options', function() {
    expect(unembed.parse('<iframe src="//player.vimeo.com/video/101896297?color=ffffff&amp;autoplay=1&amp;loop=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/101896297">Future / Coupe</a> from <a href="http://vimeo.com/user7555033">Chris Carboni</a> on <a href="https://vimeo.com">Vimeo</a>.</p> <p>Official music video for the song &ldquo;Coupe&rdquo; by Future. Be sure to check out all the other 2014 Adult Swim Singles!<br /> <br /> http://video.adultswim.com/music/singles-2014/<br /> <br /> Credits:<br /> <br /> Client: Adult Swim<br /> Director: Chris Carboni<br /> Treatment / Co-director: Daniel Garcia<br /> Animation: Chris Carboni, Elaine Lee, Dennis Moran, Matt Everton, Simon Ampel<br /> Compositing: Chris Carboni <br /> <br /> Created @ Carboni Studio</p>')).to.eql({host: 'player.vimeo.com',
  hostname: 'player.vimeo.com',
  hash: null,
  query: { color: 'ffffff', autoplay: '1', loop: '1' },
  pathname: '/video/101896297',
  href: '//player.vimeo.com/video/101896297?color=ffffff&autoplay=1&loop=1',
  type: 'vimeo',
  embed_code: '101896297',
  direct_url: 'https://vimeo.com/101896297',
  player_url: 'https://player.vimeo.com/video/101896297'});
  });

});

describe('Slideshare parsing tests', function() {

  it('should parse simple slideshare iframe codes', function() {
    expect(unembed.parse('<iframe src="//www.slideshare.net/slideshow/embed_code/42105646" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/Risgaard/digital-workplace-future-trends" title="Future Trends in the Digital Workplace" target="_blank">Future Trends in the Digital Workplace</a> </strong> from <strong><a href="//www.slideshare.net/Risgaard" target="_blank">Martin Risgaard</a></strong> </div>')).to.eql({host: 'www.slideshare.net',
  hostname: 'www.slideshare.net',
  hash: null,
  query: {},
  pathname: '/slideshow/embed_code/42105646',
  href: '//www.slideshare.net/slideshow/embed_code/42105646',
  type: 'slideshare',
  embed_code: '42105646',
  direct_url: 'https://slideshare.net/42105646'});
  });

  it('should parse slideshare iframe codes with options', function() {
    expect(unembed.parse('<iframe src="//www.slideshare.net/slideshow/embed_code/42125039?startSlide=13" width="510" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/doctortvrao/teaching-with-vision-42125039" title="TEACHING WITH VISION " target="_blank">TEACHING WITH VISION </a> </strong> from <strong><a href="//www.slideshare.net/doctortvrao" target="_blank">Tummalapalli Rao</a></strong> </div>')).to.eql({host: 'www.slideshare.net',
  hostname: 'www.slideshare.net',
  hash: null,
  query: { startSlide: '13' },
  pathname: '/slideshow/embed_code/42125039',
  href: '//www.slideshare.net/slideshow/embed_code/42125039?startSlide=13',
  type: 'slideshare',
  embed_code: '42125039',
  direct_url: 'https://slideshare.net/42125039'});
  });

});
