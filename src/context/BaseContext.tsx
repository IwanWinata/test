'use client';

import { StaticImageData } from 'next/image';
import React, { createContext, ReactNode, useState } from 'react';
import indonesiaIcon from '@/public/img/icon/indonesia.svg';
import englishIcon from '@/public/img/icon/english.svg';

export interface languagesType {
	country: 'indonesia' | 'english';
}

export const LanguagesItem: {
	icon: StaticImageData;
	country: languagesType['country'];
}[] = [
	{
		icon: indonesiaIcon,
		country: 'indonesia',
	},
	{
		icon: englishIcon,
		country: 'english',
	},
];

interface BaseContextType {
	languages: languagesType['country'];
	setLanguages: React.Dispatch<React.SetStateAction<languagesType['country']>>;
}

export const BaseContext = createContext<BaseContextType>({
	languages: 'indonesia',
	setLanguages: () => {},
});

export const BaseProvider = ({ children }: { children: ReactNode }) => {
	const [languages, setLanguages] = useState<languagesType['country']>('indonesia');
	return (
		<BaseContext.Provider
			value={{
				languages,
				setLanguages,
			}}>
			{children}
		</BaseContext.Provider>
	);
};
