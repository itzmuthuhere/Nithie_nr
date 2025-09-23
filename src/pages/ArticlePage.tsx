import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import AdPlaceholder from '../components/AdPlaceholder';
import ArticleCard from '../components/ArticleCard';
import { getArticleBySlug, getRelatedArticles, Article } from '../utils/articles';
import { siteConfig } from '../config';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      try {
        const articleData = await getArticleBySlug(slug);
        if (articleData) {
          setArticle(articleData);
          const related = await getRelatedArticles(articleData.slug, articleData.tags);
          setRelatedArticles(related);
        }
      } catch (error) {
        console.error('Error loading article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  useEffect(() => {
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [article]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const articleUrl = `https://${siteConfig.domain}/article/${article.slug}`;
  const canonicalUrl = article.canonical || articleUrl;

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        image={article.image}
        canonical={canonicalUrl}
        type="article"
        article={{
          publishedTime: article.date,
          author: article.author,
          tags: article.tags,
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Articles</span>
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                <Tag className="h-3 w-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6">
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <User className="h-4 w-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="h-4 w-4 mr-2" />
              <span>{article.readingTime} minute read</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mb-8">
            <ShareButtons
              url={articleUrl}
              title={article.title}
              description={article.description}
            />
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
            loading="eager"
          />
        </div>

        {/* Top Article Ad */}
        <div className="mb-8">
          <AdPlaceholder size="rectangle" />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }}
            className="article-content"
          />
        </div>

        {/* Bottom Article Ad */}
        <div className="mt-12 mb-8">
          <AdPlaceholder size="rectangle" />
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-600 text-sm">
                Published on {new Date(article.date).toLocaleDateString()} by {article.author}
              </p>
            </div>
            <ShareButtons
              url={articleUrl}
              title={article.title}
              description={article.description}
            />
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ArticlePage;