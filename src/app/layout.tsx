import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import { Container, Footer, NavbarApp } from '@/components'

const publicSans = Public_Sans({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-public-sans'
})

export const metadata: Metadata = {
  title: 'Easybank Landing Page',
  description: 'This is a solution to the Easybank landing page challenge on Frontend Mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${publicSans.className}`} suppressHydrationWarning>
        <Providers>
          <div className="absolute top-0 left-0 w-full bg-white">
            <Container>
              <NavbarApp />
            </Container>
          </div>
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
