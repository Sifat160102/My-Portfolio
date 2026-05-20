export function AboutMe() {
  return (
    <section id="about" className="bg-cream py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 p-8 md:p-10 bg-white/80 rounded-[2rem] shadow-[0_24px_80px_rgba(83,30,80,0.08)] overflow-visible">
        <div className="md:w-1/3 flex items-center justify-center">
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/myimage.jpg`}
            alt="Sifat Sifat"
            className="w-full max-w-[280px] aspect-[4/5] rounded-[2rem] object-cover object-top shadow-xl"
          />
        </div>
        <div className="md:w-2/3 space-y-6">
          <div className="inline-flex items-center gap-2 bg-sand px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium text-plum/80">About Me</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-plum mb-3">I turn ideas into content that moves people.</h3>
          <p className="text-plum/70 leading-relaxed">
            I am Sifat, a Media Informatics student at TU Wien specialising in Human-Centered Computing. My background is in frontend development and AI-assisted content workflows. I spent a year at a digital agency building web products, creating AI-generated visuals, and managing social media. Now I am transitioning into UX and content strategy, combining the technical side I already know with the design thinking I am learning. I am based in Vienna, open to internships, and looking for work where creativity and technology meet.
          </p>
        </div>
      </div>
    </section>
  )
}
