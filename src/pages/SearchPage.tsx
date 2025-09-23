import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import SearchBar from '../components/SearchBar';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import { loadArticles, searchArticles, paginateArticles, Article } from '../utils/articles';
import { siteConfig } from '../config';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await loadArticles();
        setAllArticles(articles);
        const filtered = searchArticles(articles, query);
        setFilteredArticles(filtered);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const filtered = searchArticles(allArticles, query);
    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [query, allArticles]);

  const handleSearch = (newQuery: string) => {
    if (newQuery) {
      setSearchParams({ q: newQuery });
    } else {
      setSearchParams({});
    }
  };

  const paginatedData = paginateArticles(
    filteredArticles,
    currentPage,
    siteConfig.articlesPerPage
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600 mx-auto mb-4"></div>
          <p className="text-secondary-600 font-medium">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={query ? `Search Results for "${query}"` : 'Search Articles'}
        description={`Search through our comprehensive collection of articles on technology intelligence, digital innovation, and business insights.`}
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="gradient-text">Discover</span> Insights
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Search our comprehensive library of technology intelligence, digital innovation insights, 
                and expert analysis across multiple domains.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="card p-8 bg-white/70 backdrop-blur-sm">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search for insights, technologies, trends..."
                initialValue={query}
              />
            </div>
          </div>

          {/* Search Results Header */}
          {query && (
            <div className="mb-12">
              <div className="card p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
                  Search Results for "<span className="gradient-text">{query}</span>"
                </h2>
                <p className="text-lg text-secondary-600">
                  Found {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} 
                  {filteredArticles.length > 0 && ' matching your search criteria'}
                </p>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          {paginatedData.articles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {paginatedData.articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={paginatedData.totalPages}
                onPageChange={setCurrentPage}
                hasNext={paginatedData.hasNext}
                hasPrev={paginatedData.hasPrev}
              />
            </>
          ) : query ? (
            <div className="card p-12 text-center bg-white/70 backdrop-blur-sm">
              <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">No Results Found</h3>
              <p className="text-lg text-secondary-600 mb-6">
                We couldn't find any articles matching your search. Try different keywords or browse our latest content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleSearch('')}
                  className="btn-primary"
                >
                  Browse All Articles
                </button>
                <a href="/contact" className="btn-outline">
                  Suggest a Topic
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-4">
                  Featured <span className="gradient-text">Articles</span>
                </h2>
                <p className="text-lg text-secondary-600">
                  Explore our most popular insights and latest analyses
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allArticles.slice(0, 9).map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;