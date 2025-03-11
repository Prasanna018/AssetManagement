"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, PieChart, TrendingUp, Shield, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const features = [
    {
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      title: "Asset Tracking",
      description: "Track all your assets in real-time with detailed analytics and reporting.",
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Portfolio Management",
      description: "Manage diverse portfolios with customizable dashboards and insights.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "Performance Analytics",
      description: "Monitor performance with advanced analytics and predictive insights.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect your sensitive asset data.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Real-time Updates",
      description: "Get instant notifications and updates on your asset performance.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Collaboration",
      description: "Collaborate with your team with role-based access controls.",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Manage Your Assets with Confidence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our comprehensive asset management platform helps you track, manage, and optimize your assets for
                    maximum performance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="gap-1">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  width={600}
                  height={600}
                  alt="Asset Management Dashboard"
                  className="rounded-lg shadow-xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed"></div>
          <div className="container relative px-4 md:px-6">
            <motion.div
              className="mx-auto mb-12 max-w-[800px] text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Features for Asset Management
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Our platform offers a comprehensive suite of tools to help you manage your assets effectively.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {features.map((feature, index) => (
                <motion.div key={index} className="rounded-lg bg-background p-6 shadow-lg" variants={fadeIn}>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="container relative px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-[800px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Optimize Your Asset Management?
              </h2>
              <p className="mt-4 md:text-xl">
                Join thousands of companies that trust our platform for their asset management needs.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/register">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full border-primary-foreground sm:w-auto">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-fixed"></div>
          <div className="container relative px-4 md:px-6">
            <motion.div
              className="mx-auto mb-12 max-w-[800px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                See what our customers have to say about our asset management platform.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[1, 2, 3].map((_, index) => (
                <motion.div key={index} className="rounded-lg bg-muted p-6" variants={fadeIn}>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-primary/20">
                      <Image
                        src={`https://images.unsplash.com/photo-${index === 0 ? "1507003211169-0a1dd7228f2d" : index === 1 ? "1573497019940-1c28c88b4f3e" : "1494790108377-be9c29b29330"}?q=80&w=100&auto=format&fit=crop`}
                        width={48}
                        height={48}
                        alt="Customer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">John Smith</h4>
                      <p className="text-sm text-muted-foreground">CTO, Tech Company</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "AssetManager has transformed how we track and manage our assets. The platform is intuitive,
                    powerful, and has saved us countless hours of manual work."
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

