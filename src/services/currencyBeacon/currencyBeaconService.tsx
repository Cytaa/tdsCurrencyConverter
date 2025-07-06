import type { getCurrenciesResponse } from './types';

const routes = {
	currencies: 'currencies',
	convert: 'convert',
} as const;

export const getCurrencies = async (): Promise<getCurrenciesResponse> => {
	const data = await fetch(
		`${import.meta.env.VITE_CURRENCY_BEACON_API_URL}/${
			routes.currencies
		}?api_key=${import.meta.env.VITE_CURRENCY_BEACON_API_KEY}`
	);

	if (!data.ok) {
		throw new Error(`Error fetching currencies: ${data.statusText}`);
	}

	const jsonData: getCurrenciesResponse = await data.json();
	return jsonData;
};

export const convertCurrency = async (
	from: string,
	to: string,
	amount: number
): Promise<unknown> => {
	const data = await fetch(
		`${import.meta.env.VITE_CURRENCY_BEACON_API_URL}/${
			routes.convert
		}?from=${from}&to=${to}&amount=${amount}&api_key=${
			import.meta.env.VITE_CURRENCY_BEACON_API_KEY
		}`
	);

	if (!data.ok) {
		throw new Error(`Error converting currency: ${data.statusText}`);
	}
	return await data.json();
};
