export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A modern SaaS platform built with Next.js and TypeScript",
      image: "/modern-saas-dashboard.png",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Real-time collaboration tool with WebSocket integration",
      image: "/real-time-collaboration-app-interface.jpg",
      tags: ["React", "Node.js", "WebSocket", "MongoDB"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Mobile-first e-commerce platform with payment integration",
      image: "/ecommerce-store-product-showcase.jpg",
      tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-primary font-semibold text-sm">MY WORK</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group overflow-hidden rounded-lg border border-border hover:border-primary transition-all hover:bg-card/80 hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-full h-40 overflow-hidden bg-background">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-2 px-6">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-foreground/70 text-sm">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 px-6 pb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
