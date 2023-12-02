import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flavio Arzamendia | Desarrollo Web',
  description: 'Soy un desarrollador web apasionado con experiencia en WordPress, HTML5, CSS3 y JavaScript. Ofrezco servicios de diseño web personalizado.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3863XJHLF6">
        </script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());

          gtag('config', 'G-3863XJHLF6');
        </script>
      </head>
      <body className={inter.className}>{children}
      <Analytics/>
      </body>
    </html>
  )
}
