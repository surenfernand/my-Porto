"use client"

import Image from "next/image"
import { useState } from "react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const gallery = [
    { id: 1, src: "/web-design-portfolio-showcase.jpg", alt: "Project Screenshot 1" },
    { id: 2, src: "/user-interface-design-mockup.jpg", alt: "Project Screenshot 2" },
    { id: 3, src: "/mobile-app-design-interface.jpg", alt: "Project Screenshot 3" },
    { id: 4, src: "/modern-dashboard-ui.png", alt: "Project Screenshot 4" },
    { id: 5, src: "/web-application-screenshot.jpg", alt: "Project Screenshot 5" },
    { id: 6, src: "/ux-design-prototype.jpg", alt: "Project Screenshot 6" },
  ]

  return (
    <section id="gallery" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Gallery & Media</h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          A visual collection of my recent projects, designs, and creative work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(item.id)}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Image
                src={gallery.find((item) => item.id === selectedImage)?.src || ""}
                alt="Gallery preview"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
