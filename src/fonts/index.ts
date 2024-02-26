import { Poppins, DM_Sans, Roboto, Inter } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export { poppins, dmSans, roboto, inter };
