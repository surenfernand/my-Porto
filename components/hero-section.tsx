"use client"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-4">
          <img
            src="/professional-headshot.png"
            alt="Profile picture"
            className="w-32 h-32 rounded-full border-4 border-primary shadow-lg object-cover"
          />
        </div>

        {/* Greeting */}
        <div className="space-y-4">
          <p className="text-primary font-semibold text-lg">Welcome to my portfolio</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">Your Name Here</h1>
          <p className="text-xl sm:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & Creative Problem Solver
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          I build modern web experiences that blend exceptional design with robust engineering. Let's create something
          amazing together.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center gap-4 pt-8">
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Contact Me
          </button>
          <button
            onClick={() => {
              const element = document.getElementById("projects")
              element?.scrollIntoView({ behavior: "smooth" })
            }}
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            View My Work
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
