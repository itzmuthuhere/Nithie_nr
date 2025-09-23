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
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={query ? `Search Results for "${query}"` : 'Search Articles'}
        description={`Search through our collection of articles on technology, insurance, and digital innovation.`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Articles
          </h1>
          <p className="text-gray-600 mb-8">
            Find articles by title, description, tags, or author
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search articles..."
            initialValue={query}
          />
        </div>

        {/* Search Results */}
        {query && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Search Results for "{query}"
            </h2>
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </div>
        )}

        {/* Articles Grid */}
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
        ) : query ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              No articles found matching your search.
            </p>
            <button
              onClick={() => handleSearch('')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.slice(0, 9).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;