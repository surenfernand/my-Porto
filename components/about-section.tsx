export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:flex justify-center">
            <img
              src="/professional-headshot-portrait-developer.jpg"
              alt="Profile"
              className="w-full max-w-xs rounded-lg border-2 border-primary shadow-lg object-cover"
            />
          </div>

          {/* Left Column - Title & Text */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold text-sm mb-2">ABOUT ME</p>
              <h2 className="text-4xl sm:text-5xl font-bold">Passionate About Building Great Products</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed text-lg">
              I'm a full-stack developer with a passion for creating beautiful, functional web applications. With 5+
              years of experience, I've worked with startups and enterprises to bring their ideas to life.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg">
              My expertise spans React, Node.js, TypeScript, and cloud technologies. I'm committed to writing clean,
              maintainable code and delivering exceptional user experiences.
            </p>

            {/* Right Column - Skills */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Skills & Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "AWS"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                      >
                        <span className="text-foreground font-medium">{skill}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
