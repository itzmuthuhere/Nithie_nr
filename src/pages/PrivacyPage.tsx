import React from 'react';
import SEO from '../components/SEO';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';
import { siteConfig } from '../config';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Nithie_nr protects your privacy and handles your data with transparency and security."
      />

      <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="gradient-text">Privacy</span> Policy
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Your privacy is fundamental to our mission. Learn how we protect and respect your data.
              </p>
              <p className="text-secondary-500 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Overview */}
          <section className="mb-16">
            <div className="card p-10 bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500">
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">Our Commitment</h2>
              <p className="text-lg text-secondary-700 leading-relaxed">
                At {siteConfig.title}, we believe that privacy is a fundamental right. This policy explains 
                how we collect, use, and protect your information when you interact with our platform. 
                We are committed to transparency and giving you control over your data.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">Information We Collect</h2>
            </div>

            <div className="space-y-8">
              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Information You Provide</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Contact information when you reach out to us through our contact form</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Newsletter subscription details if you choose to subscribe</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Comments and feedback you submit on our content</span>
                  </li>
                </ul>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Automatically Collected Information</h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Basic analytics data including page views and user engagement patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Technical information such as browser type and device characteristics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>IP address and general geographic location for security purposes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mr-4">
                <UserCheck className="w-6 h-6 text-accent-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">How We Use Your Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Communication</h3>
                <p className="text-secondary-700 leading-relaxed">
                  We use your contact information to respond to your inquiries, send requested information, 
                  and occasionally share important updates about our services.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Content Improvement</h3>
                <p className="text-secondary-700 leading-relaxed">
                  Analytics help us understand which content resonates with our audience, allowing us 
                  to create more valuable and relevant insights.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Security</h3>
                <p className="text-secondary-700 leading-relaxed">
                  We monitor for suspicious activity and potential security threats to protect both 
                  our platform and our users' data.
                </p>
              </div>

              <div className="card p-8">
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Legal Compliance</h3>
                <p className="text-secondary-700 leading-relaxed">
                  When required by law, we may use information to comply with legal obligations, 
                  resolve disputes, and enforce our terms.
                </p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <Lock className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary-900">Data Protection & Security</h2>
            </div>

            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Security Measures</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    We implement industry-standard security measures including encrypted data transmission, 
                    secure hosting infrastructure, and regular security audits to protect your information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Data Retention</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    We retain personal information only as long as necessary to fulfill the purposes outlined 
                    in this policy, unless a longer retention period is required or permitted by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">Third-Party Services</h3>
                  <p className="text-secondary-700 leading-relaxed">
                    We work only with trusted third-party services that maintain high privacy and security standards. 
                    We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">Your Rights</h2>
            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-display font-bold text-secondary-900 mb-3">Access & Correction</h3>
                  <p className="text-secondary-700">Request access to your personal data or request corrections to inaccurate information.</p>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-secondary-900 mb-3">Data Portability</h3>
                  <p className="text-secondary-700">Request a copy of your data in a commonly used, machine-readable format.</p>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-secondary-900 mb-3">Deletion</h3>
                  <p className="text-secondary-700">Request deletion of your personal data, subject to legal and legitimate business requirements.</p>
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-secondary-900 mb-3">Opt-Out</h3>
                  <p className="text-secondary-700">Unsubscribe from our communications at any time using the links in our emails.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="card bg-gradient-to-r from-primary-600 to-secondary-600 p-10 text-center text-white">
            <h2 className="text-3xl font-display font-bold mb-4">Privacy Questions?</h2>
            <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
              We're committed to transparency. If you have any questions about this privacy policy or how we handle your data, please don't hesitate to contact us.
            </p>
            <a
              href="/contact"
              className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-white"
            >
              Contact Us About Privacy
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;