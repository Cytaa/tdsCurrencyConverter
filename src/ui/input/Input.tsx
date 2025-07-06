interface InputProps {
	label: string;
	value: number;
	setValue: (newValue: number) => void;
}

const Input = ({ value, setValue, label }: InputProps) => {
	return (
		<label className="flex justify-between mt-2 mb-2 w-full">
			{label}
			<input
				className="border w-60"
				type="number"
				value={Number(value).toString()}
				onChange={(e) => setValue(Number(e.target.value))}
			/>
		</label>
	);
};
export default Input;
