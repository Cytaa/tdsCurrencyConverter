import { useQuery } from '@tanstack/react-query';

import { useState } from 'react';
import CurrencyInput from './currencyInput/CurrencyInput';
import {
	convertCurrency,
	getCurrencies,
} from '../../services/currencyBeacon/currencyBeaconService';

const CurrencyConverter = () => {
	const [fromCurrency, setFromCurrency] = useState<{
		code: string;
		amount: number;
	}>({ code: '', amount: 0 });
	const [toCurrency, setToCurrency] = useState<{
		code: string;
		amount: number;
	}>({ code: '', amount: 0 });

	const { isLoading, data: currencies } = useQuery({
		queryKey: ['currencies'],
		queryFn: async () => await getCurrencies(),
	});

	const { refetch } = useQuery({
		queryKey: [fromCurrency, toCurrency.code],
		queryFn: async () => {
			const data = await convertCurrency(
				fromCurrency.code,
				toCurrency.code,
				fromCurrency.amount
			);
			setToCurrency({ code: toCurrency.code, amount: data.value });
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
						isInputReadOnly
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
