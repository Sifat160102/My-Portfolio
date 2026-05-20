export function AICreativitySection() {
  return (
    <section id="work" className="bg-plum py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 text-balance">
            AI-Assisted Campaigns
          </h2>
          <p className="text-lg text-cream/70 leading-relaxed">
            I used Midjourney for this campaign when AI image tools were just gaining momentum, and our face-swap concept launched a new brand experience around a website tool for creative AI images.
          </p>
          <p className="text-lg text-cream/70 leading-relaxed mt-4">
            These visuals were designed to build social buzz with authentic, shareable storytelling and creative face-swap content that helped the brand stand out.
          </p>
        </div>
        
        {/* 2-Column Image Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group overflow-hidden rounded-[2rem] border border-cream/10 shadow-xl shadow-plum/10 hover:shadow-pink/20 transition-all duration-300 bg-[#2b173f]">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/viral-work-1.png"
                alt="Viral content work 1"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="px-5 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-cream/70">Strategic brand activation</p>
              <p className="text-sm font-semibold text-cream mt-2">Face-swapped a trending athlete into the post, tagged her, and earned a repost plus comments that boosted reach and followers.</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-[2rem] border border-cream/10 shadow-xl shadow-plum/10 hover:shadow-pink/20 transition-all duration-300 bg-[#2b173f]">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src="/viral-work-2.png"
                alt="Viral content work 2"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="px-5 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-cream/70">Trend-driven campaign</p>
              <p className="text-sm font-semibold text-cream mt-2">Screenshot from a top-performing reel that face-swapped big personalities into a creative story.</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-plum/10 my-12" />
    </section>
  )
}
