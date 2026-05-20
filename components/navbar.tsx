"use client"

import { useEffect, useState } from "react"

export function Navbar() {
  const [active, setActive] = useState<string>("about")

  useEffect(() => {
    const sectionIds = ['about', 'work', 'ux', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0.25, 0.5, 0.75],
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-plum/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" onClick={handleClick('about')} className="flex items-center gap-3 text-xl font-bold text-plum tracking-tight">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
          <span>Sifat Sifat</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" onClick={handleClick('about')} className={`font-medium ${active === 'about' ? 'text-pink' : 'text-plum/70'} hover:text-pink transition-colors`}>
            About Me
          </a>
          <a href="#work" onClick={handleClick('work')} className={`font-medium ${active === 'work' ? 'text-pink' : 'text-plum/70'} hover:text-pink transition-colors`}>
            My Work
          </a>
          <a href="#ux" onClick={handleClick('ux')} className={`font-medium ${active === 'ux' ? 'text-pink' : 'text-plum/70'} hover:text-pink transition-colors`}>
            UX Strategy
          </a>
          <a href="#contact" onClick={handleClick('contact')} className={`font-medium ${active === 'contact' ? 'text-pink' : 'text-plum/70'} hover:text-pink transition-colors`}>
            Contact
          </a>
        </div>
        <button onClick={handleClick('contact')} className="bg-pink text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-pink/90 transition-colors shadow-lg shadow-pink/25">
          Hire Me Now
        </button>
      </div>
    </nav>
  )
}
