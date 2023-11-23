---
title: How to make an image randomiser
date: 2023-11-17
tags:
  - dev
rss: true
draft: true
scripts: '
<script>
const randomiser = (array, currentNumber) => {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (randomNumber === currentNumber) { randomNumber = Math.floor(Math.random()* array.length) }
    return randomNumber
};
function imageSwapper() {
    const images = [{
            src: "https://picsum.photos/400",
            alt: ""
        },
        {
            src: "https://picsum.photos/401",
            alt: ""
        },
        {
            src: "https://picsum.photos/402",
            alt: ""
        },
    ];
    let diceRoll = randomiser(images);
    const imageContainer = document.getElementById("injectImage");
    const image = imageContainer.appendChild(document.createElement("img"));
    image.id = "injectedImage";
    image.src = images[diceRoll].src;
    image.alt = images[diceRoll].alt;

    document.getElementById("changeImage").addEventListener("click", (event) => {
        console.log("click");
        let reRoll = randomiser(images, diceRoll);
        let image = document.getElementById("injectedImage");
        image.src = images[reRoll].src;
        image.alt = images[reRoll].alt;
    });
}
imageSwapper();
</script>
'
---

I've been a bit obsessed making picrew avatars lately. Inspired by [Sneek Realm's](https://sneekrealm.neocities.org/about/picrew/) and [Hillhouse's](https://hillhouse.neocities.org/picrews) picrew collections, I wanted to [make my own](/collections/avatars/). I was also getting a bit tired of my homepage avatar, but couldn't choose which picrew to replace it with. So... I made an image randomiser!

<div id="injectImage"></div>
<noscript>
    <img src="/images/randomiser/fallback.png" alt="">
</noscript>
<button id="changeImage" type="button">Change image</button>

## What does it do?
1. It loads a random avatar when the page loads
2. Has a button to refresh the avatar without reloading

## How does it do it?
It's a simple set up. We load up a bunch of image URLs into a JavaScript array, roll the randomiser dice to get a number from 0 to [amount of images in your array] and it picks that one out of the array!

## Okay.. show me!
1. Get your pics. Pop them into a folder all together so it's easy to find them. Let's say for this tutorial, you add them to `/images/randomiser`

2. In your HTML, create a container where you want your image to go. Don't forget to add a fallback image inside a `<noscript>` tag for people who don't have JavaScript enabled.
```html
<div id="injectImage"></div>
<noscript>
    <img src="/images/randomiser/fallback.png" alt="">
</noscript>
```

3. To create the randomiser function, copy this into a `<script>` tag in your HTML or wherever you are keeping your JavaScript. 
```js
const randomiser = (array, currentNumber) => {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (randomNumber === currentNumber) { randomNumber = Math.floor(Math.random()* array.length) }
    return randomNumber
};
```

4. To inject a random image into your container, copy this and add your image URLs and alt text into the array.
```js
function imageSwapper() {
    // This is the array. Create an object (the {} bits) for each image
    const images = [
        {   src: "/images/randomiser/image1.png",
            alt: "Write some good alt text here to keep it accessible"
        },
        {   src: "/images/randomiser/image2.png",
            alt: "Write some good alt text here to keep it accessible"
        },
    ]
    // Roll the randomiser on load to get a number
    let diceRoll = randomiser(images);
    // Find the container for it to inject the image into
    const imageContainer = document.getElementById("injectImage");
    // Create the image!
    const image = imageContainer.appendChild(document.createElement("img"));
    // Set id attribute (we will need this for the refresh button)
    image.id="injectedImage"; 
    // Set src attribute
    image.src=images[diceRoll].src; 
    // Set alt attruibute
    image.alt=images[diceRoll].alt; 
}
// Initialise (start) the function
imageSwapper();
```

4. To add a button that changes the image, first create the button in HTML
```html
<button id="changeImage" type="button">Change image</button>
```

5. Second, copy this JavaScript into the `imageSwapper()` function.
```js
document.getElementById("changeImage").addEventListener("click", (event) => {
    // Reroll the randomiser for a new number
    let reRoll = randomiser(images, diceRoll);
    // Find the injected image
    let image = document.getElementById("injectedImage");
    // Overwrite those attributes
    image.src=images[reRoll].src;
    image.alt=images[reRoll].alt;
});
```