"use client"

import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/components/language-provider'

export function About() {
  const { t } = useLanguage()

  const certifications = [
    { name: 'IRATA', desc: 'International Rope Access Trade Association' },
    { name: 'ISO 9001', desc: 'Quality Management Systems' },
    { name: 'ASNT', desc: 'American Society for Nondestructive Testing' },
    { name: 'OHSAS 18001', desc: 'Occupational Health and Safety' }
  ]

  const teamMembers = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO & Lead Technician',
      experience: '15+ years',
      image: 'https://placehold.co/300x300?text=Ahmed+Al-Rashid+CEO'
    },
    {
      name: 'Sarah Johnson',
      position: 'NDT Specialist',
      experience: '12+ years',
      image: 'https://placehold.co/300x300?text=Sarah+Johnson+NDT+Specialist'
    },
    {
      name: 'Mohammed Hassan',
      position: 'Safety Manager',
      experience: '10+ years',
      image: 'https://placehold.co/300x300?text=Mohammed+Hassan+Safety+Manager'
    },
    {
      name: 'Lisa Chen',
      position: 'Operations Director',
      experience: '8+ years',
      image: 'https://placehold.co/300x300?text=Lisa+Chen+Operations+Director'
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.desc')}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2008, RopeAccess Pro has grown from a small team of passionate rope access technicians 
              to a leading provider of industrial access and NDT services across the Middle East and beyond.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to safety, innovation, and excellence has earned us the trust of major corporations 
              in oil & gas, construction, and marine industries.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://placehold.co/600x400?text=Company+Story+Industrial+Team+Working"
              alt="Company story - Industrial team working"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide safe, efficient, and cost-effective rope access and NDT solutions that exceed 
                client expectations while maintaining the highest standards of safety and professionalism.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading rope access and NDT service provider in the region, recognized for 
                innovation, safety excellence, and unwavering commitment to client success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">Our Expert Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            {t('footer.certifications')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {cert.name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
