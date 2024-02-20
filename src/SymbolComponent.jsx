import React, { useState, useEffect } from "react";
import "./SymbolComponent.css"; // Import CSS file for styling

const SymbolComponent = ({ value, onChange }) => {
	console.log(value);
	const [number, setNumber] = useState(value || "");
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		setNumber(value || "");
		// if (number != "") setShowImage(true);
	}, [value]);

	const handleInputChange = (event) => {
		setNumber(event.target.value);
	};

	const handleKeyUp = (event) => {
		setShowImage(true);
		onChange(number); // Pass the value back to the parent component
	};

	return (
		<div className='symbol-container' tabIndex={0}>
			<input
				type='text'
				value={number}
				onChange={handleInputChange}
				onKeyUp={handleKeyUp}
				className='number-input'
				placeholder='None'
			/>
			{showImage && (
				<img
					src={`./images/${number}.png`}
					alt={`${number}.png`}
					className='image'
					style={{ maxWidth: "100%", maxHeight: "100%" }}
				/>
			)}
		</div>
	);
};

export default SymbolComponent;
