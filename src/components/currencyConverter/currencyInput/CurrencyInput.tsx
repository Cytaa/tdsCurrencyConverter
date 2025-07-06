import { type Dispatch, type SetStateAction } from 'react';

import Select from '../../../ui/select/Select';
import Input from '../../../ui/input/Input';
import type { getCurrenciesResponse } from '../../../services/currencyBeacon/types';

interface CurrencyInputProps {
	options: getCurrenciesResponse['response'];
	setValue: Dispatch<SetStateAction<[string, number]>>;
	value: [string, number];
	label: string;
}

const CurrencyInput = ({
	options,
	value,
	setValue,
	label,
}: CurrencyInputProps) => {
	const setSelectValue = (newValue: string) => {
		setValue([newValue, value[1]]);
	};
	const setInputValue = (newValue: number) => {
		setValue([value[0], newValue]);
	};

	return (
		<div className="flex-row justify-center align-middle w-120">
			<Select
				options={options}
				label={label}
				value={value[0]}
				setValue={setSelectValue}
			/>
			<Input label="Amount" setValue={setInputValue} value={value[1]} />
		</div>
	);
};

export default CurrencyInput;
