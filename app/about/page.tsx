"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
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

  const teamMembers = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Jane has over 15 years of experience in asset management and technology.",
    },
    {
      name: "John Doe",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "John leads our engineering team with a focus on scalable and secure solutions.",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah ensures our product meets the evolving needs of our customers.",
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael creates intuitive and beautiful user experiences for our platform.",
    },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-muted py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="container relative px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-[800px] text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About AssetManager</h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We're on a mission to simplify asset management for businesses of all sizes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                  <p className="text-muted-foreground md:text-lg">
                    Founded in 2018, AssetManager was born out of frustration with existing asset management solutions
                    that were either too complex or too simplistic.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    Our founders, with decades of experience in asset management and technology, set out to create a
                    platform that strikes the perfect balance between power and usability.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    Today, we serve thousands of businesses worldwide, from small startups to Fortune 500 companies,
                    helping them track, manage, and optimize their assets for maximum performance and ROI.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  width={500}
                  height={500}
                  alt="Our team working together"
                  className="rounded-lg shadow-xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-muted py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-fixed"></div>
          <div className="container relative px-4 md:px-6">
            <motion.div
              className="mx-auto mb-12 max-w-[800px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                These core principles guide everything we do at AssetManager.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "Customer First",
                  description:
                    "We put our customers at the center of everything we do, constantly seeking feedback and improving our platform.",
                },
                {
                  title: "Innovation",
                  description: "We're always pushing the boundaries of what's possible in asset management technology.",
                },
                {
                  title: "Simplicity",
                  description:
                    "We believe powerful software doesn't have to be complicated. We strive for elegant, intuitive solutions.",
                },
                {
                  title: "Security",
                  description:
                    "We take the security of our customers' data seriously, implementing industry-leading security measures.",
                },
                {
                  title: "Transparency",
                  description: "We believe in open communication with our customers, partners, and team members.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "We're never satisfied with the status quo and are always looking for ways to improve our platform.",
                },
              ].map((value, index) => (
                <motion.div key={index} className="rounded-lg bg-background p-6 shadow-lg" variants={fadeIn}>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="mx-auto mb-12 max-w-[800px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Meet the talented individuals behind AssetManager.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {teamMembers.map((member, index) => (
                <motion.div key={index} className="rounded-lg bg-muted p-6 text-center" variants={fadeIn}>
                  <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                          : index === 1
                            ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                            : index === 2
                              ? "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                              : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
                      }
                      width={128}
                      height={128}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-primary-foreground md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center"></div>
          <div className="container relative px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-[800px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Growing Team</h2>
              <p className="mt-4 md:text-xl">We're always looking for talented individuals to join our mission.</p>
              <div className="mt-8">
                <Link href="/careers">
                  <Button size="lg" variant="secondary" className="gap-2">
                    View Open Positions
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

