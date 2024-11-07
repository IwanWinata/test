import { forwardRef } from 'react';
import { InputAdornment, TextField, TextFieldProps, Typography } from '@mui/material';

type Props = {
	value?: string;
	onChange?: (value: string) => void;
} & Omit<TextFieldProps, 'variant' | 'value' | 'onChange'>;

const PhoneNumberTextField = forwardRef<HTMLDivElement, Props>((field, ref) => {
	return (
		<TextField
			{...field}
			ref={ref}
			value={field.value ? field.value : ''}
			onChange={e => {
				const newValue = e.target.value.replace(/\D/g, '');
				const match = newValue.match(/^(?!0)\d{0,14}$/);
				if (Boolean(match)) {
					const formattedValue = formatPhoneNumber(newValue);
					field.onChange?.(formattedValue || '');
				}
			}}
			placeholder='Contoh: 8111 222 333'
			InputProps={{
				inputProps: {
					min: 0,
				},
				startAdornment: (
					<InputAdornment position='start'>
						<Typography>+62</Typography>
					</InputAdornment>
				),
			}}
		/>
	);
});

PhoneNumberTextField.displayName = 'PhoneNumberTextField';

export default PhoneNumberTextField;

export function formatPhoneNumber(phoneNumber: string | undefined) {
	if (!phoneNumber) return '';
	const regexForMobilePhone = /(\d{2})(\d{3})(\d{4})(\d*)/;
	const regexForTelephone = /(\d{2})(\d{2})(\d{4})(\d*)/;

	if (phoneNumber[0] === '8') {
		return phoneNumber.replace(regexForMobilePhone, (match, g1, g2, g3, g4) => {
			return `${g1} ${g2} ${g3}${g4 ? ` ${g4}` : ''}`;
		});
	}
	return phoneNumber.replace(regexForTelephone, (match, g1, g2, g3, g4) => {
		return `${g1} ${g2} ${g3}${g4 ? ` ${g4}` : ''}`;
	});
}
