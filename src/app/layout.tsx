import type { Metadata } from 'next';
import { poppins } from '@/fonts';

import './index.css';

export const metadata: Metadata = {
  title: 'Tropa Digital'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
