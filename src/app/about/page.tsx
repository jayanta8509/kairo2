'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Lightbulb, 
  Users, 
  Leaf,
  User,
  ArrowRight,
  Code,
  Database,
  Server,
  Cloud,
  GitCommit,
  MessageSquare,
  Brain,
  Network,
  Eye,
  Search,
  Zap,
  Bot,
  Container,
  BarChart,
  Lock,
  Globe,
  GitBranch,
  Package,
  Link2
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import Link from 'next/link'

export default function AboutPage() {
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

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "We prioritize data security and privacy in all our solutions, ensuring your sensitive information remains protected."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to deliver cutting-edge AI solutions."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Your success is our success. We work closely with clients to understand their unique needs."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to developing AI solutions that are efficient, scalable, and environmentally responsible."
    }
  ]

  const team = [
    {
      name: "Jayanta Roy",
      role: "Founder & CEO",
      description: "Passionate about AI and its potential to transform businesses. Leading the vision and strategy."
    },
    {
      name: "Prachi Majumder",
      role: "CTO",
      description: "Expert in machine learning and cloud infrastructure. Driving technical excellence."
    }
  ]

  const techStack = [
    { icon: Code, name: "Python", color: "from-blue-600 to-cyan-600" },
    { icon: MessageSquare, name: "JavaScript", color: "from-yellow-600 to-orange-600" },
    { icon: BarChart, name: "R", color: "from-blue-700 to-indigo-600" },
    { icon: Brain, name: "TensorFlow", color: "from-orange-600 to-red-600" },
    { icon: Zap, name: "PyTorch", color: "from-red-600 to-pink-600" },
    { icon: Container, name: "Docker", color: "from-blue-500 to-cyan-500" },
    { icon: Network, name: "Kubernetes", color: "from-blue-600 to-indigo-600" },
    { icon: Cloud, name: "AWS", color: "from-orange-500 to-yellow-500" },
    { icon: Database, name: "MongoDB", color: "from-green-600 to-emerald-600" },
    { icon: GitCommit, name: "Git", color: "from-red-600 to-orange-600" },
    { icon: MessageSquare, name: "LLM", color: "from-purple-600 to-pink-600" },
    { icon: BarChart, name: "ML", color: "from-indigo-600 to-blue-600" },
    { icon: Network, name: "Deep Learning", color: "from-purple-600 to-indigo-600" },
    { icon: Database, name: "SQL", color: "from-blue-600 to-cyan-600" },
    { icon: Server, name: "MSSQL", color: "from-red-600 to-pink-600" },
    { icon: Database, name: "Supabase", color: "from-green-500 to-emerald-500" },
    { icon: Search, name: "Vector Database", color: "from-purple-600 to-blue-600" },
    { icon: Link2, name: "LangChain", color: "from-cyan-600 to-blue-600" },
    { icon: Package, name: "Pydantic AI", color: "from-red-600 to-pink-600" },
    { icon: Cloud, name: "GCP", color: "from-blue-500 to-cyan-500" },
    { icon: Cloud, name: "Azure", color: "from-blue-600 to-indigo-600" },
    { icon: Users, name: "CrewAI", color: "from-purple-600 to-pink-600" },
    { icon: Bot, name: "AutoGen", color: "from-green-600 to-emerald-600" },
    { icon: GitBranch, name: "Swarm", color: "from-orange-600 to-red-600" }
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
              About Us
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              We're passionate about democratizing AI and helping businesses leverage cutting-edge technology to solve real-world problems
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To make advanced AI solutions accessible to businesses of all sizes by providing flexible hosting options and custom development services. We believe in the power of AI to transform industries and improve lives, and we're committed to being at the forefront of this technological revolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-dark border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover-lift text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${index === 0 ? 'from-blue-600 to-cyan-600' : index === 1 ? 'from-yellow-600 to-orange-600' : index === 2 ? 'from-green-600 to-emerald-600' : 'from-purple-600 to-pink-600'} rounded-full flex items-center justify-center`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Team
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm"
              >
                <Card className="h-full glass-dark border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover-lift text-center">
                  <CardHeader>
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-lg text-white">{member.name}</CardTitle>
                    <CardDescription className="text-purple-400 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-sm">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Tech Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <Card className="glass-dark border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300`}>
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-medium text-white">{tech.name}</h4>
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
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help you achieve your AI goals
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Link href="/contact">
                  Get In Touch
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