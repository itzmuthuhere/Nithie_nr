import React from 'react';
import SEO from '../components/SEO';
import { Shield, Eye, Cookie, Mail } from 'lucide-react';
import { siteConfig } from '../config';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Nithie_nr - Learn how we collect, use, and protect your personal information."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-center mb-2">
              <Shield className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-blue-900 m-0">Your Privacy Matters</h2>
            </div>
            <p className="text-blue-800 m-0">
              This Privacy Policy explains how {siteConfig.title} collects, uses, and protects your information 
              when you visit our website.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-blue-600" />
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li><strong>Contact Information:</strong> When you contact us through our contact form, we collect your name, email address, and message content.</li>
              <li><strong>Newsletter Subscription:</strong> If you subscribe to our newsletter, we collect your email address.</li>
              <li><strong>Comments:</strong> Any comments or feedback you provide on our articles.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information Automatically Collected</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and navigation patterns.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Cookie className="h-6 w-6 mr-2 text-blue-600" />
              Cookies and Tracking
            </h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to provide and improve our services:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Types of Cookies We Use</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (Google Analytics).</li>
              <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display relevant advertisements.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. However, disabling cookies may affect 
              your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Provide, maintain, and improve our website and services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Analyze website usage and optimize user experience</li>
              <li>Display personalized advertisements through Google AdSense</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Google AdSense</h3>
            <p className="text-gray-700 mb-4">
              We use Google AdSense to display advertisements on our website. Google may use cookies 
              to serve ads based on your visits to our site and other sites. You can opt out of 
              personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:text-blue-800">Google's Ads Settings</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Google Analytics</h3>
            <p className="text-gray-700 mb-4">
              We use Google Analytics to analyze website traffic and usage patterns. Google Analytics 
              uses cookies to collect information anonymously. You can opt out by installing the 
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-800"> Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Media Platforms</h3>
            <p className="text-gray-700 mb-4">
              Our website includes social sharing buttons for platforms like Facebook, Twitter, and LinkedIn. 
              These platforms may collect information about your visit to our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2 text-blue-600" />
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> {siteConfig.contactEmail}<br />
                <strong>Website:</strong> <a href={`https://${siteConfig.domain}`} className="text-blue-600 hover:text-blue-800">{siteConfig.domain}</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;

