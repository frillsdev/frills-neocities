const { DateTime } = require("luxon");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation"); //need
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy"); //need
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const pluginDrafts = require("./eleventy.config.drafts.js");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({"./assets/": "/"});
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	// App plugins
	eleventyConfig.addPlugin(pluginDrafts);

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});

	// Filters
	eleventyConfig.addFilter("encodeUrl", function (rawUrl) {
		return encodeURIComponent(rawUrl);
	});

	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	eleventyConfig.addFilter("getWebmentionsForUrl", (webmentions, url) => {
		const allowedTypes = ['mention-of', 'in-reply-to', 'like-of']
		
		return webmentions
			.filter(entry => entry['wm-target'] === url)
			.filter(entry => allowedTypes.includes(entry['wm-property']))
		}
	)

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addCollection("tagList", collection => {
		const tagsObject = {}
		collection.getAll().forEach(item => {
		if (!item.data.tags) return;
		item.data.tags
			.filter(tag => !['post', 'all'].includes(tag))
			.forEach(tag => {
			if(typeof tagsObject[tag] === 'undefined') {
				tagsObject[tag] = 1
			} else {
				tagsObject[tag] += 1
			}
			});
		});

		const tagList = []
		Object.keys(tagsObject).forEach(tag => {
		tagList.push({ tagName: tag, tagCount: tagsObject[tag] })
		})
	return tagList.sort((a, b) => b.tagCount - a.tagCount)
	});

	return {
		templateFormats: [
			"md",
			"njk",
			"html",
			"11ty.js"
		],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "content",
			includes: "../structure",
			data: "../_data",
			output: "site"
		},
		pathPrefix: "/",
	};
};
