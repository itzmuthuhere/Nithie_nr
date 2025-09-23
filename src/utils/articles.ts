import { marked } from 'marked';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser environment
if (typeof window !== 'undefined') {
  (window as any).Buffer = Buffer;
}

export interface ArticleFrontmatter {
  title: string;
  date: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  canonical?: string;
}

export interface Article extends ArticleFrontmatter {
  content: string;
  readingTime: number;
}

// Import all markdown files
const articleModules = import.meta.glob('../articles/*.md', { as: 'raw' });

let articlesCache: Article[] | null = null;

export async function loadArticles(): Promise<Article[]> {
  if (articlesCache) {
    return articlesCache;
  }

  const articles: Article[] = [];
  
  try {
    console.log('Loading articles...', Object.keys(articleModules));
    
    for (const path in articleModules) {
      try {
        console.log('Processing article:', path);
        const content = await articleModules[path]();
        if (!content) {
          console.warn('No content for article:', path);
          continue;
        }
        
        const { data, content: markdown } = matter(content);
        const frontmatter = data as ArticleFrontmatter;
        
        // Validate required frontmatter fields
        if (!frontmatter.title || !frontmatter.slug || !frontmatter.date) {
          console.warn('Invalid frontmatter for article:', path, frontmatter);
          continue;
        }
        
        const wordCount = markdown.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // ~200 words per minute
        
        articles.push({
          ...frontmatter,
          content: marked(markdown),
          readingTime,
        });
        
        console.log('Successfully loaded article:', frontmatter.title);
      } catch (error) {
        console.error('Error processing article:', path);
        console.error('Error details:', error);
        console.error('Error message:', error instanceof Error ? error.message : String(error));
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      }
    }
    
    console.log('Total articles loaded:', articles.length);
    
    // Sort by date (newest first)
    articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    articlesCache = articles;
    return articles;
  } catch (error) {
    console.error('Error loading articles:', error);
    throw error;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await loadArticles();
  return articles.find(article => article.slug === slug) || null;
}

export async function getRelatedArticles(currentSlug: string, tags: string[], limit = 3): Promise<Article[]> {
  const articles = await loadArticles();
  
  return articles
    .filter(article => 
      article.slug !== currentSlug && 
      article.tags.some(tag => tags.includes(tag))
    )
    .slice(0, limit);
}

export function searchArticles(articles: Article[], query: string): Article[] {
  if (!query.trim()) return articles;
  
  const normalizedQuery = query.toLowerCase().trim();
  const searchTerms = normalizedQuery.split(/\s+/).filter(term => term.length > 0);
  
  // Score articles based on relevance
  const scoredArticles = articles.map(article => {
    const searchableText = [
      article.title,
      article.description,
      ...article.tags,
      article.author
    ].join(' ').toLowerCase();
    
    let score = 0;
    
    // Exact phrase match in title (highest priority)
    if (article.title.toLowerCase().includes(normalizedQuery)) {
      score += 100;
    }
    
    // Exact phrase match in description
    if (article.description.toLowerCase().includes(normalizedQuery)) {
      score += 50;
    }
    
    // Exact phrase match in searchable text
    if (searchableText.includes(normalizedQuery)) {
      score += 30;
    }
    
    // Individual word matches
    const matchedTerms = searchTerms.filter(term => searchableText.includes(term));
    const matchRatio = matchedTerms.length / searchTerms.length;
    
    // Bonus for matching all terms
    if (matchRatio === 1) {
      score += 20;
    }
    
    // Score based on how many terms match
    score += matchedTerms.length * 5;
    
    // Bonus for matches in title vs other fields
    const titleMatches = searchTerms.filter(term => 
      article.title.toLowerCase().includes(term)
    ).length;
    score += titleMatches * 10;
    
    // Bonus for matches in tags
    const tagMatches = searchTerms.filter(term => 
      article.tags.some(tag => tag.toLowerCase().includes(term))
    ).length;
    score += tagMatches * 8;
    
    return { article, score };
  });
  
  // Filter articles with score > 0 and sort by relevance
  return scoredArticles
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ article }) => article);
}

export function paginateArticles(articles: Article[], page: number, perPage: number) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  
  return {
    articles: articles.slice(startIndex, endIndex),
    totalPages: Math.ceil(articles.length / perPage),
    currentPage: page,
    hasNext: endIndex < articles.length,
    hasPrev: page > 1,
  };
}