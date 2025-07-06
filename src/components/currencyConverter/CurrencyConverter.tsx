import { useQuery } from '@tanstack/react-query';

import { useState } from 'react';
import CurrencyInput from './currencyInput/CurrencyInput';
import {
	convertCurrency,
	getCurrencies,
} from '../../services/currencyBeacon/currencyBeaconService';

const CurrencyConverter = () => {
	const [fromCurrency, setFromCurrency] = useState<[string, number]>(['', 0]);
	const [toCurrency, setToCurrency] = useState<[string, number]>(['', 0]);

	const { isLoading, data: currencies } = useQuery({
		queryKey: ['currencies'],
		queryFn: async () => await getCurrencies(),
	});

	const { refetch } = useQuery({
		queryKey: [fromCurrency, toCurrency[0]],
		queryFn: async () => {
			const data = await convertCurrency(
				fromCurrency[0],
				toCurrency[0],
				fromCurrency[1]
			);
			setToCurrency([toCurrency[0], data.value]);
		},

		enabled: false,
	});

	const handleSubmit = async () => {
		await refetch();
	};

	return (
		<div className="w-120">
			{isLoading || currencies === undefined ? (
				<p>Loading...</p>
			) : (
				<form className="flex flex-row flex-wrap justify-center">
					<CurrencyInput
						options={currencies.response}
						value={fromCurrency}
						setValue={setFromCurrency}
						label="Currency to be converted"
					/>
					<CurrencyInput
						options={currencies.response}
						value={toCurrency}
						setValue={setToCurrency}
						label="Converted currency"
					/>
					<button
						className="mt-6 border"
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default CurrencyConverter;
