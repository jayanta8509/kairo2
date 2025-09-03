# 🚀 KairoAI - AI Model Hosting & Custom Solutions

<div align="center">


**Deploy your AI models on high-performance GPU/CPU servers or get custom AI solutions built for your business needs.**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.11.1-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

[🌐 Website](https://www.kairoai.ai) • [📧 Contact](mailto:kairoai.helpdesk@gmail.com) • [💬 Support](https://www.kairoai.ai/contact)

</div>

---

## 🌟 About KairoAI

KairoAI is a cutting-edge AI platform that provides comprehensive solutions for businesses looking to leverage artificial intelligence. We offer flexible model hosting services on high-performance infrastructure and custom AI development tailored to your specific requirements.

### 🎯 Our Mission
To democratize AI technology by providing accessible, scalable, and cost-effective solutions that empower businesses to integrate AI into their workflows seamlessly.

## ✨ Core Services

### 🖥️ Model Hosting
- **High-Performance Infrastructure**: GPU/CPU servers optimized for AI workloads
- **Flexible Pricing**: Pay-as-you-use and dedicated hosting options
- **Auto-Scaling**: Dynamic resource allocation based on demand
- **Multiple GPU Options**: From RTX 4090 to H200 for various workload requirements

### 🔧 Custom AI Solutions
- **LLM Model Building**: Custom Large Language Models from scratch
- **Fine-Tuning Services**: Domain-specific model optimization
- **Machine Learning Models**: Traditional ML for predictive analytics
- **Deep Learning Models**: Advanced neural networks for complex tasks
- **Computer Vision**: Image recognition and object detection models
- **RAG Solutions**: Retrieval-Augmented Generation for knowledge integration
- **CAG Solutions**: Cache-Augmented Generation for lightning-fast responses
- **AI Agents**: Automated workflow and business process solutions

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion
- **State Management**: Zustand

### Backend & Infrastructure
- **Database**: Prisma ORM with SQLite
- **Authentication**: NextAuth.js
- **Real-time Communication**: Socket.IO
- **API**: Next.js API Routes
- **Deployment**: Custom server with tsx

### Key Features
- 🎨 Modern, responsive design with dark theme
- 🔒 Secure authentication and data handling
- 📊 Interactive pricing tables and service catalogs
- 💬 Real-time communication capabilities
- 📱 Mobile-first responsive design
- ⚡ Performance optimized with animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Database (SQLite included for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kairoai/kairoai-platform.git
   cd kairoai-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   DATABASE_URL="file:./db/custom.db"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to see the application.

### Alternative Custom Server
For enhanced features with Socket.IO:
```bash
npm run dev:custom
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── custom-ai-solutions/ # Custom AI solutions page
│   ├── industries/        # Industries page
│   ├── pricing/           # Pricing page
│   └── services/          # Services page
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── Navigation.tsx    # Main navigation
│   └── Particles.tsx     # Background particles
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
│   ├── db.ts            # Database configuration
│   ├── socket.ts        # Socket.IO configuration
│   └── utils.ts         # Utility functions
└── styles/              # Global styles
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run dev:custom` | Start custom development server with Socket.IO |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run start:custom` | Start custom production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push database schema |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:migrate` | Run database migrations |
| `npm run db:reset` | Reset database |

## 🎨 Key Features

### 🏠 Landing Page
- Hero section with compelling value proposition
- Service overview with interactive cards
- Pricing preview and call-to-action
- Modern particle background effects

### 💰 Pricing Page
- Comprehensive GPU pricing tables
- Hosted Cloud vs Serverless options
- Interactive tabs for different service tiers
- Responsive pricing cards

### 🤝 About Page
- Company mission and values
- Team member profiles
- Technology stack showcase
- Company timeline and achievements

### 📞 Contact Page
- Interactive contact form with validation
- Company contact information
- Service inquiry categories
- Real-time form submission

### 🔧 Services Page
- Detailed service descriptions
- Feature comparisons
- Technical specifications
- Integration examples

## 🌐 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Custom Server Deployment
```bash
npm run build
npm run start:custom
```

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
```

## 🤝 Contributing

We welcome contributions to the KairoAI platform! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Write meaningful commit messages
- Update documentation as needed

## 📄 License

This project is proprietary software owned by KairoAI. All rights reserved.

## 📞 Support & Contact

**KairoAI Team**
- 🌐 Website: [www.kairoai.ai](https://www.kairoai.ai)
- 📧 Email: [kairoai.helpdesk@gmail.com](mailto:kairoai.helpdesk@gmail.com)
- 📞 Phone: +91 80170 21283
- 📍 Location: Kolkata, India
- 🕒 Business Hours: Mon-Fri, 9AM-6PM IST

### Leadership Team
- **Jayanta Roy** - Founder & CEO
- **Prachi Majumder** - CTO

---

<div align="center">

**Built with ❤️ by the KairoAI Team**

*Empowering businesses with cutting-edge AI solutions*

</div>
