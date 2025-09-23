import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { Article } from '../utils/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="card group overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <Link to={`/article/${article.slug}`}>
        <div className="aspect-video relative overflow-hidden bg-secondary-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4">
            {article.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="inline-block bg-primary-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mr-2 mb-1 shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center text-sm text-secondary-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1.5" />
            <span className="font-medium">{new Date(article.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1.5" />
            <span className="font-medium">{article.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5" />
            <span className="font-medium">{article.readingTime} min</span>
          </div>
        </div>

        <Link to={`/article/${article.slug}`}>
          <h2 className="text-xl font-display font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
            {article.title}
          </h2>
        </Link>

        <p className="text-secondary-600 mb-6 line-clamp-3 leading-relaxed">
          {article.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.slice(2, 4).map(tag => (
              <span
                key={tag}
                className="text-xs bg-secondary-100 text-secondary-700 px-2.5 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/article/${article.slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors group"
          >
            <span>Read Article</span>
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;