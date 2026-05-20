export function VideoSection() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-plum mb-6 text-balance">
            Short-Form Video Production
          </h2>
          <p className="text-lg text-plum/70 leading-relaxed">
            A showcase of my personal short-form video concepts developed using iMovie and Canva. These projects focus on dynamic pacing, engaging text hooks, and platform-optimized storytelling designed to capture top-of-funnel reach on Instagram Reels and TikTok.
          </p>
        </div>
        
        {/* 2-Column Video Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Video Card 1 */}
          <div className="group relative bg-sand rounded-2xl overflow-hidden border border-plum/5 hover:border-pink/50 transition-all duration-300 hover:shadow-xl min-h-[420px] md:min-h-[360px] flex items-center justify-center">
            <video
              src="/video-reel.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Video Card 2 */}
          <div className="group relative bg-sand rounded-2xl overflow-hidden border border-plum/5 hover:border-pink/50 transition-all duration-300 hover:shadow-xl min-h-[420px] md:min-h-[360px] flex items-center justify-center">
            <video
              src="/movnew.mp4"
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <hr className="border-t border-sand/40 my-12" />
    </section>
  )
}
