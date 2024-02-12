---
title: Making ASCII art accessible
description: A little how-to, based on W3C recommendations
date: 2024-02-12
tags:
  - dev
rss: true
---

<div class="card mb-1 d-ib">
  <pre role="img" aria-label="Cute ASCII Fish with bubbles coming out of it's mouth" class="card__image">o           .'`/
    '      /  (
  O    .-'` ` `'-._      .')
      _/ (o)        '.  .' /
      )       )))     ><  <
      `\  |_\      _.'  '. \
        '-._  _ .-'       '.)
    jgs     `\__\</pre>
</div>

According to the w3c recommendation, there is a nice and simple way to make ASCII art accesible rather than a garbled mess of punctuation.

In this fishy example provided in the [HTML-ARIA recommendation document](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role), <abbr title="World Wide Web Consortium">W3C</abbr> have put the art inside a `figure` element with a `figcaption`, but you don't have to do this, as long as you have accurately described your ASCII art with an `aria-label` and added the `role="img"` onto the `pre` or `code` element, this is enough to make it work accessibly!

This will work any type of text based art, nopt just ASCII, it's easy to add and means that everyone can enjoy your <code class="hidden d-i" role="img" aria-label="internet aesthetic">i̐̽͑n͊̕͝ẗ́͊͒e̒̀̓r͊͒͊n̿̔͝e̽̒͌t͌͝͝ a̼̝e͉͕͉s͓͓͓t͍͍̦h̼͖͜e̦̘̫ț͓͔i̝̞̟c̘͖</code>.

Using this method, this is what the ASCII art fishy will look like to assistive technologies, such as screen readers:

<img class="mb-1" src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgsAAAAmBAMAAAC43MU8AAAALVBMVEUjIyf/felMNEvdb8uXUo26YaxxQ2t1v/9bjrtOdZhAWnOHh4kyQE9op95gYGNy1eR1AAACvUlEQVRo3u2Yv48SQRTHv/z0IHBhEKlvJfSACTXG5WoOlZoLP+rrVk1MtrvGgo7kKjvj30ByoTMxFnSYq66/f8Lv44XlDhFNdGPIzofJ7LyX92Z2vjO7wMBisVgsf0B+gdBJuR1txGvYxzOQysZkvJpBLSXxZHduwPZYTinoDW38PyhD3JQf3NpLpEyBTscUWehImAI2M1Z2y4AR9rMtQxPKThlmhJeln7mcTpZvMPX8T29x5OPfkxp3Yn3OoHtmymnTAnl9MgDohCuFJFbLnDadSr1Ds4sETcarWanXmM6ahTKwE0aCmELSdNqlEoOr9VrSyE6hR8fSNhog2hvH0sSAu9nsmpesn7m58ZH/tniU84/mlCEURhAZuB5VdGmmxy3nhM4HMtCOAU5fbrvnVmkyXkxx9pjOmoV+dsJIyRJ1my8GIzoZWUEBEI+Ope3nRpzaG9HEgOPZ7FZluLryLz3KkPW8jwgJdy3D+WqRUqjB9N37MhhZ5lRRwmievhqublxN1i4brFnoZyeMXPlpu+6QMkikykCPjqVt3Q2BDJq44e4aaxk+XOTn3rvsBKHRXsswhBCT90G5vb0beKnpvIftfTIMIZE/yxAz/d/KoIkbjm83Miy+fJ0gdwGE9VDwEXDSRS6WA2Eoc2/SuS0DGjrv6mlPzEIgQ5HprFnodyCR+lAM0AhkUI3p0bG0HcigHk3cxvM+86FYfp973nzqhfZuSHMbP+7irJyUfcCpVc5NJ33/m0K2SDlmWjrv2NMiTcar6ZgW01mz0M9OGEl/XF6RLcpAp+yGVVf06Fja1mkzQD2S+Gsyk8wEh47Lz9+R897j4HFMDRaLxWKxHDzy41iPHyJNtGXgeYCeAej5QWocTRl4HhCcAcj5QUThX5/gzy9rRBQrw1qG9RlAxGUIzgAiLIPFYrFYLBbLofMDkmilthyqGUEAAAAASUVORK5CYII=" alt="A screenshot of the accessibility tree, showing the image labelled as 'Cute ASCII Fish with bubbles coming out of it's mouth'">

Copy the code below, add your art, and change the `aria-label` and you will have made your website more accessible!

```html
<pre role="img" aria-label="Cute ASCII Fish with bubbles coming out of it's mouth">
o           .'`/
    '      /  (
  O    .-'` ` `'-._      .')
      _/ (o)        '.  .' /
      )       )))     ><  <
      `\  |_\      _.'  '. \
        '-._  _ .-'       '.)
    jgs     `\__\
</pre>
```

Happy ASCII arting!
<pre class="hidden" role="img" aria-label="Bear emoticon">
ʕ•́ᴥ•̀ʔっ
</pre>