import React from 'react';
import SEO from '../components/SEO';
import { Scale, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Nithie_nr - understanding your rights and responsibilities when using our platform."
      />

      <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center">
                  <Scale className="w-8 h-8 text-secondary-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Clear, fair terms that protect both you and our platform while fostering a valuable community.
              </p>
              <p className="text-secondary-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Introduction */}
          <section className="mb-16">
            <div className="card p-10 bg-gradient-to-r from-secondary-50 to-primary-50 border-l-4 border-secondary-500">
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">Agreement Overview</h2>
              <p className="text-lg text-secondary-700 leading-relaxed">
                Welcome to {siteConfig.title}. By accessing our website and using our services, you agree to be 
                bound by these Terms of Service. These terms establish a legal agreement between you and {siteConfig.title}, 
                designed to ensure a productive and respectful environment for all users.
              </p>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">Acceptance of Terms</h2>
            </div>

            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">By Using Our Service</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    By accessing {siteConfig.title}, you acknowledge that you have read, understood, and agree to be bound by these terms. 
                    If you do not agree with any part of these terms, you should not use our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Updates to Terms</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    We may update these terms from time to time to reflect changes in our services or legal requirements. 
                    We will notify users of significant changes and the updated terms will be posted on this page.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use of Service */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-accent-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">Permitted Use</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">✅ You May</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access and read our content for personal and professional use</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Share our articles with proper attribution</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Subscribe to our newsletter and communications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contact us with questions, feedback, or suggestions</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">❌ You May Not</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Copy, reproduce, or republish our content without permission</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use our service for any illegal or unauthorized purpose</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Attempt to gain unauthorized access to our systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Distribute harmful code, viruses, or malicious content</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">Intellectual Property Rights</h2>
            
            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Our Content</h3>
                <p className="text-secondary-700 leading-relaxed mb-4">
                  All content on {siteConfig.title}, including articles, graphics, logos, and design elements, 
                  is owned by us or our licensors and is protected by copyright and intellectual property laws.
                </p>
                <p className="text-secondary-700 leading-relaxed">
                  You may not use our content for commercial purposes without explicit written permission. 
                  Attribution is required for any permitted sharing or reference to our work.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Your Content</h3>
                <p className="text-secondary-700 leading-relaxed">
                  When you submit content to us (such as comments, feedback, or suggestions), you grant us 
                  a non-exclusive license to use, modify, and publish that content in connection with our services. 
                  You retain ownership of your content and may request its removal at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">Disclaimers & Limitations</h2>
            </div>

            <div className="card p-8 bg-yellow-50 border-l-4 border-yellow-400">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Information Disclaimer</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    The information provided on {siteConfig.title} is for educational and informational purposes only. 
                    While we strive for accuracy, we do not guarantee that all information is complete, current, or error-free. 
                    You should verify important information independently.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Professional Advice</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    Our content is not intended to substitute for professional advice in technology, business, legal, 
                    or financial matters. Always consult with qualified professionals for specific guidance related to your situation.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Service Availability</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    We strive to maintain consistent service availability but do not guarantee uninterrupted access. 
                    We reserve the right to modify, suspend, or discontinue any aspect of our service with reasonable notice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">Limitation of Liability</h2>
            <div className="card p-8">
              <p className="text-secondary-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, {siteConfig.title} and its affiliates shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
              <p className="text-secondary-700 leading-relaxed">
                Our total liability for any claims related to our services shall not exceed the amount you paid us 
                in the twelve months preceding the claim, if any.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">Governing Law</h2>
            <div className="card p-8">
              <p className="text-secondary-700 leading-relaxed">
                These terms are governed by and construed in accordance with applicable laws. 
                Any disputes arising from these terms or your use of our services will be resolved through 
                good faith negotiation or, if necessary, through appropriate legal channels.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="card bg-gradient-to-r from-secondary-600 to-primary-600 p-10 text-center text-white">
            <h2 className="text-3xl font-display font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-xl text-secondary-100 mb-6 max-w-2xl mx-auto">
              We believe in clear communication. If you have questions about these terms or need clarification, 
              we're here to help.
            </p>
            <a
              href="/contact"
              className="btn-secondary bg-white text-secondary-600 hover:bg-secondary-50 border-white"
            >
              Contact Us About Terms
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsPage;