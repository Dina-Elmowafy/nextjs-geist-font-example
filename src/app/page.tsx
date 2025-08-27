"use client"

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Industries } from '@/components/industries'
import { Stats } from '@/components/stats'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Industries />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
