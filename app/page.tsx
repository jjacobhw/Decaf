// page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Brain, Clock, Moon, TrendingUp, ArrowRight, Play } from 'lucide-react';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function DecafLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { 
      icon: Brain, 
      title: "AI-powered study plans", 
      desc: "Personalized learning schedules that adapt to your natural rhythms and optimize retention without the crash." 
    },
    { 
      icon: Moon, 
      title: "Sleep-first approach", 
      desc: "Built-in sleep tracking and smart reminders help you maintain healthy study habits that actually stick." 
    },
    { 
      icon: Clock, 
      title: "Efficient learning sessions", 
      desc: "Science-backed intervals and breaks that maximize focus without relying on stimulants." 
    },
    { 
      icon: TrendingUp, 
      title: "Progress without burnout", 
      desc: "Visual analytics show your improvement while protecting your mental and physical wellbeing." 
    }
  ];

  const testimonials = [
    {
      text: "I went from 6 cups of coffee a day to zero, while actually improving my grades. Decaf changed everything.",
      author: "Sarah Chen",
      role: "Medical Student"
    },
    {
      text: "Finally, a study app that doesn't make me feel guilty for sleeping 8 hours. My productivity has never been better.",
      author: "Marcus Johnson", 
      role: "Law Student"
    },
    {
      text: "The sleep tracking integration was a game-changer. I study less but retain so much more information.",
      author: "Elena Rodriguez",
      role: "Engineering Student"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Study smarter,{' '}
            <span className="text-gray-600 dark:text-gray-400">not harder</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Break free from all-nighters and energy drinks. Our AI helps you master any subject while maintaining healthy sleep patterns and sustainable study habits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 flex items-center space-x-2">
              <span>Get Decaf free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 border border-gray-300 dark:border-gray-600 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>See how it works</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="text-center text-gray-500 dark:text-gray-500 text-sm mb-8">
            Trusted by 50,000+ students worldwide
          </div>
          
          {/* Mock Screenshot */}
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-lg mb-3"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-3"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg mb-3"></div>
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to study effectively
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Designed specifically for students who want to excel without sacrificing their health or well-being.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white dark:text-gray-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by students worldwide
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to transform your study habits?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students who've already made the switch to sustainable learning.
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-semibold text-lg transition-colors">
            Get started for free
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}