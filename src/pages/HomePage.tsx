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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100 section-padding">
        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600 mb-8 border border-gray-200">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              Trusted by 50,000+ tech enthusiasts worldwide
            </div>
            <h1 className="font-display font-bold mb-6 leading-tight animate-slide-up text-gray-900">
              {/* Hey, I'm <span className="gradient-text">Nithie NR</span> <br /> */}
              <span className="gradient-text">Your Tech Guide & Deal Hunter</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
              <Link to="/articles" className="btn-primary">
                🔥 Latest Reviews & Deals
              </Link>
              <Link to="/about" className="btn-secondary">
                About Nithie
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-gray-900">Honest Reviews</h3>
                <p className="text-gray-600 text-sm text-center">Unbiased tech reviews from a real user's perspective</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-gray-900">Best Deals</h3>
                <p className="text-gray-600 text-sm text-center">Curated deals and discounts on top tech products</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2 text-gray-900">Easy Tutorials</h3>
                <p className="text-gray-600 text-sm text-center">Step-by-step guides to help you master tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-gray-50 py-12 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
              Find What You Need
            </h2>
            <p className="text-gray-600">
              Search through reviews, tutorials, and deals to find exactly what you're looking for
            </p>
          </div>
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search reviews, deals, tutorials..."
            initialValue={searchQuery}
          />
        </div>
      </section>

      {/* Top Banner Ad */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder size="banner" />
        </div>
      </section>

      {/* Featured Articles */}
      {!searchQuery && (
        <section className="section-padding bg-white">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-gray-900 mb-4">
                🌟 Featured Content
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My latest reviews, hottest deals, and most helpful tutorials - handpicked just for you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="font-display font-bold text-gray-900 mb-2">
                {searchQuery ? `Search Results` : '📚 Latest Posts'}
              </h2>
              {searchQuery && (
                <p className="text-gray-600">
                  Results for "<span className="font-medium text-gray-800">{searchQuery}</span>"
                </p>
              )}
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                {filteredArticles.length} post{filteredArticles.length !== 1 ? 's' : ''} found
              </span>
            </div>
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
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-12 w-12 text-secondary-400" />
              </div>
              <h3 className="text-xl font-display font-semibold text-secondary-900 mb-2">
                No posts found
              </h3>
              <p className="text-secondary-600 text-lg mb-6">
                Couldn't find what you're looking for? Try a different search term or browse all posts.
              </p>
              <button
                onClick={() => handleSearch('')}
                className="btn-primary"
              >
                View All Posts
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Banner Ad */}
      <section className="bg-rose-50/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdPlaceholder size="banner" />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white section-padding">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="font-display font-bold mb-4">
              🚀 Join the Nithie NR Community
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Get exclusive deals, early access to reviews, and tech tips delivered straight to your inbox. Plus, never miss a money-saving opportunity!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email for exclusive deals & updates"
              className="flex-1 px-6 py-4 rounded-xl text-secondary-900 bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-secondary-500"
            />
            <button className="px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Deals 🎯
            </button>
          </div>
          <p className="text-sm text-primary-200 mt-4">
            💯 Free forever. Unsubscribe anytime. I hate spam as much as you do.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomePage;