'use client';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import Navbar from './componentGlobal/Navbar';
import Footer from './componentGlobal/Footer';
import { Poppins } from 'next/font/google';
import Jumbotron from './component/Jumbotron';

const poppins = Poppins({ subsets: ['latin'], weight: '300' });

const theme = createTheme({
	typography: {
		fontFamily: poppins.style.fontFamily,
	},
});

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<main>
				<Navbar title='beranda' />
				<Jumbotron />
				<Footer />
			</main>
		</ThemeProvider>
	);
}
