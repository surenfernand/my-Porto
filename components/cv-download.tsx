"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CVDownload() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className="flex flex-col gap-3">
        <Link href="/resume.pdf" download>
          <Button className="w-full bg-gradient-to-r from-violet-500 to-pink-500 hover:shadow-lg hover:shadow-violet-500/50 text-white font-bold">
            Download CV
          </Button>
        </Link>
        <p className="text-xs text-gray-400 text-center">PDF • 2.4 MB</p>
      </div>
    </div>
  )
}
