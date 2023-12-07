---
title: Edit everything with this bookmarklet
date: 2023-12-07
tags:
  - dev
rss: true
---

In the dev world, you gotta test lots of stuff. One of those things is content and making sure what you have built will work for a myriad of different types and lengths of content.

I made a little bookmarklet for this to be done in the browser, all it does is added the `contenteditable` attribute to literally every element on the page and you can change the text to whatever you want.

To install the bookmarklet, drag and drop the button below into your bookmarks toolbar.

<a class="button secondary d-ib" href="javascript:(function()%7Bdocument.querySelectorAll('*').forEach((function(x)%7Bx.setAttribute(%22contenteditable%22%2Ctrue)%3B%7D))%7D)()%3B">Edit everything!</a>