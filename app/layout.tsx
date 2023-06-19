import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Rentals Hub',
  description: 'Endless Choices of Cars at Your service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
