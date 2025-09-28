"use client";

import React, { useState, useEffect } from 'react';
import { motion, useInView, easeOut, easeIn, easeInOut} from 'framer-motion';
import { Brain, Clock, Moon, TrendingUp, ArrowRight, Play, ChevronDown } from 'lucide-react';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function DecafLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const ctaRef = React.useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Framer Motion variants using CSS keyframes
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const slideUpVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const features = [
    { 
      icon: Brain, 
      title: "Personalized Study Plans", 
      desc: "Tailors study materials towards questions most likely to appear on your upcoming exam. No need to skim the lecture slides for that niece solution." 
    },
    { 
      icon: Moon, 
      title: "Prioritizes Sleep & Wellness", 
      desc: "Cramming is inefficient if you can't focus, Decaf works around your schedule to include sufficient sleep intervals." 
    },
    { 
      icon: Clock, 
      title: "Efficient Learning Techniques", 
      desc: "Decaf uses science-backed methods (active recall, interleaving, spaced repetition, etc) to maximize study time. Learn so fast it feels like cheating." 
    },
    { 
      icon: TrendingUp, 
      title: "Progress Without Burnout", 
      desc: "Analytics show your predicted exam score and overall improvement. No need to worry about achieving the minimum passing grade." 
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
    <div className="bg-white dark:bg-[#0d1117]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            variants={fadeInUpVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-[#f0f6fc] mb-6 leading-tight"
          >
            It's Time To Ditch The Caffeine & All-Nighters
          </motion.h1>
          
          <motion.p 
            variants={fadeInUpVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-[#8b949e] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Decaf is an AI study aid that provides everything you need to effectively cram for your next exam.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="group bg-gray-900 dark:bg-[#f0f6fc] hover:bg-gray-800 dark:hover:bg-[#e6edf3] text-white dark:text-[#24292f] px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 flex items-center space-x-2">
              <span>Get Decaf Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group bg-white dark:bg-[#21262d] hover:bg-gray-50 dark:hover:bg-[#30363d] text-gray-900 dark:text-[#f0f6fc] px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 border border-gray-300 dark:border-[#30363d] flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>See How It Works</span>
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={fadeInUpVariants}
            className="text-center text-gray-500 dark:text-[#8b949e] text-md mb-42"
          >
            <button 
              onClick={scrollToFeatures}
              className="group hover:text-black dark:hover:text-[#f0f6fc] transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 mx-auto"
            >
              <span className="font-xl">Why Decaf?</span>
              <ChevronDown className="w-4 h-4 group-hover:font-bold group-hover:scale-125 transition-all duration-300" />
            </button>
          </motion.div>
          
          {/* Mock Screenshot */}
          <motion.div 
            variants={fadeInUpVariants}
            className="relative mx-auto max-w-5xl"
          >
            <div className="bg-gray-100 dark:bg-[#161b22] rounded-xl border border-gray-200 dark:border-[#30363d] p-8 shadow-2xl">
              <div className="bg-white dark:bg-[#0d1117] rounded-lg border border-gray-200 dark:border-[#30363d] overflow-hidden">
                <div className="bg-gray-50 dark:bg-[#161b22] px-4 py-3 border-b border-gray-200 dark:border-[#30363d] flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-[#21262d] p-4 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-lg mb-3"></div>
                      <div className="h-4 bg-gray-300 dark:bg-[#30363d] rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-[#21262d] rounded w-2/3"></div>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#21262d] p-4 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-3"></div>
                      <div className="h-4 bg-gray-300 dark:bg-[#30363d] rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-[#21262d] rounded w-3/4"></div>
                    </div>
                    <div className="bg-gray-50 dark:bg-[#21262d] p-4 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg mb-3"></div>
                      <div className="h-4 bg-gray-300 dark:bg-[#30363d] rounded mb-2"></div>
                      <div className="h-3 bg-gray-200 dark:bg-[#21262d] rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 dark:bg-[#30363d] rounded"></div>
                    <div className="h-3 bg-gray-200 dark:bg-[#30363d] rounded w-5/6"></div>
                    <div className="h-3 bg-gray-200 dark:bg-[#30363d] rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features-section" className="py-22 bg-gray-50 dark:bg-[#161b22]" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={staggerItem} className="text-4xl font-bold text-gray-900 dark:text-[#f0f6fc] mb-4">
              You sometimes don't know what to study until it's too late.
            </motion.h2>
            <motion.p variants={staggerItem} className="text-xl text-gray-600 dark:text-[#8b949e] max-w-3xl mx-auto">
              When every minute counts, any sub-optimal study method can cost you an entire letter grade - allow Decaf to solve that for you.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={isFeaturesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className="flex space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-[#f0f6fc] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white dark:text-[#24292f]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-[#f0f6fc] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-[#8b949e] leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-[#0d1117]" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-[#f0f6fc] mb-4">
              Loved by students worldwide
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className="bg-gray-50 dark:bg-[#161b22] rounded-xl p-8 border border-gray-200 dark:border-[#30363d]"
              >
                <p className="text-gray-700 dark:text-[#e6edf3] mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-[#f0f6fc]">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-[#8b949e] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 dark:bg-[#161b22]" ref={ctaRef}>
        <motion.div 
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={slideUpVariants}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-[#f0f6fc] mb-4">
            Ready to transform your study habits?
          </h2>
          <p className="text-xl text-gray-700 dark:text-[#e6edf3] mb-8">
            Join thousands of students who've already made the switch to sustainable learning.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 dark:bg-[#f0f6fc] dark:hover:bg-[#e6edf3] text-white dark:text-[#24292f] px-8 py-4 rounded-md font-semibold text-lg transition-colors">
            Get started
          </button>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
}