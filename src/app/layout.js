import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FA Desarrollo Web|Marketing Digital',
  description: 'Soy un desarrollador web apasionado con experiencia en WordPress, HTML5, CSS3 y JavaScript. Ofrezco servicios de diseño web personalizado.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}
      <Analytics/>
      </body>
    </html>
  )
}
