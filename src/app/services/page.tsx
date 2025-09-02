'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Server, 
  MessageSquare, 
  Wand2, 
  TrendingUp, 
  Network, 
  Eye, 
  Search, 
  Zap, 
  Bot,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import Link from 'next/link'

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const services = [
    {
      icon: Server,
      title: "Model Hosting",
      description: "Deploy your AI models on our high-performance GPU/CPU infrastructure with flexible pricing options.",
      features: [
        "High-performance GPU servers",
        "Hourly or monthly billing",
        "Auto-scaling resources",
        "RESTful API access",
        "24/7 monitoring & support",
        "Secure data isolation"
      ]
    },
    {
      icon: MessageSquare,
      title: "LLM Model Building",
      description: "Custom Large Language Models built from scratch to handle your specific text generation and understanding tasks.",
      features: [
        "Custom architecture design",
        "Domain-specific training",
        "Multi-language support",
        "Scalable deployment options",
        "Performance optimization",
        "Ongoing maintenance"
      ]
    },
    {
      icon: Wand2,
      title: "Fine-Tuning LLM Model",
      description: "Enhance existing LLMs with your domain-specific data for improved accuracy and relevance in your use case.",
      features: [
        "Data preprocessing & cleaning",
        "Parameter-efficient tuning",
        "Performance evaluation",
        "Custom prompt engineering",
        "Model optimization",
        "Integration support"
      ]
    },
    {
      icon: TrendingUp,
      title: "ML Model Building",
      description: "Develop machine learning models for prediction, classification, and data analysis tailored to your business data.",
      features: [
        "Data analysis & preparation",
        "Model selection & training",
        "Feature engineering",
        "Model validation & testing",
        "Performance monitoring",
        "API development"
      ]
    },
    {
      icon: Network,
      title: "Deep Learning Model Building",
      description: "Advanced neural network models for complex pattern recognition, natural language processing, and more.",
      features: [
        "Neural network architecture",
        "Transfer learning",
        "Hyperparameter tuning",
        "Model optimization",
        "Deployment solutions",
        "Performance scaling"
      ]
    },
    {
      icon: Eye,
      title: "Vision Model Building",
      description: "Custom computer vision models for image recognition, object detection, and visual data analysis.",
      features: [
        "Image preprocessing",
        "Object detection models",
        "Image classification",
        "Custom dataset training",
        "Real-time processing",
        "Edge deployment options"
      ]
    },
    {
      icon: Search,
      title: "RAG Solutions",
      description: "Retrieval-Augmented Generation for real-time knowledge integration and accurate responses.",
      features: [
        "Vector database setup",
        "Document indexing",
        "Real-time retrieval",
        "Context management",
        "Response generation",
        "Performance optimization"
      ]
    },
    {
      icon: Zap,
      title: "CAG Solutions",
      description: "Cache-Augmented Generation for lightning-fast responses with preloaded knowledge.",
      features: [
        "Knowledge preloading",
        "Cache management",
        "Low-latency responses",
        "Memory optimization",
        "Scalable architecture",
        "Performance monitoring"
      ]
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Custom AI agents that automate complex workflows and business processes.",
      features: [
        "Workflow automation",
        "Multi-agent systems",
        "Tool integration",
        "Decision making",
        "Process optimization",
        "Monitoring & logging"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 via-purple-950/60 via-pink-950/40 via-slate-800 to-black relative overflow-hidden">
      <Particles />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-[60vh] flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-shift"
            >
              Our Services
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive AI solutions tailored to your business needs, from model hosting to custom development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full glass-dark border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover-lift">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50"
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start text-gray-300 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-dark rounded-2xl p-12 max-w-4xl mx-auto border-purple-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help transform your business
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Link href="/contact">
                  Contact Us Today
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