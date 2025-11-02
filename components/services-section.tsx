export function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "⚙️",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Lightning-fast applications that scale with your business needs.",
      icon: "⚡",
    },
    {
      id: 4,
      title: "Consulting",
      description: "Expert guidance on architecture, technology stack, and best practices.",
      icon: "💡",
    },
    {
      id: 5,
      title: "Backend Development",
      description: "Robust APIs and server-side solutions with secure authentication.",
      icon: "🔧",
    },
    {
      id: 6,
      title: "DevOps & Deployment",
      description: "Seamless deployment pipelines and infrastructure management.",
      icon: "🚀",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-sm">SERVICES</p>
            <h2 className="text-4xl sm:text-5xl font-bold">What I Offer</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your specific needs and goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary hover:bg-card transition-all space-y-4"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
