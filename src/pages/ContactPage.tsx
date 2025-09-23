import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '../config';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co for form handling
      const response = await fetch('https://formsubmit.co/ajax/{{CONTACT_EMAIL}}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with InfoBio Fusion. We'd love to hear from you about our articles, suggestions, or any questions you may have."
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="gradient-text">Connect</span> With Us
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Where technology meets intelligence, conversations begin. 
                Let's discuss how we can help you navigate the digital future.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="card p-8">
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
                  Let's Start a <span className="gradient-text">Conversation</span>
                </h2>
                <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                  Whether you're seeking insights, have feedback on our content, or want to explore 
                  partnership opportunities, we're here to listen and engage meaningfully.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-secondary-900 text-lg mb-2">Direct Contact</h3>
                      <p className="text-secondary-700 font-medium">{siteConfig.contactEmail}</p>
                      <p className="text-sm text-secondary-500 mt-1">
                        Professional responses within 24-48 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-secondary-900 text-lg mb-2">Response Commitment</h3>
                      <p className="text-secondary-700 font-medium">24-48 Hour Turnaround</p>
                      <p className="text-sm text-secondary-500 mt-1">
                        Priority handling for time-sensitive inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-secondary-900 text-lg mb-2">Expertise Areas</h3>
                      <p className="text-secondary-700 font-medium">Technology Intelligence & Digital Innovation</p>
                      <p className="text-sm text-secondary-500 mt-1">
                        Global insights with practical, actionable focus
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="card p-8">
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-6">
                  Common <span className="gradient-text">Questions</span>
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary-200 pl-4">
                    <h4 className="font-display font-bold text-secondary-900 mb-2">How can I suggest content topics?</h4>
                    <p className="text-secondary-600">
                      Use our contact form and select "Content Suggestion" to share your ideas. 
                      We value community input in shaping our editorial direction.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary-200 pl-4">
                    <h4 className="font-display font-bold text-secondary-900 mb-2">Do you collaborate with industry experts?</h4>
                    <p className="text-secondary-600">
                      Absolutely. We welcome partnerships with thought leaders and subject matter experts 
                      to deliver authoritative, cutting-edge content.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent-200 pl-4">
                    <h4 className="font-display font-bold text-secondary-900 mb-2">How do you ensure content accuracy?</h4>
                    <p className="text-secondary-600">
                      Our rigorous editorial process includes expert review, fact-checking, and 
                      continuous updates to maintain the highest standards of accuracy and relevance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-10">
              <h2 className="text-3xl font-display font-bold text-secondary-900 mb-8">
                Send us a <span className="gradient-text">Message</span>
              </h2>
            
              {submitStatus === 'success' && (
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary-600" />
                    </div>
                    <p className="text-primary-800 font-medium">
                      Message sent successfully! We'll respond within 24-48 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                  <p className="text-red-800 font-medium">
                    Unable to send your message. Please try again or contact us directly at {siteConfig.contactEmail}.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-display font-semibold text-secondary-900 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white hover:border-secondary-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-display font-semibold text-secondary-900 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white hover:border-secondary-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-display font-semibold text-secondary-900 mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white hover:border-secondary-300"
                  >
                    <option value="">Choose your inquiry type</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Content Suggestion">Content Suggestion</option>
                    <option value="Expert Collaboration">Expert Collaboration</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Media Relations">Media Relations</option>
                    <option value="Technical Feedback">Technical Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-display font-semibold text-secondary-900 mb-3">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white hover:border-secondary-300 resize-none"
                    placeholder="Share your thoughts, questions, or ideas. We appreciate detailed messages that help us provide the most relevant response..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed py-4"
                >
                  <div className="flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        <span className="font-display font-semibold">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                        <span className="font-display font-semibold">Send Message</span>
                      </>
                    )}
                  </div>
                </button>

                <div className="text-center mt-6">
                  <p className="text-sm text-secondary-500">
                    * Required fields. We respect your privacy and maintain strict confidentiality.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;