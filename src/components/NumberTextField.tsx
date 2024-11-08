import { ChangeEvent, forwardRef, useMemo } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export interface NumberTextFieldFormatProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
	value?: number;
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined, value: number) => void;
	allowZero?: boolean;
}

const NumberTextField = forwardRef<HTMLDivElement, NumberTextFieldFormatProps>((props, ref) => {
	const formattedValue = useMemo(() => {
		if (!props.value && props.allowZero) return 0;
		if (!props.value) return '';

		const formatted = '' + Intl.NumberFormat('id-ID').format(props.value);
		return formatted;
	}, [props.value, props.allowZero]);

	return (
		<TextField
			placeholder='Contoh: 12345'
			{...props}
			ref={ref}
			type='text'
			value={formattedValue}
			onChange={e => {
				e?.stopPropagation();
				const newValue = +e.target.value.replace(/\D/g, '');
				props.onChange(e, newValue);
			}}
		/>
	);
});

NumberTextField.displayName = 'NumberTextField';

export default NumberTextField;
