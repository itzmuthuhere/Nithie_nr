import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { Save, Download, AlertTriangle, CheckCircle, Upload } from 'lucide-react';
import { siteConfig } from '../config';

const AdminPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const adminKey = searchParams.get('key');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    slug: '',
    author: siteConfig.author,
    tags: '',
    image: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    // Simple authorization check
    setIsAuthorized(adminKey === siteConfig.adminKey || adminKey === 'demo-key-change-this');
  }, [adminKey]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Auto-generate slug from title if slug is empty
      ...(name === 'title' && !prev.slug ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') } : {})
    }));
  };

  const generateMarkdownContent = () => {
    const tagsArray = formData.tags.split(',').map(tag => `"${tag.trim()}"`).join(', ');
    return `---
title: "${formData.title}"
date: "${formData.date}"
slug: "${formData.slug}"
description: "${formData.description}"
image: "${formData.image}"
tags: [${tagsArray}]
author: "${formData.author}"
canonical: "https://${siteConfig.domain}/article/${formData.slug}"
---

${formData.content}
`;
  };

  const downloadMarkdownFile = () => {
    const content = generateMarkdownContent();
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData.slug}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const submitToGoogleSheets = async () => {
    if (!siteConfig.googleAppsScriptUrl || siteConfig.googleAppsScriptUrl === '{{GOOGLE_APPS_SCRIPT_URL}}') {
      setErrorMessage('Google Apps Script URL not configured. Downloading file instead.');
      downloadMarkdownFile();
      return;
    }

    setSubmitStatus('loading');
    try {
      const response = await fetch(siteConfig.googleAppsScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'article',
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()),
          content: generateMarkdownContent(),
          timestamp: new Date().toISOString(),
        }),
      });

      setSubmitStatus('success');
      setFormData({
        title: '',
        description: '',
        slug: '',
        author: siteConfig.author,
        tags: '',
        image: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to submit to Google Sheets. Try downloading the file instead.');
      console.error('Submission error:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitToGoogleSheets();
  };

  if (!isAuthorized) {
    return (
      <>
        <SEO title="Admin Access" />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Unauthorized Access</h1>
              <p className="text-gray-600 mb-6">
                You need a valid admin key to access this page. Add <code>?key=YOUR_ADMIN_KEY</code> to the URL.
              </p>
              <p className="text-sm text-gray-500">
                Configure your admin key in <code>src/config.ts</code>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Add New Article - Admin" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Add New Article</h1>
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
              <p className="text-yellow-800 text-sm">
                <AlertTriangle className="h-4 w-4 inline mr-1" />
                Admin Mode: This is not secure for production use
              </p>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <p className="text-green-800">Article submitted successfully!</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                <p className="text-red-800">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Article Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter article title"
                />
              </div>

              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                  URL Slug *
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="url-friendly-slug"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                maxLength={160}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Brief description for SEO (max 160 characters)"
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.description.length}/160 characters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Publish Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="technology, insurance, tips"
                />
              </div>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Hero Image URL *
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://images.unsplash.com/..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Use high-quality images from Unsplash, Pexels, or other royalty-free sources
              </p>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Article Content (Markdown) *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={20}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                placeholder="Write your article content in Markdown format..."
              />
              <div className="mt-2 text-sm text-gray-500">
                <p>Markdown formatting supported:</p>
                <ul className="list-disc list-inside ml-4">
                  <li># Heading 1, ## Heading 2, ### Heading 3</li>
                  <li>**bold text**, *italic text*</li>
                  <li>[link text](URL), ![alt text](image-url)</li>
                  <li>- Bullet points, 1. Numbered lists</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={submitStatus === 'loading'}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {submitStatus === 'loading' ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4" />
                    <span>Submit to Google Sheets</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={downloadMarkdownFile}
                className="flex items-center justify-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span>Download as .md File</span>
              </button>
            </div>
          </form>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">Setup Instructions:</h3>
            <ol className="list-decimal list-inside text-blue-800 text-sm space-y-1">
              <li>Configure your Google Apps Script URL in <code>src/config.ts</code></li>
              <li>Or download the .md file and manually add it to <code>src/articles/</code></li>
              <li>Rebuild your site to see new articles</li>
              <li>Change the admin key in production for security</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;