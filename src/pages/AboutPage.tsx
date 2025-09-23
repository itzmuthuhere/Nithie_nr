import React from 'react';
import SEO from '../components/SEO';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';
import { siteConfig } from '../config';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Nithie_nr and our mission to provide quality technology insights and digital innovation news."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About {siteConfig.title}
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted source for technology insights, insurance guidance, and digital innovation news
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At {siteConfig.title}, we're dedicated to bringing you the latest insights in technology, 
              comprehensive insurance guidance, and breaking news in digital innovation. Our mission is to 
              empower readers with knowledge that helps them navigate the rapidly evolving digital landscape.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Trends</h3>
              <p className="text-gray-600">Stay ahead with the latest technology trends and innovations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Insurance Insights</h3>
              <p className="text-gray-600">Comprehensive guides and tips for insurance applications and policies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
              <p className="text-gray-600">Building a community of informed readers and tech enthusiasts.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-600">Well-researched, original content that adds real value.</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Founded with a passion for technology and a commitment to helping people make informed decisions, 
              {siteConfig.title} has grown into a trusted platform for readers seeking reliable information about 
              the digital world around us.
            </p>
            <p className="text-gray-700 mb-6">
              We understand that technology can be overwhelming, and insurance decisions can be complex. That's why 
              we focus on breaking down complicated topics into digestible, actionable insights that our readers 
              can actually use in their daily lives.
            </p>
            <p className="text-gray-700">
              Whether you're looking to upgrade your internet connection from 4G to 5G, find the best insurance 
              application online, or stay current with the latest tech developments, we're here to guide you 
              through the process with clear, comprehensive information.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accuracy</h3>
              <p className="text-gray-600">
                We prioritize factual accuracy and thoroughly research every piece of information we share.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Complex topics are made simple and accessible to readers of all technical backgrounds.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technological developments to bring you the latest insights.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have questions, suggestions, or feedback? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </>
  );
};

export default AboutPage;