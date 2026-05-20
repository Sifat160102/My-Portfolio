import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutMe } from "@/components/about-me"
import { AICreativitySection } from "@/components/ai-creativity-section"
import { VideoSection } from "@/components/video-section"
import { UXStrategySection } from "@/components/ux-strategy-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <AICreativitySection />
      <VideoSection />
      <UXStrategySection />
      <MarqueeBanner />
      <Footer />
    </main>
  )
}
