export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="hidden md:flex justify-center">
            <img
              src="/company-office-team.jpg"
              alt="SKF Technologies Team"
              className="w-full max-w-md rounded-lg border-2 border-primary shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold text-sm mb-2">ABOUT US</p>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Driving Innovation Through Technology
              </h2>
            </div>

            <p className="text-foreground/80 leading-relaxed text-lg">
              At <span className="font-semibold">SKF TECHNOLOGIES</span>, we specialize in delivering innovative and
              reliable software solutions that help businesses thrive in the digital era. Our mission is to transform
              ideas into scalable, high-performance products that empower organizations worldwide.
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg">
              With a passionate team of engineers and designers, we focus on crafting tailor-made web and mobile
              solutions using modern technologies, ensuring quality, efficiency, and long-term success for our clients.
            </p>

            {/* Company Focus Areas */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Web Development",
                    "Mobile Applications",
                    "Cloud Solutions",
                    "UI/UX Design",
                    "E-commerce Platforms",
                    "Enterprise Software",
                    "API Integrations",
                    "Maintenance & Support",
                  ].map((service) => (
                    <div
                      key={service}
                      className="p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors"
                    >
                      <span className="text-foreground font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
