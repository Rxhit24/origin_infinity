import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Carousel from '@/components/Carousel'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'

export default function Page() {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Global mesh gradient background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: `
            radial-gradient(ellipse at 15% 40%, rgba(249,115,22,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 15%, rgba(59,130,246,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 55% 85%, rgba(234,88,12,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 70%, rgba(29,78,216,0.12) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <main>
        <Hero />

        <div className="max-w-7xl mx-auto px-6">
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), rgba(59,130,246,0.3), transparent)' }} />
        </div>

        <Features />

        <div className="max-w-7xl mx-auto px-6">
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(249,115,22,0.3), transparent)' }} />
        </div>

        <Carousel />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Accordion />
        <ContactForm />
      </main>
    </div>
  )
}
