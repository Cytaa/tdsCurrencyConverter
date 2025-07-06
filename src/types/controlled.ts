import type { Dispatch, SetStateAction } from 'react';

export interface Controlled<T> {
	setValue: Dispatch<SetStateAction<T>>;
	value: T;
}
