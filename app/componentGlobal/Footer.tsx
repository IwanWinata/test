'use client';
import React, { useContext, useMemo } from 'react';
import Image from 'next/image';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import Link from 'next/link';
import lpsLogo from '@/public/img/LPS.png';
import {
	buyerIconSvg,
	contructorIconSvg,
	developerIconSvg,
	investorIconSvg,
	landOwnerIconSvg,
	salesAgentIconSvg,
	sellerIconSvg,
	supplierIconSvg,
} from './iconSvg/IconSvg';
import {
	facebookIconSvg,
	IconProps,
	instagramIconSvg,
	linkdlnIconSvg,
	tiktokIconSvg,
	youtubeIconSvg,
} from './iconSvg/mediaSocial';
import { BaseContext, LanguagesItem, languagesType } from '../context/BaseContext';

const Footer = () => {
	const link = {
		INSTAGRAM: String(process.env.INSTAGRAM_LINK) ?? '#',
		FACEBOOK: String(process.env.FACEBOOK_LINK) ?? '#',
		LINKEDIN: String(process.env.LINKEDIN_LINK) ?? '#',
		YOUTUBE: String(process.env.YOUTUBE_LINK) ?? '#',
		TIKTOK: String(process.env.TIKTOK_LINK) ?? '#',
	};
	const ItemContext = useContext(BaseContext);
	const languages = LanguagesItem;

	const produkItem: {
		title: string;
		titleEn: string;
		icon: React.FC<IconProps>;
		url: string;
		hover: boolean;
	}[] = [
		{
			title: 'Buyer',
			titleEn: 'Buyer',
			icon: buyerIconSvg,
			url: '/buyer',
			hover: false,
		},
		{
			title: 'Investor',
			titleEn: 'Investor',
			icon: investorIconSvg,
			url: '/investor',
			hover: false,
		},
		{
			title: 'Seller',
			titleEn: 'Seller',
			icon: sellerIconSvg,
			url: '/under-contruction',
			hover: false,
		},
		{
			title: 'Developer',
			titleEn: 'Developer',
			icon: developerIconSvg,
			url: '/under-contruction',
			hover: false,
		},
		{
			title: 'Kontraktor',
			titleEn: 'Contructor',
			icon: contructorIconSvg,
			url: '/under-contruction',
			hover: false,
		},
		{
			title: 'Land Owner',
			titleEn: 'Land Owner',
			icon: landOwnerIconSvg,
			url: '/under-contruction',
			hover: false,
		},
		{
			title: 'Supplier',
			titleEn: 'Supplier',
			icon: supplierIconSvg,
			url: '/under-contruction',
			hover: false,
		},
		{
			title: 'Sales Agent',
			titleEn: 'Sales Agent',
			icon: salesAgentIconSvg,
			url: '/under-contruction',
			hover: false,
		},
	];

	const socialMedia: {
		icon: React.FC<IconProps>;
		title: string;
		url: string;
	}[] = [
		{
			icon: tiktokIconSvg,
			title: '@amani.co.id',
			url: link.TIKTOK,
		},
		{
			icon: youtubeIconSvg,
			title: 'Amani',
			url: link.YOUTUBE,
		},
		{
			icon: linkdlnIconSvg,
			title: '@amani.co.id',
			url: link.LINKEDIN,
		},
		{
			icon: facebookIconSvg,
			title: 'Amani',
			url: link.FACEBOOK,
		},
		{
			icon: instagramIconSvg,
			title: '@amani.co.id',
			url: link.INSTAGRAM,
		},
	];

	const itemContext = useContext(BaseContext);
	const activeLanguages = useMemo(() => {
		return itemContext.languages;
	}, [itemContext.languages]);

	return (
		<div
			className='section'
			style={{
				backgroundColor: '#F7F8FC',
				color: '#41424A',
				paddingTop: '100px',
				paddingBottom: '100px',
			}}>
			{/* <Image
				alt='logo'
				src={logoWhite}
			/> */}
			<Typography
				sx={{
					fontWeight: 500,
					fontSize: '24px',
				}}>
				amani
			</Typography>
			<Box className={'grid lg:grid-cols-2 mt-10 gap-10'}>
				<Box className='grid lg:grid-cols-2 gap-5 h-fit'>
					<Box className='grid gap-5 h-fit'>
						<Typography
							sx={{
								fontSize: '20px',
								fontWeight: 500,
								display: 'flex',
								alignItems: 'center',
							}}>
							{ItemContext.languages === 'indonesia' ? 'Gabung Sebagai' : 'Join as'}
						</Typography>
						<Box className='grid grid-flow-col grid-rows-4 grid-cols-2 gap-4 translate-x-[-1rem]'>
							{produkItem?.map((item, index: number) => {
								return (
									<Link
										key={index}
										href={item.url}
										target='_blank'
										className='flex items-center'>
										<div className='w-[3rem] flex justify-center'>
											<item.icon
												height={20}
												color='#4F7280'
											/>
										</div>
										{ItemContext.languages === 'indonesia' ? item.title : item.titleEn}
									</Link>
								);
							})}
						</Box>
					</Box>
				</Box>
				<Box className='grid gap-5 h-fit'>
					<Typography
						sx={{
							fontSize: '20px',
							fontWeight: 500,
							display: 'flex',
							alignItems: 'center',
						}}>
						{ItemContext.languages === 'indonesia' ? 'Lokasi' : 'Location'}
					</Typography>
					<Link
						target='_blank'
						href={
							'https://www.google.com/maps/place/Amani/@-6.2737997,106.5360897,11z/data=!4m7!3m6!1s0x2e69f525b06821f3:0xa59a2b107e1db15f!8m2!3d-6.2126363!4d106.820164!15sCgVhbWFuaZIBE3Byb3BlcnR5X2ludmVzdG1lbnTgAQA!16s%2Fg%2F11wfqz3031?coh=229685&entry=tts&g_ep=EgoyMDI0MDkyOS4wIPu8ASoASAFQAw%3D%3D'
						}>
						<Typography
							sx={{
								fontSize: '18px',
								display: 'flex',
								alignItems: 'center',
								gap: `10px`,
								fontWeight: '100',
							}}>
							Millenium Centennial Center Lt.51 <br />
							Jl. Jenderal Sudirman No.Kav 25, Kuningan, karet, Kecamatan Setiabudi, Kota Jakarta Selatan, DKI Jakarta 12920
						</Typography>
					</Link>
					<Box className='translate-x-[-1rem] flex gap-5 h-fit lg:grid-cols-1'>
						{socialMedia?.map((item, index: number) => {
							return (
								<Link
									key={index}
									href={item.url}
									target='_blank'
									className='flex items-center'>
									<div className='w-[3rem] flex justify-center'>
										<item.icon
											height={20}
											color='#4F7280'
										/>
									</div>
									{/* {item.title} */}
								</Link>
							);
						})}
					</Box>
					<FormControl className='w-[50%]'>
						<Select
							value={activeLanguages}
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							onChange={e => itemContext.setLanguages(e.target.value as languagesType['country'])}
							sx={{
								// border: '0.2rem solid #E2E1E1',
								borderRadius: '0.7rem',
								'& .MuiOutlinedInput-notchedOutline': {
									borderColor: '#E2E1E1',
								},
								'&:hover .MuiOutlinedInput-notchedOutline': {
									borderColor: '#E2E1E1',
								},
								'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
									borderColor: '#E2E1E1',
								},
							}}>
							{languages?.map((item, index: number) => {
								return (
									<MenuItem
										key={index}
										value={item.country}>
										<Box className='flex items-center gap-3'>
											<Image
												alt=''
												width={30}
												height={20}
												src={item.icon}
											/>
											<Typography
												sx={{
													textTransform: 'capitalize',
												}}>
												{item.country}
											</Typography>
										</Box>
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Box>
			</Box>

			<Box className='w-full grid gap-10'>
				<hr className='mt-10' />
				<Box className='w-full lg:flex grid gap-4 items-center'>
					<Image
						alt='lps-logo'
						height={50}
						src={lpsLogo}
					/>
					{ItemContext.languages === 'indonesia' ? (
						<Typography>
							Seluruh proses finansial di Amani melalui bank yang berizin dan diawasi oleh{' '}
							<span className='font-bold'>Otoritas Jasa Keuangan (OJK)</span> dan{' '}
							<span className='font-bold'>Bank Indonesia</span>, serta merupakan peserta{' '}
							<span className='font-bold'>penjaminan LPS</span>.
						</Typography>
					) : (
						<Typography>
							All financial processes at Amani go through licensed banks that are supervised by the{' '}
							<span className='font-bold'>inancial Services Authority (OJK)</span> and{' '}
							<span className='font-bold'>Bank Indonesia</span>, and are participants in the{' '}
							<span className='font-bold'>LPS guarantee program. </span>
						</Typography>
					)}
				</Box>
				<Typography
					sx={{
						fontSize: '18px',
						textAlign: 'center',
					}}>
					All right reserved Amani @2024
				</Typography>
			</Box>
		</div>
	);
};

export default Footer;
