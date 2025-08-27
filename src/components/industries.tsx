"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Industries() {
  const { t } = useLanguage()

  const industries = [
    {
      title: t('industries.oil'),
      description: 'Offshore platforms, refineries, petrochemical facilities, and pipeline infrastructure maintenance and inspection.',
      icon: '⛽',
      services: ['Platform maintenance', 'Tank inspection', 'Pipeline NDT', 'Emergency repairs'],
      image: 'https://placehold.co/400x300?text=Oil+Gas+Industrial+Platform+Maintenance'
    },
    {
      title: t('industries.construction'),
      description: 'High-rise buildings, bridges, stadiums, and commercial structures requiring specialized access solutions.',
      icon: '🏗️',
      services: ['Facade cleaning', 'Structural inspection', 'Waterproofing', 'Glass installation'],
      image: 'https://placehold.co/400x300?text=Construction+High+Rise+Building+Work'
    },
    {
      title: t('industries.power'),
      description: 'Power generation facilities, wind turbines, transmission towers, and electrical infrastructure.',
      icon: '⚡',
      services: ['Turbine maintenance', 'Cooling tower work', 'Chimney inspection', 'Cable installation'],
      image: 'https://placehold.co/400x300?text=Power+Plant+Industrial+Maintenance'
    },
    {
      title: t('industries.marine'),
      description: 'Ships, offshore vessels, ports, harbors, and marine infrastructure maintenance and inspection.',
      icon: '🚢',
      services: ['Hull inspection', 'Deck maintenance', 'Port facilities', 'Underwater structures'],
      image: 'https://placehold.co/400x300?text=Marine+Ship+Port+Infrastructure'
    }
  ]

  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('industries.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide specialized rope access and NDT services across diverse industries, 
            delivering tailored solutions for unique operational challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Services:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                >
                  Learn More About {industry.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We work across many specialized sectors. Contact us to discuss how our rope access 
              and NDT expertise can benefit your specific industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
              >
                Discuss Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>

        {/* Industry Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Oil & Gas Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Buildings Serviced</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-sm text-muted-foreground">Power Facilities</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Marine Structures</div>
          </div>
        </div>
      </div>
    </section>
  )
}
