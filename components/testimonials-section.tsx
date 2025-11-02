export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc",
      image: "/professional-woman-headshot.png",
      quote:
        "Working with this developer was transformative for our business. The quality of work exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, Growth Labs",
      image: "/professional-man-headshot.png",
      quote: "Exceptional attention to detail and communication throughout the project. Highly recommended!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, Creative Agency",
      image: "/professional-creative-woman.png",
      quote: "The best investment we made for our digital presence. Professional, reliable, and innovative.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-sm">TESTIMONIALS</p>
            <h2 className="text-4xl sm:text-5xl font-bold">What Clients Say</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-colors space-y-4"
              >
                {/* Quote */}
                <p className="text-foreground/80 italic leading-relaxed">"{testimonial.quote}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
