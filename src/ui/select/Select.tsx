import type { getCurrenciesResponse } from '../../services/currencyBeacon/types';

interface SelectProps {
	options: getCurrenciesResponse['response'];
	label: string;
	value: string;
	setValue: (newValue: string) => void;
}

const Select = ({ options, label, value, setValue }: SelectProps) => {
	return (
		<label className="flex w-full justify-between">
			{label}
			<select
				className="bg-gray-800 text-white border w-60"
				value={value}
				onChange={(e) => setValue(String(e.target.value))}
			>
				{options.map((option) => (
					<option key={option.id} value={option.code}>
						{option.name}
					</option>
				))}
			</select>
		</label>
	);
};

export default Select;
