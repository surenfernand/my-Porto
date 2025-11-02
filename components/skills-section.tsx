"use client"

import { Card } from "@/components/ui/card"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML/CSS"],
      color: "from-violet-500 to-purple-500",
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
      color: "from-pink-500 to-violet-500",
    },
    {
      category: "Design",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility", "Design Systems"],
      color: "from-violet-500 to-indigo-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Skills & Tech Stack</h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I use to build exceptional digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-violet-500/30 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 p-6"
            >
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
