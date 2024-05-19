import React, { useState, useEffect } from "react";
import "./SymbolComponent.css"; // Import CSS file for styling

const SymbolComponent = ({ value, onChange }) => {
	console.log(value);
	const [number, setNumber] = useState(value || "");
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		setNumber(value || "");
		setShowImage(Boolean(value));
	}, [value]);

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setNumber(newValue);
		setShowImage(Boolean(newValue)); // Update showImage based on whether the input has a value
		onChange(newValue);
	};

	return (
		<div className='symbol-container' tabIndex={0}>
			<input
				type='text'
				value={number}
				onChange={handleInputChange}
				className='number-input'
				placeholder='None'
			/>
			{showImage && (
				<img
					src={`./images/${number}.jpg`}
					alt={`${number}.png`}
					className='image'
				/>
			)}
		</div>
	);
};

export default SymbolComponent;
