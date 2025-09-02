'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle, Brain, Server, Zap, Sparkles, Cpu, Shield, Users, Lightbulb, Target, Clock } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import Link from 'next/link'

export default function CustomAISolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950/60 via-pink-950/40 via-slate-800 to-black relative overflow-hidden">
      <Particles />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full"
            >
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-semibold">Custom AI Solutions</span>
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              AI Solutions Tailored to Your Business
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Our expert team builds custom AI models and solutions that solve your specific business challenges, drive innovation, and deliver measurable results.
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-full">
                <Link href="/pricing">
                  View Pricing Options
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
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
              Our Custom AI Development Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI services across various domains and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Large Language Models",
                description: "Building and fine-tuning LLMs for specific business applications and domains.",
                features: ["Custom training pipelines", "Domain-specific fine-tuning", "Instruction-following models", "Multi-lingual solutions"]
              },
              {
                icon: Cpu,
                title: "Machine Learning Models",
                description: "Traditional ML solutions for predictive analytics and classification tasks.",
                features: ["Data preprocessing & feature engineering", "Model selection & optimization", "Performance monitoring", "Model deployment & maintenance"]
              },
              {
                icon: Shield,
                title: "Deep Learning",
                description: "Advanced neural networks for complex pattern recognition and decision-making.",
                features: ["CNN for computer vision", "RNN for sequence data", "Transformer architectures", "Reinforcement learning solutions"]
              },
              {
                icon: Server,
                title: "Computer Vision",
                description: "Custom vision models for image recognition, object detection, and analysis.",
                features: ["Image classification", "Object detection & tracking", "Facial recognition", "Medical image analysis"]
              },
              {
                icon: Zap,
                title: "RAG Solutions",
                description: "Retrieval-Augmented Generation for knowledge integration and accurate responses.",
                features: ["Knowledge base integration", "Document retrieval systems", "Context-aware responses", "Real-time query processing"]
              },
              {
                icon: Sparkles,
                title: "AI Agents",
                description: "Intelligent agents for automation, customer service, and workflow management.",
                features: ["Task automation", "Natural language interactions", "Multi-agent coordination", "Workflow optimization"]
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
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-center text-white">{solution.title}</CardTitle>
                    <CardDescription className="text-center text-gray-300">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={feature} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A structured approach to ensure your custom AI solution meets business requirements
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Process Line */}
              <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description: "Understanding your business challenges and goals",
                    icon: Users
                  },
                  {
                    step: "02",
                    title: "Data Analysis",
                    description: "Reviewing available data and collection needs",
                    icon: Lightbulb
                  },
                  {
                    step: "03",
                    title: "Solution Design",
                    description: "Creating technical architecture and roadmap",
                    icon: Target
                  },
                  {
                    step: "04",
                    title: "Model Development",
                    description: "Building and training custom AI models",
                    icon: Brain
                  },
                  {
                    step: "05",
                    title: "Deployment & Support",
                    description: "Implementing and maintaining the solution",
                    icon: Server
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative">
                      {/* Step Circle */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-slate-900 z-10">
                        {step.step}
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                      <div className="w-10 h-10 mx-auto bg-slate-800/50 border border-purple-500/30 rounded-full flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-purple-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we've helped businesses transform with custom AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border-purple-500/20 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Customer Service Automation</h3>
                  <p className="text-purple-400 text-sm">Finance Industry</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Developed a custom chatbot that reduced response time by 75% and improved customer satisfaction by 40%.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span>Deployed in 60 days</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border-purple-500/20 rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Predictive Analytics Platform</h3>
                  <p className="text-purple-400 text-sm">Healthcare Industry</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Built a machine learning system that predicts patient outcomes with 92% accuracy, improving treatment planning.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-2" />
                <span>Deployed in 90 days</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-slate-800/50 rounded-2xl p-12 max-w-4xl mx-auto border-purple-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Ready to Transform Your Business with Custom AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is ready to understand your challenges and develop AI solutions that deliver real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-full">
                  <Link href="/pricing">
                    View Pricing Options
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
