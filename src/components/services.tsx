"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/language-provider'

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      title: t('services.rope.title'),
      description: t('services.rope.desc'),
      icon: '🪢',
      features: ['High-rise maintenance', 'Building cleaning', 'Facade inspection', 'Emergency repairs']
    },
    {
      title: t('services.ndt.title'),
      description: t('services.ndt.desc'),
      icon: '🔬',
      features: ['Ultrasonic testing', 'Radiographic testing', 'Magnetic particle', 'Dye penetrant']
    },
    {
      title: t('services.safety.title'),
      description: t('services.safety.desc'),
      icon: '🛡️',
      features: ['IRATA certification', 'Safety training', 'Risk assessment', 'Equipment inspection']
    },
    {
      title: t('services.inspection.title'),
      description: t('services.inspection.desc'),
      icon: '🏗️',
      features: ['Structural assessment', 'Condition surveys', 'Defect analysis', 'Compliance reports']
    }
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive industrial solutions delivered by certified professionals with cutting-edge technology and unwavering commitment to safety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-blue-200 dark:hover:border-blue-800"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-muted-foreground">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  {t('common.learnMore')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our expert team can design tailored rope access and NDT solutions for your specific industrial requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                {t('common.getQuote')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                {t('nav.contact')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
