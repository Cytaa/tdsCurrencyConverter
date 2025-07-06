import { type Dispatch, type SetStateAction } from 'react';

import Select from '../../../ui/select/Select';
import Input from '../../../ui/input/Input';
import type { getCurrenciesResponse } from '../../../services/currencyBeacon/types';

interface CurrencyInputProps {
	options: getCurrenciesResponse['response'];
	setValue: Dispatch<
		SetStateAction<{
			code: string;
			amount: number;
		}>
	>;
	value: {
		code: string;
		amount: number;
	};
	label: string;
}

const CurrencyInput = ({
	options,
	value,
	setValue,
	label,
}: CurrencyInputProps) => {
	const setSelectValue = (newValue: string) => {
		setValue({ code: newValue, amount: value.amount });
	};
	const setInputValue = (newValue: number) => {
		setValue({ code: value.code, amount: newValue });
	};

	return (
		<div className="flex-row justify-center align-middle w-120">
			<Select
				options={options}
				label={label}
				value={value.code}
				setValue={setSelectValue}
			/>
			<Input label="Amount" setValue={setInputValue} value={value.amount} />
		</div>
	);
};

export default CurrencyInput;
