"use client"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-background to-muted"
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/sf-logo.png"
            alt="SKF TECHNOLOGIES Logo"
            className="w-40 h-40 object-contain drop-shadow-xl"
          />
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary">
            SKF TECHNOLOGIES
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Empowering Businesses Through <span className="text-primary font-semibold">Innovation</span> and{" "}
            <span className="text-primary font-semibold">Technology</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          At SKF TECHNOLOGIES, we specialize in crafting modern web and software solutions that drive growth,
          enhance efficiency, and transform your digital presence.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-5 pt-8">
          <button
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Our Services
          </button>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
