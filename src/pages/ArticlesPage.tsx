import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Filter, Calendar, User } from 'lucide-react';
import SEO from '../components/SEO';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import { loadArticles, paginateArticles, Article } from '../utils/articles';
import { siteConfig } from '../config';

const ArticlesPage: React.FC = () => {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await loadArticles();
        setAllArticles(articles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const sortedArticles = React.useMemo(() => {
    const sorted = [...allArticles];
    if (sortBy === 'date') {
      return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
  }, [allArticles, sortBy]);

  const paginatedData = paginateArticles(sortedArticles, currentPage, siteConfig.articlesPerPage);

  return (
    <>
      <SEO 
        title={`All Articles - ${siteConfig.title}`}
        description="Explore our comprehensive collection of articles covering technology, innovation, and industry insights."
        type="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-white to-rose-50/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-cyan-800 text-white py-20">
          <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
                <BookOpen className="h-4 w-4 mr-2" />
                {allArticles.length} Articles Available
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Our <span className="gradient-text">Article Collection</span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover insights, trends, and expert analysis across technology and innovation
              </p>
            </div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-8 border-b border-gray-200 bg-white">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter className="h-5 w-5" />
                <span className="font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                  className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="date">Latest First</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">
                  Showing {paginatedData.articles.length} of {allArticles.length} articles
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
                <span className="ml-4 text-gray-600 font-medium">Loading articles...</span>
              </div>
            ) : allArticles.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Articles Found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We're working on adding great content. Check back soon for the latest articles and insights.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {paginatedData.articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>

                {paginatedData.totalPages > 1 && (
                  <div className="flex justify-center">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={paginatedData.totalPages}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticlesPage;