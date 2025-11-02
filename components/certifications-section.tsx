"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CertificationsSection() {
  const certifications = [
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: 2023, icon: "🏆" },
    { title: "Google UX Design Certificate", issuer: "Google", year: 2023, icon: "🎓" },
    { title: "React Advanced Patterns", issuer: "Frontend Masters", year: 2022, icon: "⭐" },
    { title: "Full Stack Web Development", issuer: "Udacity Nanodegree", year: 2022, icon: "✓" },
    { title: "Node.js Application Development", issuer: "Linux Academy", year: 2021, icon: "🔐" },
    {
      title: "Web Accessibility Specialist",
      issuer: "International Association of Accessibility Professionals",
      year: 2021,
      icon: "♿",
    },
  ]

  const awards = [
    { title: "Developer of the Year", organization: "Tech Innovation Summit", year: 2023 },
    { title: "Best UI/UX Design", organization: "Digital Awards 2023", year: 2023 },
    { title: "Top 50 Rising Tech Talents", organization: "Forbes 30 Under 30 Tech", year: 2022 },
    { title: "Open Source Contribution Award", organization: "GitHub Community", year: 2022 },
  ]

  return (
    <section id="certifications" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Certifications & Awards</h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Recognitions and achievements that validate my expertise and commitment to continuous learning.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-violet-400 mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-violet-500/20 hover:border-violet-500/60 p-4 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{cert.title}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                      <Badge className="mt-2 bg-violet-500/20 text-violet-300 border-violet-500/50">{cert.year}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-bold text-pink-400 mb-6">Awards & Recognition</h3>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-pink-500/20 hover:border-pink-500/60 p-4 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🎯</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{award.title}</h4>
                      <p className="text-gray-400 text-sm">{award.organization}</p>
                      <Badge className="mt-2 bg-pink-500/20 text-pink-300 border-pink-500/50">{award.year}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
