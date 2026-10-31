import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Mahmoud Mostafa — AI Automation Specialist',
  description: 'AI automation, intelligent workflows, and practical systems for business operations.',
  metadataBase: new URL('https://example.vercel.app'),
  openGraph: { title: 'Mahmoud Mostafa — AI Automation Specialist', description: 'Building intelligent systems that automate work.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
