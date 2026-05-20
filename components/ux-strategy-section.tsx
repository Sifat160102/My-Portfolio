export function UXStrategySection() {
  return (
    <section id="ux" className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-sand rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-plum/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full mb-8">
              <svg className="w-5 h-5 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-sm font-medium text-plum/80">UX Strategy</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum mb-8 text-balance">
              The Intersection of Tech and Design
            </h2>
            
            <p className="text-lg md:text-xl text-plum/70 leading-relaxed">
              As an Informatics expert specializing in Human-Centered Computing and Design Thinking, I look at social media through an analytical lens. I apply deep behavioral data and user experience principles to my creative process. I don&apos;t just focus on making aesthetically pleasing grids; I design and optimize the entire digital funnel—ensuring that the journey from an initial social media impression to a website landing page conversion is completely seamless, accessible, and high-converting.
            </p>
            
            {/* Clickable cards for UX / AI / Data */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
              <a href="#ux" className="group block w-64 bg-white/70 hover:bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div className="text-xl font-bold text-plum">UX</div>
                <div className="text-sm text-plum/60 mt-2">Human-centered thinking.</div>
              </a>

              <a href="#ai" className="group block w-64 bg-white/70 hover:bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div className="text-xl font-bold text-plum">AI</div>
                <div className="text-sm text-plum/60 mt-2">Generative tools and prompts.</div>
              </a>

              <a href="#data" className="group block w-64 bg-white/70 hover:bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div className="text-xl font-bold text-plum">Data</div>
                <div className="text-sm text-plum/60 mt-2">Content that is measured.</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
