---
title: Bookmark dump
date: 2024-01-08
tags:
  - dev
rss: true
draft: true
---

I have this huge folder that I have been collating <em>links</em> in for several years. It's one of those folders that I use to catch anything that I find interesting or may need for reference or want to read in the future. The trouble is, I never (spare a few) really go back and review them. So I'm popping them all here as a sort of.. archive, but also to share with the world the random collection of <em>interesting things</em> I have found.

The general topic is web development, so bear that in mind before you begin.

1. <a href="javascript:(function()%7Bwindow.location=window.location.origin+'/wp-admin/';%7D)()">Open WP Page</a>

<!-- This is a bookmarklet, it sits at the top of the folder and I actually use it a lot to quickly navigate to the Wordpress admin page, without really needing to think about it. A developer friend made it for me literal years ago and I don't even know if it is applicable to all Wordpress websites. -->

1. <a href="javascript:(function(){ var style = document.createElement(%27style%27), styleContent = document.createTextNode(%27* { cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJBJREFUeNrs2dEKgDAIhWEN3/+VLYtBF12MppHwDxY0uvg4DJpORcSl0bB4uPcwq+oFHu8/956pbtJsAAYMGDBgwIABA044t3pMEgb8VU2XsWdn1o/aUUn4bchPBWNFYWvVidxbCFGmr7YULBs1YDPfsYcXEi9ryvDjAAwYMGDAgAED7nK8bHG7qNLs6nYXYAAheh5j8Qw5fwAAAABJRU5ErkJggg==) 22 22, auto !important}%27); style.appendChild(styleContent ); var caput = document.getElementsByTagName(%27head%27); caput[0].appendChild(style); })();">44x44 Cursor</a>

