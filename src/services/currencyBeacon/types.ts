interface response {
	meta: {
		code: number;
		disclaimer: string;
	};
}

export interface getCurrenciesResponse extends response {
	response: Array<{
		id: number;
		name: string;
		short_code: string;
		code: string;
		precision: number;
		subunit: number;
		symbol: string;
		symbol_first: boolean;
		decimal_mark: string;
		thousands_separator: string;
	}>;
}
