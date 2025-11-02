"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      client: "TechStore Inc",
      challenge: "Reduce cart abandonment rate by 35%",
      solution: "Streamlined checkout process and optimized UX",
      results: "42% decrease in abandonment, 28% increase in conversions",
      tags: ["UX Design", "React", "Conversion Optimization"],
      image: "/ecommerce-platform-redesign-dashboard.jpg",
    },
    {
      id: 2,
      title: "Real-Time Analytics Dashboard",
      client: "DataViz Solutions",
      challenge: "Handle 100K+ data points in real-time",
      solution: "Built with WebSockets and optimized rendering",
      results: "50ms average latency, 99.9% uptime",
      tags: ["Next.js", "WebSockets", "Performance"],
      image: "/real-time-analytics-dashboard-interface.jpg",
    },
    {
      id: 3,
      title: "Mobile Banking App MVP",
      client: "FinTech Startup",
      challenge: "Secure mobile app for financial transactions",
      solution: "End-to-end encryption and biometric auth",
      results: "Launched in 3 months, 15K+ users in first week",
      tags: ["React Native", "Security", "Mobile-First"],
      image: "/mobile-banking-app-interface-payments.jpg",
    },
  ]

  return (
    <section id="case-studies" className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Case Studies</h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Deep dives into selected projects showcasing my process, challenges overcome, and measurable results.
        </p>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className="bg-slate-800/50 border-violet-500/30 hover:border-violet-500/60 transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                      <p className="text-violet-400 font-semibold mb-4">Client: {study.client}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-gray-400 text-sm font-semibold mb-1">CHALLENGE</p>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-semibold mb-1">SOLUTION</p>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-semibold mb-1">RESULTS</p>
                      <p className="text-green-400 font-semibold">{study.results}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} className="bg-violet-500/20 text-violet-300 border-violet-500/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-64 md:h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
