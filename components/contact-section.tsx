"use client"

import type React from "react"

import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-sm">GET IN TOUCH</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send we a message and I'll get back to you as soon as
              possible.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Tell we about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>

          {/* Alternative Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:hello@example.com" className="text-primary hover:underline">
                hello@example.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
