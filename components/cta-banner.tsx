"use client"

export function CTABanner() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-primary/80 to-accent">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground">Ready to Start Your Project?</h2>
        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Let's collaborate to bring your vision to life. Get in touch today and let's create something amazing
          together.
        </p>
        <button
          onClick={scrollToContact}
          className="px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          Start a Project
        </button>
      </div>
    </section>
  )
}
