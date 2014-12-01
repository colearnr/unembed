unembed
=======

Parse common embed codes and extract useful information

Installation
=============
npm install umembed

Examples (From tests)
=====================

```
var unembed = require('unembed');

// YouTube
unembed.parse('<iframe width="420" height="315" src="//www.youtube.com/embed/zOgUB1Iqd_0" frameborder="0" allowfullscreen></iframe>')

{
  host: 'www.youtube.com',
  hostname: 'www.youtube.com',
  hash: null,
  query: {

  },
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
  thumbnails: [
    'https://img.youtube.com/vi/zOgUB1Iqd_01.jpg',
    'https://img.youtube.com/vi/zOgUB1Iqd_02.jpg',
    'https://img.youtube.com/vi/zOgUB1Iqd_03.jpg'
  ],
  direct_url: "https://www.youtube.com/watch?v=zOgUB1Iqd_0"
}

// Vimeo

unembed.parse('<iframe src="//player.vimeo.com/video/101896297?color=ffffff&amp;autoplay=1&amp;loop=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/101896297">Future / Coupe</a> from <a href="http://vimeo.com/user7555033">Chris Carboni</a> on <a href="https://vimeo.com">Vimeo</a>.</p> <p>Official music video for the song &ldquo;Coupe&rdquo; by Future. Be sure to check out all the other 2014 Adult Swim Singles!<br /> <br /> http://video.adultswim.com/music/singles-2014/<br /> <br /> Credits:<br /> <br /> Client: Adult Swim<br /> Director: Chris Carboni<br /> Treatment / Co-director: Daniel Garcia<br /> Animation: Chris Carboni, Elaine Lee, Dennis Moran, Matt Everton, Simon Ampel<br /> Compositing: Chris Carboni <br /> <br /> Created @ Carboni Studio</p>')

// Removes all the extra text stuff automatically

{
  host: 'player.vimeo.com',
  hostname: 'player.vimeo.com',
  hash: null,
  query: {
    color: 'ffffff',
    autoplay: '1',
    loop: '1'
  },
  pathname: '/video/101896297',
  href: '//player.vimeo.com/video/101896297?color=ffffff&autoplay=1&loop=1',
  type: 'vimeo',
  embed_code: '101896297',
  direct_url: 'https://vimeo.com/101896297',
  player_url: 'https://player.vimeo.com/video/101896297'
}

```

Parsers
=======
- YouTube
- Vimeo
- SlideShare
- Roll out your own (Just call register method)

Changes
========
1.0.5 - 01/12/2014
* SlideShare - Fixed direct url format

1.0.4 - 01/12/2014
* Vimeo - Parse the description of the video
* SlideShare - Parse the original url and the author

