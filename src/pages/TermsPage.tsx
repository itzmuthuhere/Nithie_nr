import React from 'react';
import SEO from '../components/SEO';
import { FileText, AlertTriangle, Scale, Mail } from 'lucide-react';
import { siteConfig } from '../config';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for Nithie_nr - Read our terms and conditions for using our website and services."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
              <h2 className="text-lg font-semibold text-amber-900 m-0">Important Notice</h2>
            </div>
            <p className="text-amber-800 m-0">
              By accessing and using {siteConfig.title}, you accept and agree to be bound by these Terms of Service.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-blue-600" />
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to {siteConfig.title}. These Terms of Service ("Terms") govern your use of our website 
              located at https://{siteConfig.domain} (the "Service") operated by {siteConfig.title} ("us", "we", or "our").
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
              with any part of these terms, then you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Website</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Use</h3>
            <p className="text-gray-700 mb-4">You may use our website for:</p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Reading and sharing our articles and content</li>
              <li>Subscribing to our newsletter</li>
              <li>Contacting us through our contact forms</li>
              <li>Personal, non-commercial use</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Use</h3>
            <p className="text-gray-700 mb-4">You may not:</p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use automated tools to scrape or harvest data from our website</li>
              <li>Attempt to interfere with or disrupt our website's functionality</li>
              <li>Use our website for any illegal or unauthorized purpose</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Impersonate us or claim affiliation without authorization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Scale className="h-6 w-6 mr-2 text-blue-600" />
              Intellectual Property Rights
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Content</h3>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are and will remain the 
              exclusive property of {siteConfig.title} and its licensors. The Service is protected by 
              copyright, trademark, and other laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">User Content</h3>
            <p className="text-gray-700 mb-4">
              By submitting content to our website (through comments, contact forms, etc.), you grant 
              us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, publicly 
              display, and distribute such content.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Fair Use</h3>
            <p className="text-gray-700 mb-4">
              You may quote brief excerpts from our articles for review, comment, or educational purposes, 
              provided you include proper attribution and a link back to the original article.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              The information on this website is provided on an "as is" basis. To the fullest extent 
              permitted by law, we disclaim all warranties, whether express or implied, including but 
              not limited to:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties that the service will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or completeness of information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall {siteConfig.title}, its directors, employees, partners, agents, 
              suppliers, or affiliates be liable for any indirect, incidental, punitive, consequential, 
              or similar damages arising out of or related to your use of the Service.
            </p>
            <p className="text-gray-700 mb-4">
              Our total liability to you for all damages shall not exceed the amount you paid us, 
              if any, for accessing our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links and Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites or services. We do not control 
              and are not responsible for the content, privacy policies, or practices of any third-party 
              websites or services.
            </p>
            <p className="text-gray-700 mb-4">
              We strongly advise you to read the terms and conditions and privacy policies of any 
              third-party websites or services that you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advertising</h2>
            <p className="text-gray-700 mb-4">
              Our website may display advertisements provided by third parties, including Google AdSense. 
              We are not responsible for the content of these advertisements or the privacy practices 
              of advertisers.
            </p>
            <p className="text-gray-700 mb-4">
              Advertisers may use cookies and other tracking technologies to collect information about 
              your visits to our website and other websites to provide relevant advertisements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please read our Privacy Policy, which explains how we 
              collect, use, and protect your information when you use our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to our Service immediately, without prior notice 
              or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-700 mb-4">
              Upon termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new 
              terms taking effect.
            </p>
            <p className="text-gray-700 mb-4">
              Your continued use of the Service after we post any modifications to the Terms constitutes 
              acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be interpreted and governed by the laws of [Your Jurisdiction], without 
              regard to its conflict of law provisions. Any disputes arising from these Terms shall be 
              resolved in the courts of [Your Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Mail className="h-6 w-6 mr-2 text-blue-600" />
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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

export default TermsPage;

