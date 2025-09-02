'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Server, Brain, CheckCircle, ArrowRight, Sparkles, Zap, Shield, Cpu } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950/60 via-pink-950/40 via-slate-800 to-black relative overflow-hidden">
      <Particles />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 bg-black/30">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              AI Model Hosting & Custom Solutions
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Deploy your AI models on high-performance GPU/CPU servers or get custom AI solutions built for your business needs.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-full">
                <Link href="/pricing">
                  See Pricing
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible solutions for all your AI needs, from hosting to custom development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/pricing" className="block group cursor-pointer">
                <Card className="h-full bg-slate-800/50 border-purple-500/20 group-hover:border-purple-500/40 group-hover:bg-slate-800/70 transition-all duration-300 group-hover:scale-105 transform">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Server className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-center text-white">Model Hosting</CardTitle>
                    <CardDescription className="text-center text-gray-300">
                      Deploy your AI models on our high-performance GPU/CPU infrastructure with flexible pricing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {["Hourly or monthly billing", "High-performance GPUs", "Auto-scaling resources", "RESTful API access", "24/7 monitoring"].map((feature, index) => (
                        <li key={feature} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-center">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-700 group-hover:to-blue-700 text-white">
                        View Pricing
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center text-white">Custom AI Solutions</CardTitle>
                  <CardDescription className="text-center text-gray-300">
                    We build tailored AI models and solutions to solve your specific business challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Business problem analysis", "Custom model development", "Model fine-tuning with your data", "Flexible deployment options", "RAG, CAG & AI Agent solutions"].map((feature, index) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                      <Link href="/custom-ai-solutions">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Solutions Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI services tailored to your specific requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "LLM Model Building",
                description: "Custom Large Language Models built from scratch.",
                icon: "✨"
              },
              {
                title: "Fine-Tuning LLM Model",
                description: "Enhance existing LLMs with your domain-specific data.",
                icon: "⚡"
              },
              {
                title: "ML Model Building",
                description: "Develop machine learning models for prediction.",
                icon: "🧠"
              },
              {
                title: "Deep Learning Model Building",
                description: "Advanced neural networks for complex tasks.",
                icon: "🛡️"
              },
              {
                title: "Vision Model Building",
                description: "Custom computer vision models for image analysis.",
                icon: "💻"
              },
              {
                title: "RAG Solutions",
                description: "Retrieval-Augmented Generation for knowledge integration.",
                icon: "🔧"
              },
              {
                title: "CAG Solutions",
                description: "Cache-Augmented Generation for fast responses.",
                icon: "⚡"
              },
              {
                title: "AI Agents",
                description: "Custom AI agents for workflow automation.",
                icon: "🛡️"
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{solution.icon}</span>
                    </div>
                    <CardTitle className="text-lg text-white">{solution.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A streamlined approach to delivering AI solutions that meet your business needs
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Process Line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-1/2 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  {
                    step: "1",
                    title: "Consultation",
                    description: "We meet to understand your business needs and challenges"
                  },
                  {
                    step: "2",
                    title: "Analysis",
                    description: "Our team analyzes your requirements and data"
                  },
                  {
                    step: "3",
                    title: "Proposal",
                    description: "We provide a detailed solution with cost estimates"
                  },
                  {
                    step: "4",
                    title: "Development",
                    description: "Our team builds or fine-tunes models using your data"
                  },
                  {
                    step: "5",
                    title: "Deployment",
                    description: "You choose how to deploy: our servers or your platform"
                  }
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative">
                      {/* Step Circle */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-slate-900 relative z-10">
                        {process.step}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                      <p className="text-gray-300 text-sm">{process.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our hosting and custom AI solutions can help you achieve your goals.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full">
                <Link href="/contact">
                  Talk to Our Experts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
