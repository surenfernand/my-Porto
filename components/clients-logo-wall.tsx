"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function ClientsLogoWall() {
  const clients = [
    { name: "Tech Corp", logo: "/tech-company-logo-corporate.jpg" },
    { name: "Design Studios", logo: "/design-studio-logo.png" },
    { name: "StartUp Hub", logo: "/startup-logo-modern.jpg" },
    { name: "Global Services", logo: "/placeholder.svg?height=80&width=150" },
    { name: "Digital Agency", logo: "/placeholder.svg?height=80&width=150" },
    { name: "Innovation Lab", logo: "/placeholder.svg?height=80&width=150" },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Trusted by Leading Brands</h2>
        <p className="text-center text-gray-400 mb-16">
          I've had the privilege to work with innovative companies worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => (
            <Card
              key={client.name}
              className="bg-slate-800/50 border-violet-500/20 hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300 p-6 flex items-center justify-center"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={150}
                height={80}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
