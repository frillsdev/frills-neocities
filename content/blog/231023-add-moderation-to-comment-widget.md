---
title: Adding moderation to Virtual Observer's comment widget
date: 2023-10-23
tags:
  - dev
rss: true
---

A friend highlighted to me that [my guestbook](/guestbook) didn't have any moderation, I get emails every time someone submits a comment, but depending on my access to a device, a potentially harmful comment could be left exposed to others until I am able to delete it.

My guestbook is based on [Virtual Observer's comment widget](https://virtualobserver.moe/ayano/comment-widget), which uses a Google sheet as a database, it's super clever and up until now I've only made a couple of minor modifications to fit my website. This modification is more functional and could benefit others significantly, so here is my walkthrough on how to do it yourself. To get to this point, you should already have followed the rest of Virtual Observer's instructions on how to install the comment widget.

## How to do it

1. Go to the form that you set up for your comment widget and add a new short-answer text question at the bottom.
1. Name this question 'Moderated'. Don't forget the capitalise the first letter as the code is case sensitive.
1. Add response validation by clicking the three dots on the bottom left of the questions, selecting 'Response Validation' and adding the settings: "Text" "Contains" "false" (this is important to stop heck0rz) <a href="#star1" id="return1" aria-label="Jump to asterisk">*</a>
1. From your Google form, press the three dots in the top left corner and then 'Get pre-filled link'. This will open a new tab with your form, as if you were answering it. Fill in every field with the same name as its respective title and then press 'Get link'.
4. Paste the link into a text editor and scoop out the number after the final `entry.` which should have the value that you filled in: 'Moderated'. It will look something like this:
```js
&entry.123456789=Moderated
```
5. In the file that you originally downloaded from Virtual Observer, find the variable `const s_textId = '123456789';` and paste the following on the line below, replacing the number with the number you scooped out in step 4.
```js
const s_moderatedId = '123456789'; // The Moderated field ID
```
6. Now we need to add a hidden input field that automatically sets this value to false in your Google sheet. Find the textarea with `id="entry.${s_textId}"` and below this line, add the following.
```html
<input name="entry.${s_moderatedId}" id="entry.${s_moderatedId}" type="hidden" readonly value="false">
```
7. Next, find `name.className = 'c-name';` and below this line add the following:
```js
if(data.Moderated == false) {
    name.innerText = 'Guest'; // Change 'Guest' to whatever you want
}
```
8. Next, find `site.className = 'c-site';` and below this line add the following:
```js
if(data.Moderated == false) {
    site.innerText = '';
}
```
9. Next, find `text.className = 'c-text';` and below this line add the following:
```js
if(data.Moderated == false) {
    text.innerText = 'This comment is awaiting moderation'; // Change this value to whatever you want
}
```

And you're done! If you already have comments stored in your Google sheet, change the 'Moderated' value to TRUE for them to show.

When a new comment is submitted the 'Moderated' value will be FALSE. Once you're happy for the comment to be displayed on your website, go into your Google sheet and change it to TRUE.

If you implement this, [leave me a comment](/guestbook) in my guestbook to let me know!<br> I'd love to know if this is useful to you.

---

<a href="#return1" id="star1" aria-label="Jump back to instructions">*</a> 👍 Thank you to '[Robert](/guestbook/#Robert|--|21/03/2025 19:41:31)' for this addition.
