import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ClientProviders from '@/components/ClientProviders';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Greyball Ecommerce',
  description: 'Your one-stop shop for all ecommerce needs.',
  openGraph: {
    title: 'Greyball Ecommerce',
    description: 'Discover a wide range of products today!',
    url: 'https://greyballtest.com', //not mentioning the real domain
    siteName: 'Greyball Ecommerce',
    images: [
      {
        url: '/default-og-image.png',
        alt: 'Greyball Ecommerce',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
