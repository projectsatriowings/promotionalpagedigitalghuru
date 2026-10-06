import './globals.css';
import './redesign.css';
import './remove-dots.css';

export const viewport = {
  themeColor: '#006fff',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://promotion.digitalghuru.com'),
  title: 'Digital Marketing AI Tools Workshop | Digital Ghuru',
  description: 'Join Digital Ghuru\'s exclusive AI-powered digital marketing workshop for students, professionals, and institutions. Learn to automate workflows, create smarter campaigns, and future-proof your career with cutting-edge AI tools.',
  keywords: [
    'Digital Marketing Workshop', 'AI Marketing Tools', 'Digital Ghuru', 
    'Marketing Automation', 'AI Workshop Chennai', 'Generative AI for Marketing', 
    'Prompt Engineering', 'AI Content Creation', 'Learn AI Marketing', 
    'Business Owners Marketing', 'Student Career Transformation', 
    'Social Media AI', 'Offline Workshop Chennai', 'Digital Leaders', 
    'Future-Proof Career', 'AI for Entrepreneurs'
  ],
  authors: [{ name: 'Digital Ghuru' }],
  creator: 'Digital Ghuru',
  publisher: 'Digital Ghuru',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/assets/favicon-optimized.png?v=7',
  },
  openGraph: {
    title: 'Digital Marketing AI Tools Workshop | Digital Ghuru',
    description: 'Master AI-driven marketing workflows. Book a 2-day hands-on workshop for your team or institution.',
    url: 'https://promotion.digitalghuru.com/', 
    siteName: 'Digital Ghuru',
    images: [
      {
        url: '/assets/logo-final dG.webp',
        width: 1200,
        height: 630,
        alt: 'Digital Ghuru AI Workshop',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Digital Marketing Workshop | Digital Ghuru',
    description: 'Learn to market faster and grow with AI. Future-proof your digital career today.',
    images: ['/assets/logo-final dG.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
