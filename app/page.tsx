import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
// import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
// import { CaseStudiesSection } from "@/components/case-studies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
// import { CertificationsSection } from "@/components/certifications-section"
import BlogSection from "@/components/blog-section"
// import { GallerySection } from "@/components/gallery-section"
// import { ClientsLogoWall } from "@/components/clients-logo-wall"
import { CTABanner } from "@/components/cta-banner"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import CVDownload from "@/components/cv-download" // Changed CVDownload import to default export (removed curly braces)

export const metadata = {
  title: "Portfolio | Your Name",
  description: "Personal portfolio website",
}

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        {/* <SkillsSection /> */}
        <ExperienceSection />
        <ProjectsSection />
        {/* <CaseStudiesSection /> */}
        <ServicesSection />
        {/* <ClientsLogoWall /> */}
        <TestimonialsSection />
        {/* <CertificationsSection /> */}
        <BlogSection />
        {/* <GallerySection /> */}
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
      <CVDownload />
    </>
  )
}
