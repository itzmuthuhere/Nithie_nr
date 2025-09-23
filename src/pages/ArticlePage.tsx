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
      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-200 border-t-primary-600 mx-auto mb-4"></div>
          <p className="text-secondary-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40 flex flex-col items-center justify-center px-4">
        <div className="card p-12 text-center max-w-md">
          <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-display font-bold text-secondary-900 mb-4">Article Not Found</h1>
          <p className="text-secondary-600 mb-8">The article you're looking for doesn't exist or may have been moved.</p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
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

      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Articles</span>
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm font-medium px-4 py-2 rounded-full border border-primary-200"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center text-secondary-600 text-base mb-8 gap-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <Calendar className="h-4 w-4 text-primary-600" />
                </div>
                <span className="font-medium">{new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
                  <User className="h-4 w-4 text-secondary-600" />
                </div>
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4 text-accent-600" />
                </div>
                <span className="font-medium">{article.readingTime} min read</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="card p-6 bg-white/70 backdrop-blur-sm">
              <ShareButtons
                url={articleUrl}
                title={article.title}
                description={article.description}
              />
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>

          {/* Top Article Ad */}
          <div className="mb-12">
            <AdPlaceholder size="rectangle" />
          </div>

          {/* Article Content */}
          <div className="card p-8 md:p-12 bg-white/80 backdrop-blur-sm mb-12">
            <div className="prose prose-lg prose-secondary max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="article-content leading-relaxed"
              />
            </div>
          </div>

          {/* Bottom Article Ad */}
          <div className="mb-12">
            <AdPlaceholder size="rectangle" />
          </div>

          {/* Article Footer */}
          <footer className="card p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-t-4 border-primary-500">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-6 sm:mb-0">
                <p className="text-secondary-700 font-medium mb-2">
                  Published on {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })} by <span className="font-bold text-secondary-900">{article.author}</span>
                </p>
                <p className="text-secondary-600 text-sm">
                  Part of our commitment to delivering intelligent insights where technology meets expertise.
                </p>
              </div>
              <div className="flex-shrink-0">
                <ShareButtons
                  url={articleUrl}
                  title={article.title}
                  description={article.description}
                />
              </div>
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-20 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                  Related <span className="gradient-text">Insights</span>
                </h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                  Continue exploring our expert analysis and intelligence-driven content
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ArticlePage;