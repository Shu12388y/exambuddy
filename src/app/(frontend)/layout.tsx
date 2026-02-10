import React from 'react'
import './styles.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import QueryProvider from '@/provider/queryProvider'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Exam Buddy',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <QueryProvider>

      <body>
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
          </main>
          <Footer/>
      </body>
      </QueryProvider>
    </html>
  )
}
