import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-cream pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-sand px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-pink rounded-full animate-pulse" />
              <span className="text-sm font-medium text-plum/80">TU Wien</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-sand px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-pink rounded-full animate-pulse" />
              <span className="text-sm font-medium text-plum/80">Vienna</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-sand px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-pink rounded-full animate-pulse" />
              <span className="text-sm font-medium text-plum/80">German A1</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-sand px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-pink rounded-full animate-pulse" />
              <span className="text-sm font-medium text-plum/80">Open to Work</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-plum leading-tight text-balance">
            I turn ideas into content that moves people.
          </h1>

          <p className="text-lg text-plum/70 leading-relaxed max-w-xl">
            MSc Media Informatics at TU Wien. Frontend developer turned content creator. Building at the intersection of AI, design, and storytelling.
          </p>

          <div className="flex items-start gap-6">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 bg-pink text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-pink/90 transition-all shadow-lg shadow-pink/25 hover:shadow-xl hover:shadow-pink/30 hover:-translate-y-0.5"
            >
              Explore My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-start gap-6 mt-4 sm:mt-2">
              <div className="min-w-[110px] text-center">
                <div className="text-xl font-bold text-pink">3</div>
                <div className="text-sm text-plum/60">Platforms</div>
              </div>
              <div className="min-w-[110px] text-center">
                <div className="text-xl font-bold text-pink">1</div>
                <div className="text-sm text-plum/60">Year Experience</div>
              </div>
              <div className="min-w-[110px] text-center">
                <div className="text-xl font-bold text-pink">AI Content</div>
                <div className="text-sm text-plum/60">Created</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Lottie iframe inside card frame */}
        <div className="relative flex items-center justify-center h-full">
          <div className="w-full max-w-[620px] h-[400px] md:h-[420px] bg-white/95 border border-pink/10 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(255,90,141,0.24)] flex items-center justify-center relative">
            <div className="absolute inset-0 bg-pink/10 blur-3xl opacity-80" />
            <div className="relative z-10 inset-0 w-full h-full p-6">
              <div className="w-full h-full flex items-center justify-center">
                <iframe
                  src="https://lottie.host/embed/4a93f8fb-0871-49b0-8ded-419979ad35e2/rntT6CZWaL.lottie"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title="Digital Marketing Animation"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
