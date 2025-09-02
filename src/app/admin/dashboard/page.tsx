'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LogOut, 
  Mail, 
  Building, 
  MessageSquare, 
  Calendar, 
  Users,
  TrendingUp,
  Clock,
  Search,
  Filter
} from 'lucide-react'
import { Input } from '@/components/ui/input'

interface ContactSubmission {
  id: string
  name: string
  email: string
  company?: string
  service?: string
  message: string
  createdAt: string
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedService, setSelectedService] = useState('all')
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    fetchSubmissions()
  }, [])

  useEffect(() => {
    filterSubmissions()
  }, [submissions, searchTerm, selectedService])

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin')
    }
  }

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.submissions || [])
      } else {
        // If unauthorized, redirect to login
        router.push('/admin')
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterSubmissions = () => {
    let filtered = submissions

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(sub => 
        sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.message.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by service
    if (selectedService !== 'all') {
      filtered = filtered.filter(sub => sub.service === selectedService)
    }

    setFilteredSubmissions(filtered)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getServiceColor = (service?: string) => {
    const colors: Record<string, string> = {
      'model hosting': 'bg-blue-500/20 text-blue-400',
      'llm model building': 'bg-purple-500/20 text-purple-400',
      'fine-tuning llm model': 'bg-green-500/20 text-green-400',
      'ml model building': 'bg-yellow-500/20 text-yellow-400',
      'deep learning': 'bg-red-500/20 text-red-400',
      'vision model': 'bg-indigo-500/20 text-indigo-400',
      'rag solutions': 'bg-pink-500/20 text-pink-400',
      'cag solutions': 'bg-orange-500/20 text-orange-400',
      'ai agents': 'bg-cyan-500/20 text-cyan-400',
    }
    return colors[service?.toLowerCase() || ''] || 'bg-gray-500/20 text-gray-400'
  }

  const uniqueServices = [...new Set(submissions.map(s => s.service).filter(Boolean))]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-300">Manage contact form submissions</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Submissions</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{submissions.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {submissions.filter(s => 
                  new Date(s.createdAt).getMonth() === new Date().getMonth()
                ).length}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Today</CardTitle>
              <Clock className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                {submissions.filter(s => 
                  new Date(s.createdAt).toDateString() === new Date().toDateString()
                ).length}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800/50 border-purple-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Services</CardTitle>
              <MessageSquare className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{uniqueServices.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-slate-800/50 border-purple-500/20 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, company, or message..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-purple-500/30 text-white rounded-md focus:border-purple-500 focus:outline-none"
              >
                <option value="all">All Services</option>
                {uniqueServices.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Submissions List */}
        <Card className="bg-slate-800/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white">Contact Submissions</CardTitle>
            <CardDescription className="text-gray-300">
              Showing {filteredSubmissions.length} of {submissions.length} submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredSubmissions.length === 0 ? (
              <div className="text-center py-8">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">No submissions found</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredSubmissions.map((submission, index) => (
                  <motion.div
                    key={submission.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-slate-700/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{submission.name}</h3>
                          {submission.service && (
                            <Badge className={getServiceColor(submission.service)}>
                              {submission.service}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm">
                          <div className="flex items-center text-gray-300">
                            <Mail className="w-4 h-4 mr-2" />
                            {submission.email}
                          </div>
                          {submission.company && (
                            <div className="flex items-center text-gray-300">
                              <Building className="w-4 h-4 mr-2" />
                              {submission.company}
                            </div>
                          )}
                          <div className="flex items-center text-gray-300">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(submission.createdAt)}
                          </div>
                        </div>
                        
                        <div className="bg-slate-600/30 rounded p-3">
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {submission.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
