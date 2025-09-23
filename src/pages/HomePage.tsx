import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import AdPlaceholder from '../components/AdPlaceholder';
import { loadArticles, searchArticles, paginateArticles, Article } from '../utils/articles';
import { siteConfig } from '../config';
import { TrendingUp, BookOpen, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await loadArticles();
        setAllArticles(articles);
        setFilteredArticles(articles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = searchArticles(allArticles, query);
    setFilteredArticles(filtered);
    setCurrentPage(1);
  };

  const paginatedData = paginateArticles(
    filteredArticles,
    currentPage,
    siteConfig.articlesPerPage
  );

  const featuredArticles = allArticles.slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to {siteConfig.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your ultimate source for technology insights, insurance guidance, and digital innovation news
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6" />
                <span>Latest Trends</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6" />
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span>Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search articles by title, description, or tags..."
            initialValue={searchQuery}
          />
        </div>
      </section>

      {/* Top Banner Ad */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder size="banner" />
        </div>
      </section>

      {/* Featured Articles */}
      {!searchQuery && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
            </h2>
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {paginatedData.articles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                No articles found matching your search.
              </p>
              <button
                onClick={() => handleSearch('')}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear search and show all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Banner Ad */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder size="banner" />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-8">
            Get the latest articles and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;