#!/usr/bin/env node

import fs from 'fs/fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://{{YOUR_DOMAIN}}'; // Replace with your actual domain
const ARTICLES_DIR = path.join(__dirname, '../src/articles');
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// Static pages
const staticPages = [
  { url: '', priority: '1.0' },
  { url: '/about', priority: '0.8' },
  { url: '/contact', priority: '0.8' },
  { url: '/search', priority: '0.7' },
  { url: '/privacy', priority: '0.5' },
  { url: '/terms', priority: '0.5' },
];

async function generateSitemap() {
  try {
    console.log('🗺️  Generating sitemap...');

    // Read article files
    const articleFiles = fs.readdirSync(ARTICLES_DIR)
      .filter(file => file.endsWith('.md'))
      .sort();

    // Parse articles and extract metadata
    const articles = [];
    for (const file of articleFiles) {
      const filePath = path.join(ARTICLES_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      articles.push({
        slug: data.slug,
        date: data.date,
        title: data.title
      });
    }

    // Sort articles by date (newest first)
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate XML sitemap
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Add static pages
    for (const page of staticPages) {
      sitemap += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    }

    // Add article pages
    for (const article of articles) {
      sitemap += `  <url>
    <loc>${SITE_URL}/article/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`;
    }

    sitemap += `</urlset>`;

    // Write sitemap to file
    fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8');

    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📄 ${articles.length} articles + ${staticPages.length} static pages`);
    console.log(`📍 Saved to: ${OUTPUT_FILE}`);
    console.log(`🌐 Remember to replace {{YOUR_DOMAIN}} with your actual domain!`);

  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateSitemap();