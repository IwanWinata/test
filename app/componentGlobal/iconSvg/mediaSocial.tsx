import React from 'react';

export interface IconProps {
	color?: string;
	height?: number;
	width?: number;
}

export const instagramIconSvg: React.FC<IconProps> = ({ color, height, width }) => {
	return (
		<>
			<svg
				width={`${width ? width : '21'} `}
				height={`${height ? height : '21'} `}
				viewBox='0 0 21 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M11.5286 0.802734C12.6536 0.805734 13.2246 0.811734 13.7176 0.825734L13.9116 0.832734C14.1356 0.840734 14.3566 0.850734 14.6236 0.862734C15.6876 0.912734 16.4136 1.08073 17.0506 1.32773C17.7106 1.58173 18.2666 1.92573 18.8226 2.48073C19.3313 2.98047 19.7248 3.58521 19.9756 4.25273C20.2226 4.88973 20.3906 5.61573 20.4406 6.68073C20.4526 6.94673 20.4626 7.16773 20.4706 7.39273L20.4766 7.58673C20.4916 8.07873 20.4976 8.64973 20.4996 9.77473L20.5006 10.5207V11.8307C20.503 12.5601 20.4953 13.2895 20.4776 14.0187L20.4716 14.2127C20.4636 14.4377 20.4536 14.6587 20.4416 14.9247C20.3916 15.9897 20.2216 16.7147 19.9756 17.3527C19.7248 18.0203 19.3313 18.625 18.8226 19.1247C18.3228 19.6334 17.7181 20.0269 17.0506 20.2777C16.4136 20.5247 15.6876 20.6927 14.6236 20.7427L13.9116 20.7727L13.7176 20.7787C13.2246 20.7927 12.6536 20.7997 11.5286 20.8017L10.7826 20.8027H9.47357C8.74383 20.8053 8.01409 20.7976 7.28457 20.7797L7.09057 20.7737C6.85318 20.7647 6.61584 20.7544 6.37857 20.7427C5.31457 20.6927 4.58857 20.5247 3.95057 20.2777C3.2834 20.0268 2.67901 19.6333 2.17957 19.1247C1.67051 18.6251 1.27668 18.0204 1.02557 17.3527C0.778569 16.7157 0.610569 15.9897 0.560569 14.9247L0.530569 14.2127L0.525569 14.0187C0.507135 13.2896 0.498801 12.5601 0.500569 11.8307V9.77473C0.497801 9.04533 0.505135 8.31593 0.522569 7.58673L0.529569 7.39273C0.537569 7.16773 0.547569 6.94673 0.559569 6.68073C0.609569 5.61573 0.777569 4.89073 1.02457 4.25273C1.27626 3.58493 1.67079 2.98017 2.18057 2.48073C2.67972 1.97228 3.28376 1.57881 3.95057 1.32773C4.58857 1.08073 5.31357 0.912734 6.37857 0.862734C6.64457 0.850734 6.86657 0.840734 7.09057 0.832734L7.28457 0.826734C8.01376 0.808967 8.74316 0.8013 9.47257 0.803734L11.5286 0.802734ZM10.5006 5.80273C9.17449 5.80273 7.90272 6.32952 6.96503 7.2672C6.02735 8.20488 5.50057 9.47665 5.50057 10.8027C5.50057 12.1288 6.02735 13.4006 6.96503 14.3383C7.90272 15.276 9.17449 15.8027 10.5006 15.8027C11.8267 15.8027 13.0984 15.276 14.0361 14.3383C14.9738 13.4006 15.5006 12.1288 15.5006 10.8027C15.5006 9.47665 14.9738 8.20488 14.0361 7.2672C13.0984 6.32952 11.8267 5.80273 10.5006 5.80273ZM10.5006 7.80273C10.8945 7.80267 11.2847 7.8802 11.6487 8.0309C12.0127 8.18161 12.3434 8.40253 12.622 8.68106C12.9007 8.95959 13.1217 9.29027 13.2725 9.65422C13.4233 10.0182 13.501 10.4083 13.5011 10.8022C13.5011 11.1962 13.4236 11.5863 13.2729 11.9503C13.1222 12.3143 12.9013 12.6451 12.6227 12.9237C12.3442 13.2023 12.0135 13.4234 11.6496 13.5742C11.2856 13.725 10.8955 13.8027 10.5016 13.8027C9.70592 13.8027 8.94286 13.4867 8.38025 12.9241C7.81764 12.3614 7.50157 11.5984 7.50157 10.8027C7.50157 10.0071 7.81764 9.24402 8.38025 8.68141C8.94286 8.1188 9.70592 7.80273 10.5016 7.80273M15.7516 4.30273C15.42 4.30273 15.1021 4.43443 14.8677 4.66885C14.6333 4.90327 14.5016 5.22121 14.5016 5.55273C14.5016 5.88425 14.6333 6.2022 14.8677 6.43662C15.1021 6.67104 15.42 6.80273 15.7516 6.80273C16.0831 6.80273 16.401 6.67104 16.6355 6.43662C16.8699 6.2022 17.0016 5.88425 17.0016 5.55273C17.0016 5.22121 16.8699 4.90327 16.6355 4.66885C16.401 4.43443 16.0831 4.30273 15.7516 4.30273Z'
					fill={`${color ? color : '#41424A'}`}
				/>
			</svg>
		</>
	);
};

export const linkdlnIconSvg: React.FC<IconProps> = ({ color, height, width }) => {
	return (
		<>
			<svg
				width={`${width ? width : '19'} `}
				height={`${height ? height : '19'} `}
				viewBox='0 0 19 19'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M16.5 0.802734C17.0304 0.802734 17.5391 1.01345 17.9142 1.38852C18.2893 1.76359 18.5 2.2723 18.5 2.80273V16.8027C18.5 17.3332 18.2893 17.8419 17.9142 18.2169C17.5391 18.592 17.0304 18.8027 16.5 18.8027H2.5C1.96957 18.8027 1.46086 18.592 1.08579 18.2169C0.710714 17.8419 0.5 17.3332 0.5 16.8027V2.80273C0.5 2.2723 0.710714 1.76359 1.08579 1.38852C1.46086 1.01345 1.96957 0.802734 2.5 0.802734H16.5ZM16 16.3027V11.0027C16 10.1381 15.6565 9.30893 15.0452 8.69757C14.4338 8.0862 13.6046 7.74273 12.74 7.74273C11.89 7.74273 10.9 8.26273 10.42 9.04273V7.93273H7.63V16.3027H10.42V11.3727C10.42 10.6027 11.04 9.97273 11.81 9.97273C12.1813 9.97273 12.5374 10.1202 12.7999 10.3828C13.0625 10.6453 13.21 11.0014 13.21 11.3727V16.3027H16ZM4.38 6.36273C4.82556 6.36273 5.25288 6.18574 5.56794 5.87067C5.883 5.55561 6.06 5.1283 6.06 4.68273C6.06 3.75273 5.31 2.99273 4.38 2.99273C3.93178 2.99273 3.50193 3.17079 3.18499 3.48772C2.86805 3.80466 2.69 4.23452 2.69 4.68273C2.69 5.61273 3.45 6.36273 4.38 6.36273ZM5.77 16.3027V7.93273H3V16.3027H5.77Z'
					fill={`${color ? color : '#41424A'}`}
				/>
			</svg>
		</>
	);
};
export const facebookIconSvg: React.FC<IconProps> = ({ color, height, width }) => {
	return (
		<>
			<svg
				width={`${width ? width : '21'} `}
				height={`${height ? height : '21'} `}
				viewBox='0 0 21 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M10.5 0.341797C16.023 0.341797 20.5 4.8178 20.5 10.3418C20.5 15.3318 16.843 19.4688 12.063 20.2198V13.2318H14.393L14.836 10.3418L12.063 10.3408V8.4188C12.078 7.6448 12.474 6.9038 13.693 6.9038H14.953V4.4418C14.953 4.4418 13.809 4.2458 12.715 4.2458C10.466 4.2458 8.985 5.5878 8.939 8.0198L8.937 8.1368V10.3398H6.399V13.2298H8.939V20.2178C4.157 19.4688 0.5 15.3318 0.5 10.3418C0.5 4.8188 4.977 0.341797 10.5 0.341797Z'
					fill={`${color ? color : '#41424A'}`}
				/>
			</svg>
		</>
	);
};
export const youtubeIconSvg: React.FC<IconProps> = ({ color, height, width }) => {
	return (
		<>
			<svg
				width={`${width ? width : '21'} `}
				height={`${height ? height : '15'} `}
				viewBox='0 0 21 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M8.5 10.8027L13.69 7.80273L8.5 4.80273V10.8027ZM20.06 2.97273C20.19 3.44273 20.28 4.07273 20.34 4.87273C20.41 5.67273 20.44 6.36273 20.44 6.96273L20.5 7.80273C20.5 9.99273 20.34 11.6027 20.06 12.6327C19.81 13.5327 19.23 14.1127 18.33 14.3627C17.86 14.4927 17 14.5827 15.68 14.6427C14.38 14.7127 13.19 14.7427 12.09 14.7427L10.5 14.8027C6.31 14.8027 3.7 14.6427 2.67 14.3627C1.77 14.1127 1.19 13.5327 0.94 12.6327C0.81 12.1627 0.72 11.5327 0.66 10.7327C0.59 9.93273 0.56 9.24273 0.56 8.64273L0.5 7.80273C0.5 5.61273 0.66 4.00273 0.94 2.97273C1.19 2.07273 1.77 1.49273 2.67 1.24273C3.14 1.11273 4 1.02273 5.32 0.962734C6.62 0.892734 7.81 0.862734 8.91 0.862734L10.5 0.802734C14.69 0.802734 17.3 0.962734 18.33 1.24273C19.23 1.49273 19.81 2.07273 20.06 2.97273Z'
					fill={`${color ? color : '#41424A'}`}
				/>
			</svg>
		</>
	);
};
export const tiktokIconSvg: React.FC<IconProps> = ({ color, height, width }) => {
	return (
		<>
			<svg
				width={`${width ? width : '17'} `}
				height={`${height ? height : '19'} `}
				viewBox='0 0 17 19'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M13.1002 3.62273C12.4167 2.84226 12.0401 1.84013 12.0402 0.802734H8.95016V13.2027C8.92682 13.8739 8.64368 14.5098 8.16046 14.9762C7.67725 15.4427 7.03175 15.7031 6.36016 15.7027C4.94016 15.7027 3.76016 14.5427 3.76016 13.1027C3.76016 11.3827 5.42016 10.0927 7.13016 10.6227V7.46273C3.68016 7.00273 0.660156 9.68273 0.660156 13.1027C0.660156 16.4327 3.42016 18.8027 6.35016 18.8027C9.49016 18.8027 12.0402 16.2527 12.0402 13.1027V6.81273C13.2932 7.71258 14.7975 8.19538 16.3402 8.19273V5.10273C16.3402 5.10273 14.4602 5.19273 13.1002 3.62273Z'
					fill={`${color ? color : '#41424A'}`}
				/>
			</svg>
		</>
	);
};
