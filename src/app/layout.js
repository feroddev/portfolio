import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Felipe Rodrigues - Developer Fullstack',
  description: 'Portfolio of Felipe Rodrigues - Developer Fullstack',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>{children}</body>
    </html>
  );
}