<!-- Another little bookmarklet, which despite being near the top and theoretically very useful for accessbility testing, I never use it. Not sure where I found it, it mades your cursor into a 44x44 square, which was the button/link/interactive element minimum size in WCAG 2.1 (it's been reduced to 25x25 now in WCAG 2.2 for Level AA). -->

1. <a href="javascript:(function(){function d(a,b){a.setAttribute('data-css-storage',b)}function e(a){var b=a.getAttribute('data-css-storage');a.removeAttribute('data-css-storage');return b}var c=[];(function(){var a=document.body,b=a.hasAttribute('data-css-disabled');b?a.removeAttribute(%22data-css-disabled%22):a.setAttribute(%22data-css-disabled%22,%22%22);return%20b})()?(c=document.querySelectorAll(%22[data-css-storage]%22),[].slice.call(c).forEach(function(a){ %22STYLE%22===a.tagName?a.innerHTML=e(a):%22LINK%22===a.tagName?a.disabled=!1:a.style.cssText=e(a)})):(c=document.querySelectorAll(%22[style],%20link,%20style%22),[].slice.call(c).forEach(function(a){ %22STYLE%22===a.tagName?(d(a,a.innerHTML),a.innerHTML=%22%22):%22LINK%22===a.tagName?(d(a,%22%22),a.disabled=!0):(d(a,a.style.cssText),a.style.cssText=%22%22)}))})();">Toggle CSS</a>

<!-- Another bookmarklet. Does what it says on the tin. Toggles the CSS on a webpage so you can see it's barebones HTML -->


1. <a href="javascript:(function()%7Bjavascript%3Avar%20docWidth%20%3D%20document.documentElement.offsetWidth%3B%5B%5D.forEach.call(document.querySelectorAll('*')%2Cfunction(el)%20%7Bif%20(el.offsetWidth%20%3E%20docWidth)%20%7Bconsole.log(el)%3B%7D%7D)%7D)()">Width overflow</a>

<!-- Think this is the last bookmarklet. It's a JavaScript command that runs through the page and spits out any element that overflows the width of the browser into the console. -->

1. <a href="https://webaim.org/resources/contrastchecker/">Colour contrast checker</a>
<!-- This is the WebAIM one. I would usually find this by typing it into the browser, rather than navigating my bookmarks. It's a solid one to use, but I prefer colourcontrast.cc these days as it's so visual. -->

1. <a href="https://validator.w3.org/#validate_by_input">The W3C Markup Validation Service</a>

1. <a href="https://cssbattle.dev/">CSSBattle</a>

1. <a href="https://evilmartians.com/chronicles/images-done-right-web-graphics-good-to-the-last-byte-optimization-techniques">Images done right: Web graphics, good to the last byte — Martian Chronicles, Evil Martians’ team blog</a>

1. <a href="javascript:(function(){revenge=document.createElement('LINK');revenge.href='https://rawgithub.com/Heydon/REVENGE.CSS/master/revenge.css';revenge.rel='stylesheet';revenge.media='all';document.body.appendChild(revenge);})();">Revenge CSS</a>

1. <a href="https://codepen.io/preghostphase/pen/MWWZBze">buttonClub</a>
1. <a href="https://www.cssfontstack.com/">CSS Font stack</a>
1. <a href="https://www.amp-what.com/unicode/search/%2F%26%5Cw%2F">&what;</a>
1. <a href="https://html.spec.whatwg.org/multipage/named-characters.html">HTML Spec: 13.5 Named character references</a>
1. <a href="https://michalsnik.github.io/aos/">Animate On Scroll</a>
1. <a href="https://www.billerickson.net/code/slick-custom-arrow-navigation/">Slick custom arrow navigation</a>
1. <a href="https://dequeuniversity.com/screenreaders/">Screen Reader Keyboard Shortcuts and Gestures</a>
1. <a href="https://tornis.robbowen.digital/">Tornis</a>
1. <a href="https://docs.umbraco.com/welcome/getting-started/managing-an-umbraco-project">Umbraco documentation</a>
1. <a href="https://www.youtube.com/user/pcHelpFromPaul/playlists">Paul Seal YouTube</a>
1. <a href="https://learn.jquery.com/using-jquery-core/document-ready/">jQuery docs: $( document ).ready()</a>
1. <a href="https://alphagov.github.io/accessible-autocomplete/examples/">Accessible Autocomplete</a>
1. <a href="https://codyhouse.co/tutorials/how-stacking-cards">Stacking Cards example</a>
1. <a href="https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions">Google Maps documentation: Markers</a>
1. <a href="https://riccardoscalco.it/textures/">Textures.js</a>
1. <a href="https://www.browserstack.com/question/39415">Browserstack: Webpages appear to be cached on the remote servers. </a>
1. <a href="https://chartjs-plugin-deferred.netlify.app/guide/">ChartJS plugin: chartjs-plugin-deferred</a>
1. <a href="https://refreshless.com/nouislider/">noUiSlider</a>
1. <a href="https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/">ChartJS starter examples</a>
1. <a href="https://stackoverflow.com/questions/1484506/random-color-generator">Stackoverflow: Random color generator</a>
1. <a href="https://plyr.io/#audio">Plyr: A simple, accessible and customisable media player</a>
1. <a href="https://wiki.owain.codes/coding/umbraco/rosyln-error">Roslyn error</a>
1. <a href="https://css-tricks.com/useful-nth-child-recipies/">Useful :nth-child Recipes</a>
1. <a href="https://www.accessibilityassociation.org/s/was-sample-exam-questions">WAS Sample Exam Questions</a>
1. <a href="https://laracasts.com">Laracasts</a>
1. <a href="https://gitmoji.dev/">Gitmoji</a>
1. <a href="https://stackoverflow.com/questions/45652229/values-above-points-chart-js">Stackoverflow: Values above points - chart.js</a>
1. <a href="https://app.daily.dev/">Daily.dev</a>
1. <a href="https://stackoverflow.com/questions/25847297/slick-js-get-current-and-total-slides-ie-3-5">Stackoverflow: Slick.js: Get current and total slides (ie. 3/5)</a>
1. <a href="https://blog.dudak.me/2014/css-shadows-under-adjacent-elements/">CSS shadows under adjacent elements</a>
1. <a href="https://ray.so/">Create beautiful images of your code</a>
1. <a href="https://moderncss.dev/">Modern CSS Solutions for Old CSS Problems</a>
1. <a href="https://www.toptal.com/designers/subtlepatterns/scribble-light/">Scribble Light Pattern</a>
1. <a href="https://www.brunildo.org/test/Overflowxy2.html">overflow-x, overflow-y tests</a>
1. <a href="https://tperabo.blogspot.com/2017/05/slick-with-dragdealer.html">slick with Dragdealer</a>
1. <a href="https://onlinephp.io/c/9fc11">PHP Sandbox</a>
1. <a href="https://jakearchibald.com/2022/img-aspect-ratio/">Avoiding <img> layout shifts: aspect-ratio vs width & height attributes</a>
1. <a href="https://ericwbailey.website/">Eric Bailey</a>
1. <a href="https://24days.in/umbraco-cms/2022/hero-banners/">Hero banners - Not quite the hero we think they are</a>
1. <a href="https://github.com/amirshnll/custom-device-emulation-chrome">custom-device-emulation-chrome</a>
1. <a href="https://gtmetrix.com/">GTMatrix</a>
1. <a href="https://file-examples.com/">File examples</a>
1. <a href="https://yoksel.github.io/url-encoder/">URL-encoder for SVG</a>

