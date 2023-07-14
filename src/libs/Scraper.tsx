import { Cheerio } from "cheerio";

async function scrapeMetaTags(url) {
    const proxyUrl = 'https://your-proxy-url.com'; // Replace with your server-side proxy URL
    const response = await fetch(`${proxyUrl}?url=${encodeURIComponent(url)}`);
    const html = await response.text();
    const $ = Cheerio.load(html);
  
    const title = $('title').text();
    const description = $('meta[name="description"]').attr('content');
  
    return { title, description };
  }
  
  module.exports = {
    scrapeMetaTags
  };