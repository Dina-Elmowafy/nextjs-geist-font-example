"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.industries': 'Industries',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Professional Rope Access & NDT Solutions',
    'hero.subtitle': 'Leading provider of industrial rope access services and non-destructive testing with over 15 years of experience',
    'hero.cta': 'Explore Services',
    'hero.quote': 'Request Quote',
    
    // Services
    'services.title': 'Our Services',
    'services.rope.title': 'Rope Access Solutions',
    'services.rope.desc': 'Professional rope access services for maintenance, cleaning, and inspection of high-rise structures',
    'services.ndt.title': 'NDT Testing',
    'services.ndt.desc': 'Comprehensive non-destructive testing services including ultrasonic, radiographic, and magnetic particle testing',
    'services.safety.title': 'Safety & Training',
    'services.safety.desc': 'Professional safety training and certification programs for rope access technicians',
    'services.inspection.title': 'Structural Inspection',
    'services.inspection.desc': 'Detailed structural inspections and condition assessments for buildings and infrastructure',
    
    // About
    'about.title': 'About RopeAccess Pro',
    'about.desc': 'With over 15 years of experience in the industry, we are a leading provider of rope access and NDT services, committed to safety, quality, and excellence.',
    
    // Industries
    'industries.title': 'Industries We Serve',
    'industries.oil': 'Oil & Gas',
    'industries.construction': 'Construction',
    'industries.power': 'Power Plants',
    'industries.marine': 'Marine',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    
    // Footer
    'footer.company': 'RopeAccess Pro',
    'footer.desc': 'Professional rope access and NDT services worldwide',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.certifications': 'Certifications',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getQuote': 'Get Quote',
    'common.callNow': 'Call Now',
    'common.years': 'Years Experience',
    'common.projects': 'Projects Completed',
    'common.clients': 'Happy Clients',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.industries': 'الصناعات',
    'nav.careers': 'الوظائف',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'حلول احترافية للوصول بالحبال والفحص غير المدمر',
    'hero.subtitle': 'مزود رائد لخدمات الوصول الصناعي بالحبال والفحص غير المدمر مع أكثر من 15 عاماً من الخبرة',
    'hero.cta': 'استكشف الخدمات',
    'hero.quote': 'طلب عرض سعر',
    
    // Services
    'services.title': 'خدماتنا',
    'services.rope.title': 'حلول الوصول بالحبال',
    'services.rope.desc': 'خدمات احترافية للوصول بالحبال للصيانة والتنظيف وفحص الهياكل العالية',
    'services.ndt.title': 'الفحص غير المدمر',
    'services.ndt.desc': 'خدمات شاملة للفحص غير المدمر تشمل الفحص بالموجات فوق الصوتية والإشعاعي والجسيمات المغناطيسية',
    'services.safety.title': 'السلامة والتدريب',
    'services.safety.desc': 'برامج تدريب وشهادات السلامة المهنية لفنيي الوصول بالحبال',
    'services.inspection.title': 'فحص الهياكل',
    'services.inspection.desc': 'فحوصات هيكلية مفصلة وتقييمات حالة للمباني والبنية التحتية',
    
    // About
    'about.title': 'حول شركة روب أكسيس برو',
    'about.desc': 'مع أكثر من 15 عاماً من الخبرة في الصناعة، نحن مزود رائد لخدمات الوصول بالحبال والفحص غير المدمر، ملتزمون بالسلامة والجودة والتميز.',
    
    // Industries
    'industries.title': 'الصناعات التي نخدمها',
    'industries.oil': 'النفط والغاز',
    'industries.construction': 'البناء والتشييد',
    'industries.power': 'محطات الطاقة',
    'industries.marine': 'البحرية',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',
    
    // Footer
    'footer.company': 'روب أكسيس برو',
    'footer.desc': 'خدمات احترافية للوصول بالحبال والفحص غير المدمر عالمياً',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.certifications': 'الشهادات',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.getQuote': 'احصل على عرض سعر',
    'common.callNow': 'اتصل الآن',
    'common.years': 'سنوات خبرة',
    'common.projects': 'مشروع مكتمل',
    'common.clients': 'عميل راضي',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
