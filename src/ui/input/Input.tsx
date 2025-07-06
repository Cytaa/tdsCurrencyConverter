interface InputProps {
	label: string;
	value: number;
	readOnly?: boolean;
	setValue: (newValue: number) => void;
}

const Input = ({ value, setValue, label, readOnly = false }: InputProps) => {
	return (
		<label className="flex justify-between mt-2 mb-2 w-full">
			{label}
			<input
				readOnly={readOnly}
				min={0}
				className="border w-60"
				type="number"
				value={Number(value).toString()}
				onChange={(e) => setValue(Number(e.target.value))}
			/>
		</label>
	);
};
export default Input;
