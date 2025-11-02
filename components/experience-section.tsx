export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Company A",
      period: "2022 - Present",
      description: "Led development of core platform features and mentored junior developers.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartUp B",
      period: "2020 - 2022",
      description: "Built scalable applications from scratch and improved performance by 40%.",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Agency C",
      period: "2019 - 2020",
      description: "Designed and implemented responsive user interfaces for 20+ client projects.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-sm">EXPERIENCE</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Career Timeline</h2>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex gap-6">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg" />
                  {index !== experiences.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-sm text-primary font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-foreground/80 font-medium mb-2">{exp.company}</p>
                  <p className="text-foreground/70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
