import React from 'react';
import SEO from '../components/SEO';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';
import { siteConfig } from '../config';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about Nithie_nr and our mission to provide quality technology insights and digital innovation news where technology meets intelligence."
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="gradient-text">About</span> {siteConfig.title}
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                {siteConfig.tagline} - Your premier destination for cutting-edge technology insights, 
                comprehensive digital guidance, and intelligence-driven innovation news.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Mission Section */}
          <section className="mb-20">
            <div className="card bg-gradient-to-r from-primary-50 to-secondary-50 p-10 border-l-4 border-primary-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-4xl font-display font-bold text-secondary-900">Our Mission</h2>
              </div>
              <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl">
                At {siteConfig.title}, we bridge the gap between complex technology and practical application. 
                Our mission is to demystify the digital world, providing intelligent insights that empower 
                businesses and individuals to make informed decisions in an increasingly connected landscape. 
                We believe that where technology meets intelligence, true innovation flourishes.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                What We <span className="gradient-text">Deliver</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Comprehensive insights across multiple domains, designed to keep you ahead of the curve
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Tech Intelligence</h3>
                <p className="text-secondary-600 leading-relaxed">Cutting-edge analysis of emerging technologies, market trends, and digital transformation strategies.</p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-secondary-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Digital Guidance</h3>
                <p className="text-secondary-600 leading-relaxed">Comprehensive guides for navigating the digital landscape, from cybersecurity to digital transformation.</p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-accent-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Expert Community</h3>
                <p className="text-secondary-600 leading-relaxed">Connecting professionals, innovators, and thought leaders in the technology and business intelligence space.</p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">Premium Content</h3>
                <p className="text-secondary-600 leading-relaxed">Meticulously researched, expert-validated content that delivers actionable insights and strategic value.</p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8">
                  Our <span className="gradient-text">Journey</span>
                </h2>
                <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
                  <p>
                    Born from the convergence of technological expertise and business intelligence, 
                    {siteConfig.title} emerged as a response to the growing need for authentic, 
                    accessible insights in an increasingly complex digital ecosystem.
                  </p>
                  <p>
                    We recognized that the gap between cutting-edge technology and practical application 
                    was widening, leaving professionals and organizations struggling to navigate the 
                    digital transformation landscape effectively.
                  </p>
                  <p>
                    Today, we stand as a bridge between innovation and implementation, where technology 
                    meets intelligence to create meaningful, actionable insights that drive real-world success.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">2024+</div>
                    <p className="text-secondary-600 font-medium">Years of Innovation</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">10K+</div>
                      <p className="text-sm text-secondary-600">Professionals Served</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600 mb-1">500+</div>
                      <p className="text-sm text-secondary-600">Expert Articles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                The principles that guide every decision, every article, and every interaction
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card group hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">Excellence</h3>
                <p className="text-secondary-600 leading-relaxed">
                  We maintain the highest standards of accuracy, depth, and relevance in every piece of content we create.
                </p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">Accessibility</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Complex technology and business concepts are distilled into clear, actionable insights for all audiences.
                </p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">Innovation</h3>
                <p className="text-secondary-600 leading-relaxed">
                  We stay ahead of trends, anticipating future developments and their implications for our readers.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="card bg-gradient-to-r from-primary-600 to-secondary-600 p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to <span className="text-accent-200">Connect?</span>
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join our community of forward-thinking professionals and stay ahead of the technology curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-white"
                >
                  Get in Touch
                </a>
                <a
                  href="/search"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Explore Content
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;