---
title: Edit everything with this bookmarklet
date: 2023-12-07
tags:
  - dev
rss: true
---

In the dev world, you gotta test lots of stuff. One of those things is content and making sure what you have built will work for a myriad of different types and lengths of content.

I made a little bookmarklet for this to be done in the browser, all it does is add the `contenteditable` attribute to literally every element on the page and you can change the text to whatever you want.

To install the bookmarklet, drag and drop the button below into your bookmarks toolbar.

<a href="javascript:(function()%7Bdocument.querySelectorAll(%22body%20*%22).forEach(function%20(x)%20%7B%0A%20%20if%20(x.getAttribute(%22contenteditable%22)%20%3D%3D%20%22true%22)%20%7B%0A%20%20%20%20x.setAttribute(%22contenteditable%22%2C%20false)%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20x.setAttribute(%22contenteditable%22%2C%20true)%3B%0A%20%20%7D%0A%7D)%3B%7D)()%3B" class="button">Edit everything!</a>
