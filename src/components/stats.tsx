"use client"

import { useEffect, useState } from 'react'
import { useLanguage } from '@/components/language-provider'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

export function Stats() {
  const { t } = useLanguage()

  const stats = [
    {
      number: 15,
      suffix: '+',
      label: t('common.years'),
      icon: '📅',
      description: 'of industry expertise'
    },
    {
      number: 500,
      suffix: '+',
      label: t('common.projects'),
      icon: '🏗️',
      description: 'successfully delivered'
    },
    {
      number: 150,
      suffix: '+',
      label: t('common.clients'),
      icon: '🤝',
      description: 'across multiple industries'
    },
    {
      number: 99,
      suffix: '%',
      label: 'Safety Record',
      icon: '🛡️',
      description: 'zero incident rate'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Track Record
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and client satisfaction
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold mb-2 opacity-90">
                  {stat.label}
                </div>
                <div className="text-sm opacity-75">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Our expertise spans across major industries including oil & gas, construction, 
              marine, and power generation sectors.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
              <div className="text-center">
                <div className="text-2xl mb-1">🏢</div>
                <div className="text-sm">Fortune 500</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🌍</div>
                <div className="text-sm">Global Reach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm">24/7 Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🎯</div>
                <div className="text-sm">Precision Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
