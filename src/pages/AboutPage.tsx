import React from 'react';
import SEO from '../components/SEO';
import { BookOpen, Users, TrendingUp, Award } from 'lucide-react';
import { siteConfig } from '../config';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Nithie NR"
        description="Hi, I'm Nithie NR! Tech enthusiast, content creator, and your trusted guide to making smart tech decisions. Get honest reviews and exclusive deals."
      />

      <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/20 to-rose-50/40">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                Hey, I'm <span className="gradient-text">Nithie NR</span> 👋
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Your trusted tech guide helping you make smart buying decisions with honest reviews, 
                detailed tutorials, and exclusive deals you won't find anywhere else.
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
                <h2 className="text-4xl font-display font-bold text-secondary-900">My Mission 🎯</h2>
              </div>
              <p className="text-lg text-secondary-700 leading-relaxed max-w-4xl">
                I'm here to cut through the tech marketing noise and give you the real deal! My mission is simple: 
                help you make smart tech purchases without the regret. Through honest reviews, easy-to-follow tutorials, 
                and hunting down the best deals, I'm your go-to guy for all things tech. No corporate BS, just genuine 
                recommendations from someone who's been in the trenches testing gadgets for years! 💪
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
                What I <span className="gradient-text">Bring You</span> 🔥
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Everything you need to make confident tech decisions and save money while doing it
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">📱 Honest Reviews</h3>
                <p className="text-secondary-600 leading-relaxed">Real-world testing with pros, cons, and whether it's actually worth your hard-earned cash.</p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-secondary-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">🎓 Easy Tutorials</h3>
                <p className="text-secondary-600 leading-relaxed">Step-by-step guides that actually make sense, no tech jargon, just simple solutions.</p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-accent-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">💰 Exclusive Deals</h3>
                <p className="text-secondary-600 leading-relaxed">I hunt down the best discounts and exclusive offers so you don't have to pay full price.</p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 text-center p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-4">🤝 Personal Touch</h3>
                <p className="text-secondary-600 leading-relaxed">Direct access to me for questions, requests, and personalized tech recommendations.</p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8">
                  My <span className="gradient-text">Story</span> 📖
                </h2>
                <div className="space-y-6 text-lg text-secondary-700 leading-relaxed">
                  <p>
                    Hey! I'm just a regular guy who got tired of buying overhyped tech that didn't live up 
                    to the promises. After getting burned by too many "revolutionary" gadgets that were 
                    anything but, I decided to start sharing my real experiences.
                  </p>
                  <p>
                    What started as helping friends avoid expensive mistakes turned into something bigger. 
                    I realized there are tons of people out there who want honest advice from someone who 
                    actually uses the stuff they're recommending, not just reading from a spec sheet.
                  </p>
                  <p>
                    Today, I spend my time testing everything from the latest smartphones to smart home gadgets, 
                    finding the best deals, and creating content that actually helps people make better tech decisions. 
                    It's not just about the products—it's about saving you time, money, and frustration! 🎯
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                    <p className="text-secondary-600 font-medium">Years Creating Content</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">50K+</div>
                      <p className="text-sm text-secondary-600">Tech Enthusiasts</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary-600 mb-1">200+</div>
                      <p className="text-sm text-secondary-600">Products Reviewed</p>
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
                What I Stand <span className="gradient-text">For</span> 💯
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                The values that drive everything I create and recommend
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card group hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">💯 Honesty First</h3>
                <p className="text-secondary-600 leading-relaxed">
                  If a product sucks, I'll tell you. If it's amazing, I'll tell you that too. No sugar-coating, just real talk.
                </p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">🎯 Value Focus</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Every recommendation is about getting the most bang for your buck. Quality doesn't have to break the bank.
                </p>
              </div>
              
              <div className="card group hover:shadow-xl transition-all duration-300 p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">🚀 Stay Current</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Tech moves fast, and so do I. Always testing the latest gear to keep you ahead of the curve.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="card bg-gradient-to-r from-primary-600 to-secondary-600 p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Let's <span className="text-accent-200">Connect!</span> 🤝
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join 50,000+ tech enthusiasts getting the inside scoop on the best deals and honest reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-secondary bg-white text-primary-600 hover:bg-primary-50 border-white"
                >
                  📧 Get in Touch
                </a>
                <a
                  href="/search"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
                >
                  🔍 Browse Reviews
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