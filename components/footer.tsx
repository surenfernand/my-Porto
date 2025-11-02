export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: "github",
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: "linkedin",
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: "twitter",
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: "mail",
      href: "mailto:hello@example.com",
      label: "Email",
    },
  ]

  const iconMap: Record<string, string> = {
    github: "↗",
    linkedin: "in",
    twitter: "𝕏",
    mail: "@",
  }

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/icons/vector-logo.png" alt="Logo" className="w-10 h-10 rounded" />
              <h3 className="text-xl font-bold">Your Name</h3>
            </div>
            <p className="text-foreground/70">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <span className="text-sm font-semibold">{iconMap[link.icon]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
