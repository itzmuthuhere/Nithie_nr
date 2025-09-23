import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../config';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.description,
  image = `https://${siteConfig.domain}/og-default.jpg`,
  canonical,
  type = 'website',
  article,
}) => {
  const fullTitle = title ? `${title} | ${siteConfig.title}` : siteConfig.title;
  const canonicalUrl = canonical || `https://${siteConfig.domain}`;
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    headline: title || siteConfig.title,
    description,
    image,
    url: canonicalUrl,
    ...(type === 'article' && article && {
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime || article.publishedTime,
      author: {
        '@type': 'Person',
        name: article.author || siteConfig.author,
      },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.title,
        logo: {
          '@type': 'ImageObject',
          url: `https://${siteConfig.domain}/logo.png`,
        },
      },
      keywords: article.tags?.join(', '),
    }),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.title} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific */}
      {type === 'article' && article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime || article.publishedTime} />
          <meta property="article:author" content={article.author || siteConfig.author} />
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;