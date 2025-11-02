export function StatsSection() {
  const stats = [
    {
      label: "Projects Completed",
      value: "50+",
    },
    {
      label: "Happy Clients",
      value: "30+",
    },
    {
      label: "Years Experience",
      value: "5+",
    },
    {
      label: "Code Reviews",
      value: "1000+",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-lg border border-border text-center hover:border-primary transition-colors"
            >
              <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
