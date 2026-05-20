export function MarqueeBanner() {
  const text = "IG // AI CREATIVITY // VIRAL GROWTH // DATA DRIVEN STORYTELLING // HUMAN-CENTERED DESIGN // "
  
  return (
    <section className="bg-plum py-4 overflow-hidden">
      <div className="relative flex">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-cream/90 text-sm md:text-base font-semibold tracking-widest uppercase mx-4">
              {text}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex whitespace-nowrap absolute top-0" aria-hidden="true">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-cream/90 text-sm md:text-base font-semibold tracking-widest uppercase mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
