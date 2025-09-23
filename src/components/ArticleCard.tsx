import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { Article } from '../utils/articles';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/article/${article.slug}`}>
        <div className="aspect-video relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            {article.tags.slice(0, 2).map(tag => (
              <span
                key={tag}
                className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mr-1 mb-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{new Date(article.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <User className="h-4 w-4 mr-1" />
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{article.readingTime} min read</span>
        </div>

        <Link to={`/article/${article.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {article.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/article/${article.slug}`}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;