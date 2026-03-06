import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tkode Labs — Technology Solutions',
  description: 'Desenvolvemos sistemas web modernos, aplicações mobile e soluções tecnológicas sob medida para o seu negócio.',
  keywords: ['desenvolvimento de sistemas', 'software', 'web', 'Next.js', 'tecnologia'],
  openGraph: {
    title: 'Tkode Labs — Technology Solutions',
    description: 'Sistemas web modernos, aplicações mobile e soluções tecnológicas sob medida.',
    siteName: 'Tkode Labs',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
