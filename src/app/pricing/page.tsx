'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Cpu, 
  Shield,
  Clock,
  Server,
  DollarSign,
  Activity,
  HelpCircle,
  X
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Particles from '@/components/Particles'
import Link from 'next/link'

export default function PricingPage() {
  const [showComingSoon, setShowComingSoon] = useState(false)

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
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent py-2 leading-tight"
            >
              GPU Cloud Pricing
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              High-performance GPU instances for AI/ML workloads with flexible billing options
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section with Tabs */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="hosted" className="w-full">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compute Options</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Choose the right environment for your workload
                </p>
              </div>
            </div>
            
            <TabsList className="flex justify-center w-full gap-1 bg-transparent p-1">
              <TabsTrigger value="hosted" className="flex-1 text-lg px-4 py-3 data-[state=active]:bg-slate-800/50 data-[state=active]:border-purple-500/50">
                <Server className="w-5 h-5 mr-2" />
                Hosted Cloud
              </TabsTrigger>
              <TabsTrigger value="serverless" className="flex-1 text-lg px-4 py-3 data-[state=active]:bg-slate-800/50 data-[state=active]:border-purple-500/50">
                <Activity className="w-5 h-5 mr-2" />
                Serverless
              </TabsTrigger>
              <TabsTrigger value="all" className="flex-1 text-lg px-4 py-3 data-[state=active]:bg-slate-800/50 data-[state=active]:border-purple-500/50">
                <Zap className="w-5 h-5 mr-2" />
                All Options
              </TabsTrigger>
            </TabsList>
            
            {/* Hosted Cloud Pricing */}
            <TabsContent value="hosted" className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-center">
                {/* Sharing Cloud */}
                <Card className="border-purple-500/20 bg-slate-800/50 transition-all duration-300 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Sharing Cloud</CardTitle>
                    <CardDescription>
                      Shared infrastructure with community features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-center">
                        <thead>
                          <tr className="border-b border-purple-500/30">
                            <th className="pb-4 text-purple-400 font-semibold">GPU</th>
                            <th className="pb-4 text-purple-400 font-semibold">vCPU</th>
                            <th className="pb-4 text-purple-400 font-semibold">Memory</th>
                            <th className="pb-4 text-purple-400 font-semibold">Per Hour</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-purple-500/20">
                            <td colSpan={4} className="pt-4 text-sm text-purple-400 font-semibold">80GB VRAM</td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H200</td>
                            <td>24</td>
                            <td>276 GB</td>
                            <td>$3.79<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">B200</td>
                            <td>28</td>
                            <td>283 GB</td>
                            <td>$5.99<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H100 NVL</td>
                            <td>16</td>
                            <td>94 GB</td>
                            <td>$2.79<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H100 SXM</td>
                            <td>20</td>
                            <td>125 GB</td>
                            <td>$2.69<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H100 PCIe</td>
                            <td>16</td>
                            <td>188 GB</td>
                            <td>$2.39<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">A100 PCIe</td>
                            <td>8</td>
                            <td>117 GB</td>
                            <td>$1.64<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">A100 SXM</td>
                            <td>16</td>
                            <td>125 GB</td>
                            <td>$1.74<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">L40S</td>
                            <td>16</td>
                            <td>94 GB</td>
                            <td>$0.86<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">RTX 6000 Ada</td>
                            <td>10</td>
                            <td>167 GB</td>
                            <td>$0.77<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">A40</td>
                            <td>9</td>
                            <td>50 GB</td>
                            <td>$0.40<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">L40</td>
                            <td>8</td>
                            <td>94 GB</td>
                            <td>$0.89<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">RTX A6000</td>
                            <td>9</td>
                            <td>50 GB</td>
                            <td>$0.49<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">RTX 5090</td>
                            <td>9</td>
                            <td>35 GB</td>
                            <td>$0.89<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">L4</td>
                            <td>12</td>
                            <td>50 GB</td>
                            <td>$0.39<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">RTX 3090</td>
                            <td>16</td>
                            <td>125 GB</td>
                            <td>$0.46<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">RTX 4090</td>
                            <td>6</td>
                            <td>41 GB</td>
                            <td>$0.69<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">RTX A5000</td>
                            <td>9</td>
                            <td>25 GB</td>
                            <td>$0.27<hr /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Secure Cloud */}
                <Card className="border-purple-500/20 bg-slate-800/50 transition-all duration-300 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Secure Cloud</CardTitle>
                    <CardDescription>
                      Enhanced security and dedicated resources for sensitive workloads
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-center">
                        <thead>
                          <tr className="border-b border-purple-500/30">
                            <th className="pb-4 text-purple-400 font-semibold">GPU</th>
                            <th className="pb-4 text-purple-400 font-semibold">vCPU</th>
                            <th className="pb-4 text-purple-400 font-semibold">Memory</th>
                            <th className="pb-4 text-purple-400 font-semibold">Per Hour</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-purple-500/20">
                            <td colSpan={4} className="pt-4 text-sm text-purple-400 font-semibold">Pricing typically 30-50% higher than Sharing</td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H200</td>
                            <td>24</td>
                            <td>276 GB</td>
                            <td className="text-green-400">$5.69<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">B200</td>
                            <td>28</td>
                            <td>283 GB</td>
                            <td className="text-green-400">$8.99<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H100 NVL</td>
                            <td>16</td>
                            <td>94 GB</td>
                            <td className="text-green-400">$4.19<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H100 SXM</td>
                            <td>20</td>
                            <td>125 GB</td>
                            <td className="text-green-400">$4.04<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">H100 PCIe</td>
                            <td>16</td>
                            <td>188 GB</td>
                            <td className="text-green-400">$3.59<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">A100 PCIe</td>
                            <td>8</td>
                            <td>117 GB</td>
                            <td className="text-green-400">$2.46<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">A100 SXM</td>
                            <td>16</td>
                            <td>125 GB</td>
                            <td className="text-green-400">$2.61<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">L40S</td>
                            <td>16</td>
                            <td>94 GB</td>
                            <td className="text-green-400">$1.29<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">RTX 6000 Ada</td>
                            <td>10</td>
                            <td>167 GB</td>
                            <td className="text-green-400">$1.16<hr /></td>
                          </tr>
                          <tr className="hover:bg-purple-500/10 transition-colors">
                            <td className="py-3 text-white font-medium">A40</td>
                            <td>9</td>
                            <td>50 GB</td>
                            <td className="text-green-400">$0.60<hr /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* All Pricing Options */}
            <TabsContent value="all" className="mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <Card className="h-full border-purple-500/20 bg-slate-800/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">Sharing Cloud</CardTitle>
                      <CardDescription>
                        Shared infrastructure with community features
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                        <table className="w-full text-center">
                          <thead>
                            <tr className="border-b border-purple-500/30">
                              <th className="pb-4 text-purple-400 font-semibold">GPU</th>
                              <th className="pb-4 text-purple-400 font-semibold">vCPU</th>
                              <th className="pb-4 text-purple-400 font-semibold">Memory</th>
                              <th className="pb-4 text-purple-400 font-semibold">Per Hour</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-purple-500/20">
                              <td colSpan={4} className="pt-4 text-sm text-purple-400 font-semibold">80GB VRAM</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H200</td>
                              <td>24</td>
                              <td>276 GB</td>
                              <td>$3.79<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">B200</td>
                              <td>28</td>
                              <td>283 GB</td>
                              <td>$5.99<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H100 NVL</td>
                              <td>16</td>
                              <td>94 GB</td>
                              <td>$2.79<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H100 SXM</td>
                              <td>20</td>
                              <td>125 GB</td>
                              <td>$2.69<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H100 PCIe</td>
                              <td>16</td>
                              <td>188 GB</td>
                              <td>$2.39<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">A100 PCIe</td>
                              <td>8</td>
                              <td>117 GB</td>
                              <td>$1.64<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">A100 SXM</td>
                              <td>16</td>
                              <td>125 GB</td>
                              <td>$1.74<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">L40S</td>
                              <td>16</td>
                              <td>94 GB</td>
                              <td>$0.86<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">RTX 6000 Ada</td>
                              <td>10</td>
                              <td>167 GB</td>
                              <td>$0.77<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">A40</td>
                              <td>9</td>
                              <td>50 GB</td>
                              <td>$0.40<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">L40</td>
                              <td>8</td>
                              <td>94 GB</td>
                              <td>$0.89<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">RTX A6000</td>
                              <td>9</td>
                              <td>50 GB</td>
                              <td>$0.49<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">RTX 5090</td>
                              <td>9</td>
                              <td>35 GB</td>
                              <td>$0.89<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">L4</td>
                              <td>12</td>
                              <td>50 GB</td>
                              <td>$0.39<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">RTX 3090</td>
                              <td>16</td>
                              <td>125 GB</td>
                              <td>$0.46<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">RTX 4090</td>
                              <td>6</td>
                              <td>41 GB</td>
                              <td>$0.69<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">RTX A5000</td>
                              <td>9</td>
                              <td>25 GB</td>
                              <td>$0.27<hr /></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-1">
                  <Card className="h-full border-purple-500/20 bg-slate-800/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">Secure Cloud</CardTitle>
                      <CardDescription>
                        Enhanced security and dedicated resources for sensitive workloads
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                        <table className="w-full text-center">
                          <thead>
                            <tr className="border-b border-purple-500/30">
                              <th className="pb-4 text-purple-400 font-semibold">GPU</th>
                              <th className="pb-4 text-purple-400 font-semibold">vCPU</th>
                              <th className="pb-4 text-purple-400 font-semibold">Memory</th>
                              <th className="pb-4 text-purple-400 font-semibold">Per Hour</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-purple-500/20">
                              <td colSpan={4} className="pt-4 text-sm text-purple-400 font-semibold">Pricing typically 30-50% higher than Community</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H200</td>
                              <td>24</td>
                              <td>276 GB</td>
                              <td className="text-green-400">$5.69<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">B200</td>
                              <td>28</td>
                              <td>283 GB</td>
                              <td className="text-green-400">$8.99<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H100 NVL</td>
                              <td>16</td>
                              <td>94 GB</td>
                              <td className="text-green-400">$4.19<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H100 SXM</td>
                              <td>20</td>
                              <td>125 GB</td>
                              <td className="text-green-400">$4.04<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">H100 PCIe</td>
                              <td>16</td>
                              <td>188 GB</td>
                              <td className="text-green-400">$3.59<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">A100 PCIe</td>
                              <td>8</td>
                              <td>117 GB</td>
                              <td className="text-green-400">$2.46<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">A100 SXM</td>
                              <td>16</td>
                              <td>125 GB</td>
                              <td className="text-green-400">$2.61<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">L40S</td>
                              <td>16</td>
                              <td>94 GB</td>
                              <td className="text-green-400">$1.29<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">RTX 6000 Ada</td>
                              <td>10</td>
                              <td>167 GB</td>
                              <td className="text-green-400">$1.16<hr /></td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">A40</td>
                              <td>9</td>
                              <td>50 GB</td>
                              <td className="text-green-400">$0.60<hr /></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-1">
                  <Card className="h-full border-purple-500/20 bg-slate-800/50">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">Serverless</CardTitle>
                      <CardDescription>
                        Cost effective for every inference workload. Save 15% over other Serverless cloud providers on flex workers alone.
                      </CardDescription>
                      <Button 
                        onClick={() => setShowComingSoon(true)}
                        className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full"
                      >
                        Get started
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                        <table className="w-full text-center">
                          <thead>
                            <tr className="border-b border-purple-500/30">
                              <th className="pb-4 text-purple-400 font-semibold">GPU</th>
                              <th className="pb-4 text-purple-400 font-semibold">Per Second</th>
                              <th className="pb-4 text-purple-400 font-semibold">Per Hour</th>
                              <th className="pb-4 text-purple-400 font-semibold">Notes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-purple-500/20">
                              <td colSpan={4} className="pt-4 text-sm text-purple-400 font-semibold pb-4">Flex - Workers that scale up during traffic spikes and return to idle after completing jobs. Cost-efficient and ideal for bursty workloads.</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">180GB B200</td>
                              <td>$0.00240/s</td>
                              <td>$8.64/hr</td>
                              <td className="text-purple-300 font-medium">Maximum throughput for big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">141GB H200</td>
                              <td>$0.00190/s</td>
                              <td>$6.84/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">80GB H100</td>
                              <td>$0.00155/s</td>
                              <td>$5.58/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">80GB A100</td>
                              <td>$0.00116/s</td>
                              <td>$4.18/hr</td>
                              <td className="text-purple-300 font-medium">High throughput GPU, yet still very cost-effective</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">48GB L40/L40S</td>
                              <td>$0.00076/s</td>
                              <td>$2.74/hr</td>
                              <td className="text-purple-300 font-medium">Extreme inference throughput on LLMs like Llama 3 7B</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">48GB A6000/A40</td>
                              <td>$0.00053/s</td>
                              <td>$1.91/hr</td>
                              <td className="text-purple-300 font-medium">A cost-effective option for running big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">32GB 5090</td>
                              <td>$0.00044/s</td>
                              <td>$1.58/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">24GB 4090</td>
                              <td>$0.00031/s</td>
                              <td>$1.12/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">24GB L4/A5000</td>
                              <td>$0.00019/s</td>
                              <td>$0.68/hr</td>
                              <td className="text-purple-300 font-medium">Great for small-to-medium sized inference workloads</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">16GB A4000</td>
                              <td>$0.00016/s</td>
                              <td>$0.58/hr</td>
                              <td className="text-purple-300 font-medium">The most cost-effective for small models</td>
                            </tr>
                            
                            <tr className="border-b border-purple-500/20">
                              <td colSpan={4} className="pt-4 pb-4 text-sm text-purple-400 font-semibold">Active - Always-on workers that eliminate cold starts. Billed continuously but come with up to 30% discount.</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">180GB B200</td>
                              <td className="text-green-400">$0.00155/s</td>
                              <td className="text-green-400">$5.58/hr</td>
                              <td className="text-purple-300 font-medium">Maximum throughput for big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">141GB H200</td>
                              <td className="text-green-400">$0.00124/s</td>
                              <td className="text-green-400">$4.46/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">80GB H100</td>
                              <td className="text-green-400">$0.00093/s</td>
                              <td className="text-green-400">$3.35/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">80GB A100</td>
                              <td className="text-green-400">$0.00060/s</td>
                              <td className="text-green-400">$2.16/hr</td>
                              <td className="text-purple-300 font-medium">High throughput GPU, yet still very cost-effective</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">48GB L40/L40S</td>
                              <td className="text-green-400">$0.00037/s</td>
                              <td className="text-green-400">$1.33/hr</td>
                              <td className="text-purple-300 font-medium">Extreme inference throughput on LLMs like Llama 3 7B</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">48GB A6000/A40</td>
                              <td className="text-green-400">$0.00024/s</td>
                              <td className="text-green-400">$0.86/hr</td>
                              <td className="text-purple-300 font-medium">A cost-effective option for running big models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">32GB 5090</td>
                              <td className="text-green-400">$0.00021/s</td>
                              <td className="text-green-400">$0.76/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">24GB 4090</td>
                              <td className="text-green-400">$0.00013/s</td>
                              <td className="text-green-400">$0.47/hr</td>
                              <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">24GB L4/A5000</td>
                              <td className="text-green-400">$0.00011/s</td>
                              <td className="text-green-400">$0.40/hr</td>
                              <td className="text-purple-300 font-medium">Great for small-to-medium sized inference workloads</td>
                            </tr>
                            <tr className="hover:bg-purple-500/10 transition-colors">
                              <td className="py-3 text-white font-medium">16GB A4000</td>
                              <td className="text-green-400">$0.00009/s</td>
                              <td className="text-green-400">$0.32/hr</td>
                              <td className="text-purple-300 font-medium">The most cost-effective for small models</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Serverless Pricing */}
            <TabsContent value="serverless" className="mt-12">
              <Card className="border-purple-500/20 bg-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Serverless Pricing</CardTitle>
                  <CardDescription>
                    Cost effective for every inference workload. Save 15% over other Serverless cloud providers on flex workers alone.
                  </CardDescription>
                  <Button 
                    onClick={() => setShowComingSoon(true)}
                    className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full"
                  >
                    Get started
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-center">
                      <thead>
                        <tr className="border-b border-purple-500/30">
                          <th className="pb-4 text-purple-400 font-semibold">GPU</th>
                          <th className="pb-4 text-purple-400 font-semibold">Per Second</th>
                          <th className="pb-4 text-purple-400 font-semibold">Per Hour</th>
                          <th className="pb-4 text-purple-400 font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-purple-500/20">
                          <td colSpan={4} className="pt-4 text-sm text-purple-400 font-semibold pb-4">Flex - Workers that scale up during traffic spikes and return to idle after completing jobs. Cost-efficient and ideal for bursty workloads.</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">180GB B200</td>
                          <td>$0.00240/s</td>
                          <td>$8.64/hr</td>
                          <td className="text-purple-300 font-medium">Maximum throughput for big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">141GB H200</td>
                          <td>$0.00190/s</td>
                          <td>$6.84/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">80GB H100</td>
                          <td>$0.00155/s</td>
                          <td>$5.58/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">80GB A100</td>
                          <td>$0.00116/s</td>
                          <td>$4.18/hr</td>
                          <td className="text-purple-300 font-medium">High throughput GPU, yet still very cost-effective</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">48GB L40/L40S</td>
                          <td>$0.00076/s</td>
                          <td>$2.74/hr</td>
                          <td className="text-purple-300 font-medium">Extreme inference throughput on LLMs like Llama 3 7B</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">48GB A6000/A40</td>
                          <td>$0.00053/s</td>
                          <td>$1.91/hr</td>
                          <td className="text-purple-300 font-medium">A cost-effective option for running big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">32GB 5090</td>
                          <td>$0.00044/s</td>
                          <td>$1.58/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">24GB 4090</td>
                          <td>$0.00031/s</td>
                          <td>$1.12/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">24GB L4/A5000</td>
                          <td>$0.00019/s</td>
                          <td>$0.68/hr</td>
                          <td className="text-purple-300 font-medium">Great for small-to-medium sized inference workloads</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">16GB A4000</td>
                          <td>$0.00016/s</td>
                          <td>$0.58/hr</td>
                          <td className="text-purple-300 font-medium">The most cost-effective for small models</td>
                        </tr>
                        
                        <tr className="border-b border-purple-500/20">
                          <td colSpan={4} className="pt-4 pb-4 text-sm text-purple-400 font-semibold">Active - Always-on workers that eliminate cold starts. Billed continuously but come with up to 30% discount.</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">180GB B200</td>
                          <td className="text-green-400">$0.00155/s</td>
                          <td className="text-green-400">$5.58/hr</td>
                          <td className="text-purple-300 font-medium">Maximum throughput for big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">141GB H200</td>
                          <td className="text-green-400">$0.00124/s</td>
                          <td className="text-green-400">$4.46/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">80GB H100</td>
                          <td className="text-green-400">$0.00093/s</td>
                          <td className="text-green-400">$3.35/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">80GB A100</td>
                          <td className="text-green-400">$0.00060/s</td>
                          <td className="text-green-400">$2.16/hr</td>
                          <td className="text-purple-300 font-medium">High throughput GPU, yet still very cost-effective</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">48GB L40/L40S</td>
                          <td className="text-green-400">$0.00037/s</td>
                          <td className="text-green-400">$1.33/hr</td>
                          <td className="text-purple-300 font-medium">Extreme inference throughput on LLMs like Llama 3 7B</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">48GB A6000/A40</td>
                          <td className="text-green-400">$0.00024/s</td>
                          <td className="text-green-400">$0.86/hr</td>
                          <td className="text-purple-300 font-medium">A cost-effective option for running big models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">32GB 5090</td>
                          <td className="text-green-400">$0.00021/s</td>
                          <td className="text-green-400">$0.76/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">24GB 4090</td>
                          <td className="text-green-400">$0.00013/s</td>
                          <td className="text-green-400">$0.47/hr</td>
                          <td className="text-purple-300 font-medium">Extreme throughput for small-to-medium models</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">24GB L4/A5000</td>
                          <td className="text-green-400">$0.00011/s</td>
                          <td className="text-green-400">$0.40/hr</td>
                          <td className="text-purple-300 font-medium">Great for small-to-medium sized inference workloads</td>
                        </tr>
                        <tr className="hover:bg-purple-500/10 transition-colors">
                          <td className="py-3 text-white font-medium">16GB A4000</td>
                          <td className="text-green-400">$0.00009/s</td>
                          <td className="text-green-400">$0.32/hr</td>
                          <td className="text-purple-300 font-medium">The most cost-effective for small models</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="border-purple-500/20 bg-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Have a question?</h3>
                    <p className="text-gray-300 mb-4">Our team is ready to help you choose the right GPU configuration for your needs.</p>
                    <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full">
                      <Link href="/contact">
                        Contact Support
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md bg-slate-800 border-purple-500/50">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-white mb-4">
              🚀 Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-300 mb-6">
              Our serverless platform is launching soon. Get ready for the most cost-effective GPU cloud solution!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <div className="text-center">
              <p className="text-sm text-purple-400 mb-4">
                Want to be notified when we launch?
              </p>
              <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full">
                <Link href="/contact">
                  Contact Us for Early Access
                </Link>
              </Button>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowComingSoon(false)}
              className="w-full border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
