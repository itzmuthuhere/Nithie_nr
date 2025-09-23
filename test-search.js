// Quick test to verify search functionality
const testArticle = {
  title: "Top 5 Online Insurance Applications: Find the Best Coverage in 2025",
  description: "Discover the best online insurance applications that make finding and comparing coverage simple. Complete guide to digital insurance platforms in 2025.",
  tags: ["insurance", "online", "application", "coverage", "digital"],
  author: "Nithie_nr Team"
};

function searchArticles(articles, query) {
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

// Test different search queries
const articles = [testArticle];

console.log("Testing search functionality:");
console.log("1. Full title search:");
const result1 = searchArticles(articles, "Top 5 Online Insurance Applications: Find the Best Coverage in 2025");
console.log("Found:", result1.length > 0 ? "YES" : "NO");

console.log("2. Partial title search:");
const result2 = searchArticles(articles, "Top 5 Online Insurance Applications");
console.log("Found:", result2.length > 0 ? "YES" : "NO");

console.log("3. Key terms search:");
const result3 = searchArticles(articles, "insurance applications");
console.log("Found:", result3.length > 0 ? "YES" : "NO");

console.log("4. Single word search:");
const result4 = searchArticles(articles, "insurance");
console.log("Found:", result4.length > 0 ? "YES" : "NO");