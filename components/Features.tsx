'use client'
import { useState } from 'react'
import Label from './ui/Label'
import H2 from './ui/H2'
import Badge from './ui/Badge'
import H3 from './ui/H3'
import { ArrowRight, Brain, Cpu, HandHelping, HeartHandshake, MoveUp, ScanHeart, SunMedium, Trees } from 'lucide-react'

const features = [
  {
    icon: <Brain strokeWidth={0.8} size={28} />,
    title: 'Education',
    desc: 'Future of Learning, EdTech, and Empowerment—transforming education with innovation, accessibility, and human-centered technology.',
    tone: 'orange',
    tag: 'Bright Future',
  },
  {
    icon: <Cpu strokeWidth={0.8} size={30}/> ,
    title: 'IT Solution',
    desc: 'Transforming operations through intelligent software, cloud technologies, and data-driven strategies.',
    tone: 'blue',
    tag: 'Technology',
  },
  {
    icon: <ScanHeart strokeWidth={0.8} size={30}/> ,
    title: 'Human Health',
    desc: 'Empowering healthcare through digital solutions designed for accessibility, efficiency, and better outcomes',
    tone: 'orange',
    tag: 'Health, Humanity',
  },
  {
    icon: <HeartHandshake strokeWidth={0.8} size={30}/>,
    title: 'NGO Connectivity',
    desc: 'Supporting social initiatives with digital connectivity designed for scale, inclusion, and impact',
    tone: 'blue',
    tag: 'Social Service',
  },
  {
    icon: <Trees strokeWidth={0.8} size={30}/>,
    title: 'Environment',
    desc: 'Building greener futures through data-driven sustainability, environmental impact solutions, ',
    tone: 'orange',
    tag: 'Healthier Future',
  },
  {
    icon: <SunMedium strokeWidth={0.8} size={30}/>,
    title: 'Innovation',
    desc: 'Empowering growth through continuous improvement, intelligent systems, and forward-thinking technology',
    tone: 'blue',
    tag: 'Empowerment',
  },
]

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="relative py-32 px-6">
      {/* Section label */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Label title='Why OriginInfinity ?' />
          <H2 title='Serving Humanity Through' gradientTitle='Technology, Health, and Education'/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="rounded-2xl p-7 cursor-pointer transition-all duration-300"
              style={{
                background: hovered === i
                  ? f.tone === 'orange'
                    ? 'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(234,88,12,0.08))'
                    : 'linear-gradient(135deg, rgba(59,130,246,0.18), rgba(29,78,216,0.08))'
                  : 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                border: `1px solid ${hovered === i
                  ? f.tone === 'orange' ? 'rgba(249,115,22,0.35)' : 'rgba(59,130,246,0.35)'
                  : 'var(--glass-border)'}`,
                boxShadow: hovered === i
                  ? f.tone === 'orange' ? 'var(--glass-shadow-orange)' : 'var(--glass-shadow-blue)'
                  : 'var(--glass-shadow)',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-5">
                <Badge title={f.tag} tone={f.tone} />
                <div
                  className="text-2xl"
                  style={{ color: f.tone === 'orange' ? 'var(--orange-400)' : 'var(--blue-400)' }}
                >
                  {f.icon}
                </div>
              </div>

              <H3 title={f.title}/>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, fontSize: '0.9rem' }}>
                {f.desc}
              </p>

              {/* Hover arrow */}
              <div
                className="flex items-center gap-2 mt-5 text-sm font-medium transition-all duration-300"
                style={{
                  color: f.tone === 'orange' ? 'var(--orange-400)' : 'var(--blue-400)',
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'translateX(0)' : 'translateX(-8px)',
                }}
              >
                Learn more
                <ArrowRight  size={16}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
