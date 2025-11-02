"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications with Server Components",
      excerpt:
        "Discover how Next.js server components can drastically improve your app performance and reduce bundle size.",
      category: "React",
      readTime: "5 min read",
      date: "Nov 15, 2024",
      image: "/react-server-components-architecture.jpg",
    },
    {
      id: 2,
      title: "Mastering TypeScript for Enterprise Applications",
      excerpt: "A comprehensive guide to using TypeScript effectively in large-scale production environments.",
      category: "TypeScript",
      readTime: "8 min read",
      date: "Nov 10, 2024",
      image: "/typescript-enterprise-development-best-practices.jpg",
    },
    {
      id: 3,
      title: "Web Accessibility: A Developer's Practical Guide",
      excerpt: "Essential accessibility practices that make your web applications usable for everyone.",
      category: "Accessibility",
      readTime: "6 min read",
      date: "Nov 5, 2024",
      image: "/web-accessibility-wcag-compliance-inclusive-design.jpg",
    },
    {
      id: 4,
      title: "Database Optimization Techniques for Production Systems",
      excerpt: "Proven strategies to optimize database queries and improve application performance at scale.",
      category: "Backend",
      readTime: "7 min read",
      date: "Oct 30, 2024",
      image: "/database-optimization-performance-tuning.jpg",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Blog & Insights</h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Articles and tutorials where I share my knowledge and expertise with the community.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-slate-800/50 border-violet-500/30 hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="overflow-hidden h-48">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/50">{article.category}</Badge>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <Link href="#" className="text-violet-400 hover:text-violet-300 text-sm font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
