'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Heart, 
  TrendingUp, 
  Gavel, 
  Building, 
  ShoppingCart, 
  Cpu,
  GraduationCap,
  Rocket,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import Link from 'next/link'

export default function IndustriesPage() {
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

  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description: "Transforming healthcare with AI-powered diagnostics, patient care optimization, and medical research acceleration.",
      solutions: [
        "Medical image analysis",
        "Patient data processing",
        "Drug discovery acceleration",
        "HIPAA-compliant solutions"
      ]
    },
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Enhancing financial services with AI for fraud detection, risk assessment, and automated trading systems.",
      solutions: [
        "Fraud detection systems",
        "Risk assessment models",
        "Algorithmic trading",
        "Regulatory compliance"
      ]
    },
    {
      icon: Gavel,
      title: "Legal",
      description: "Streamlining legal processes with AI for document analysis, contract review, and legal research automation.",
      solutions: [
        "Document analysis",
        "Contract review automation",
        "Legal research assistance",
        "Case prediction models"
      ]
    },
    {
      icon: Building,
      title: "Manufacturing",
      description: "Optimizing production lines with AI for quality control, predictive maintenance, and supply chain management.",
      solutions: [
        "Quality control systems",
        "Predictive maintenance",
        "Supply chain optimization",
        "Production line automation"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Revolutionizing retail with AI for personalized shopping experiences, inventory management, and demand forecasting.",
      solutions: [
        "Personalized recommendations",
        "Inventory optimization",
        "Demand forecasting",
        "Customer behavior analysis"
      ]
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Empowering tech companies with AI for software development, DevOps automation, and system optimization.",
      solutions: [
        "Code generation & review",
        "DevOps automation",
        "System optimization",
        "Security threat detection"
      ]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Enhancing learning experiences with AI for personalized education, automated grading, and content creation.",
      solutions: [
        "Personalized learning paths",
        "Automated grading systems",
        "Content generation",
        "Student performance analytics"
      ]
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Helping startups leverage AI for rapid prototyping, MVP development, and scalable growth strategies.",
      solutions: [
        "Rapid prototyping",
        "MVP development",
        "Scalable architecture",
        "Cost-effective solutions"
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
              Industries We Serve
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              AI solutions tailored to meet the unique challenges and opportunities across various sectors
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
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
                      <industry.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                      {industry.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <motion.li
                          key={solution}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: solutionIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start text-gray-300 text-xs"
                        >
                          <CheckCircle className="w-3 h-3 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{solution}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        Learn More
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
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can address your specific industry challenges
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Link href="/contact">
                  Get Started Today
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