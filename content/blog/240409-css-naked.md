---
title: Stripping down to my HTML
description: Showing off my semantic &lt;body&gt;!
date: 2024-04-09 18:30:00
tags:
- dev
rss: true
kudos: 🎨
---

It's the 9th of April, which I learnt this morning, is CSS Naked Day.. heck yeah am I participating in that internet experiment!

👉 [See who else is participating in CSS Naked Day 2024](https://css-naked-day.github.io/2024.html).

Code semantics are the shit. Removing the CSS from your website is an easy way to highlight what you need to fix.

## But,  what are 'code semantics'?
It's basically using the right thing for the job. For example you have a list of blog posts with the latest one at the top, the best element for that is an ordered list `ol` with the attribute `reversed`. This provides the context that it's a list, that the order matters and that the last item is at the top!

## What's the point tho?
There are a myriad of HTML elements that all have different uses, and being a good developer is basically having a fundamental understanding of these elements and using them correctly.

Using the right HTML element helps search engine crawlers understand the content of your website, but way more importantly, they are the backbone of the internet for accessibility, helping assistive technology interpret your website from a fancy-dancy swoosh-wooshy website into a document of content for a person using that piece of technology to consume.

## Alright, how do I get better at my semantics?
Spend some time reading through [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). Pick an element and swot up. I was doing this last week on the `<i>` element as I thought it had been deprecated entirely, but actually still has a semantic use to set a piece of text apart from the rest for readibility reasons. Some of those reasons could be (but are not limited to):

- an alternative voice or mood
- use of idiomatic terms from another language (like "et cetera")
- use of technical terms
- adding inline thoughts. <i>"Wow, I didn't realise that!", she exclaimed.</i>


## Fixes I made after switching off my CSS
There is something super satisfying about using the absolute correct HTML element, and other than deciding on class names, it might be the biggest thing I spend my time on as a developer.

Saying that, in turning off my CSS for CSS Naked Day 2024, I still found things I wanted to make better:

- Changed my homepage bio list to use a [description list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl) instead of divs (more semantics!)
- Changed my colour palette on the homepage to use divs instead of lists to remove any semantic meaning from them. I've already hidden them from screen readers using `aria-hidden` as they're jump empty blobs that change colour based on your selected light/dark theme, but there was value in making them generic af (less semantics!)

## Bookmarklet
Toggle CSS on any website, any time of the year!

<a href='{% raw %}javascript:(function(){function d(a,b){a.setAttribute("data-css-storage",b)}function e(a){var b=a.getAttribute("data-css-storage");a.removeAttribute("data-css-storage");return b}var c=[];(function(){var a=document.body,b=a.hasAttribute("data-css-disabled");b?a.removeAttribute(%22data-css-disabled%22):a.setAttribute(%22data-css-disabled%22,%22%22);return%20b})()?(c=document.querySelectorAll(%22[data-css-storage]%22),[].slice.call(c).forEach(function(a){%22STYLE%22===a.tagName?a.innerHTML=e(a):%22LINK%22===a.tagName?a.disabled=!1:a.style.cssText=e(a)})):(c=document.querySelectorAll(%22[style],%20link,%20style%22),[].slice.call(c).forEach(function(a){%22STYLE%22===a.tagName?(d(a,a.innerHTML),a.innerHTML=%22%22):%22LINK%22===a.tagName?(d(a,%22%22),a.disabled=!0):(d(a,a.style.cssText),a.style.cssText=%22%22)}))})();{% endraw %}' class="button ghost">🎨 Toggle CSS</a>

## Archive of a naked frills.dev
I'll add an archive of the main pages later! Maybe once I have my CSS back 😜

{# Here is what frills.dev looked like on CSS Naked Day 2024!

<figure class="card mb-2">
  <div class="card__image screen">
    <img src="/images/blog/frills-nocss-homepage.png" alt="Great alt text" loading="lazy" data-object-fit="cover">
  </div>
</figure>

<figure class="card mb-2">
  <div class="card__image screen">
    <img src="/images/blog/frills-nocss-blog.png" alt="Great alt text" loading="lazy" data-object-fit="cover">
  </div>
</figure>

<figure class="card mb-2">
  <div class="card__image screen">
    <img src="/images/blog/frills-nocss-links.png" alt="Great alt text" loading="lazy" data-object-fit="cover">
  </div>
</figure>

<figure class="card mb-2">
  <div class="card__image screen">
    <img src="/images/blog/frills-nocss-guestbook.png" alt="Great alt text" loading="lazy" data-object-fit="cover">
  </div>
</figure>

<figure class="card mb-2">
  <div class="card__image screen">
    <img src="/images/blog/frills-nocss-htmlcolours.png" alt="Great alt text" loading="lazy" data-object-fit="cover">
  </div>
</figure> #}