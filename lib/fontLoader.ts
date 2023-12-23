import {
	Cormorant_Garamond,
	Comfortaa,
	Roboto,
	Hedvig_Letters_Serif,
} from 'next/font/google';

export const cormorantGaramond = Cormorant_Garamond({
	weight: '400',
	subsets: ['latin'],
	variable: '--cormorant-garamond',
	display: 'swap',
});
export const comfortaa = Comfortaa({
	subsets: ['latin'],
	variable: '--comfortaa',
});
export const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--roboto',
});
export const hedvig = Hedvig_Letters_Serif({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--hedvig',
});
