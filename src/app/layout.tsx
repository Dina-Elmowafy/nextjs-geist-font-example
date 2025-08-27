import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RopeAccess Pro - Professional Rope Access & NDT Services',
  description: 'Leading provider of rope access solutions and non-destructive testing services for industrial applications worldwide.',
  keywords: 'rope access, NDT, non-destructive testing, industrial services, inspection, maintenance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
