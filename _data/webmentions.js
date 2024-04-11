const fs = require("fs");
const fetch = require("node-fetch");

fetch('https://webmention.io/api/mentions.jf2?token=jnh-mOU3cWyJYca2T4x3vg')
  .then(response => response.json())
  .then(data => fs.writeFileSync('_data/webmentions.json', JSON.stringify(data)))
  .catch(error => console.error('Error:', error));