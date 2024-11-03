import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/public/style/globals.css';
import ClientLayout from './ClientLayout';

const poppins = Poppins({ subsets: ['latin'], weight: '300' });

export const metadata: Metadata = {
	title: 'Amani - Land Owner',
	description: 'Amani - Land Owner',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
