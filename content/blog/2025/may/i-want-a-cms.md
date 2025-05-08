---
title: I want a CMS
description: Tired of the friction!
date: 2025-05-08 12:00:00
tags:
  - dev
rss: true
---

So I have been looking into adding a CMS to my little webbed site.

I like Decap CMS, it's simple, flexible. Works with static site generators by pushing a commit when you add or update a blog post. You can scope it to a collection (blogs/experiments/curios) and add custom fields for different frontmatter attributes.

Very cool.

You can (in theory) handshake the authentication over GitHub which simplifies the security.

The only bloody trouble is the fact I'm hosting on Neocities isn't very compatible with the CMS life.

I followed the instructions, implemented Decap, added the configs. Added the public and secret keys to GitHub. But there seems to be an issue with the auth falling back to Netlify. And I can't deploy it with Netlify because I deploy from GitHub Actions to Neocities.

The short of it is that I either need to have my own mini-server external to Neocities and GitHub to handle the public key hand-off, or I move off Neocities.. which I don't think I am willing to do - for all it's limitations, I adore the community.

I don't know. I got frustrated after spending hours of debugging and need to go back to it. Fresh eyes, fresh brain.