"use client"

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.industries'), href: '#industries' },
    { name: t('nav.careers'), href: '#careers' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  const services = [
    'Rope Access Solutions',
    'NDT Testing Services',
    'Safety Training',
    'Structural Inspection',
    'Emergency Services',
    'Consultation'
  ]

  const certifications = [
    'IRATA Certified',
    'ISO 9001:2015',
    'ASNT Level III',
    'OHSAS 18001',
    'API Certified',
    'NACE Certified'
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  RopeAccess<span className="text-blue-400">Pro</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('footer.desc')}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📞</span>
                  <span className="text-gray-300">+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">✉️</span>
                  <span className="text-gray-300">info@ropeaccesspro.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400">📍</span>
                  <span className="text-gray-300">
                    Building 123, Industrial Area<br />
                    Dubai, UAE
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-blue-600 hover:border-blue-600">
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">{t('footer.links')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#services"
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">{t('footer.certifications')}</h4>
              <ul className="space-y-3 mb-8">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="bg-slate-800 rounded-lg p-4">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <p className="text-sm text-gray-300 mb-4">
                  Get the latest news and updates from RopeAccess Pro
                </p>
                <div className="flex flex-col space-y-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Logos */}
        <div className="border-t border-slate-700 py-8">
          <h4 className="text-center text-lg font-semibold mb-6 text-blue-400">
            Certified & Accredited By
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold text-blue-400">IR</span>
              </div>
              <div className="text-xs text-gray-400">IRATA</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold text-blue-400">ISO</span>
              </div>
              <div className="text-xs text-gray-400">ISO 9001</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold text-blue-400">AS</span>
              </div>
              <div className="text-xs text-gray-400">ASNT</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold text-blue-400">OH</span>
              </div>
              <div className="text-xs text-gray-400">OHSAS</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-2xl font-bold text-blue-400">API</span>
              </div>
              <div className="text-xs text-gray-400">API Certified</div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 RopeAccess Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
