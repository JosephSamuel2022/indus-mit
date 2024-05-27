import React from "react";
import "./ImageCard.css"; // Import the external CSS file

const ImageCard = ({ height, width, imageName, text }) => {
	const imageStyle = {
		height: height || "auto", // Default to "auto" if height prop is not provided
		width: width || "", // Default to "auto" if width prop is not provided
	};
	const cardStyle = {
		width: width || "", // Default to "auto" if width prop is not provided
	};
	// Regular expression to find all numbers in the text
	const numberRegex = /\b0*(\d+)\b/g;

	// Extracting all numbers from the text
	const numbers = text.match(numberRegex) || []; // Ensure numbers is an array

	// Constructing image elements for each number
	const imageElements = numbers.map((number, index) => {
		// Remove leading zeros if any
		const cleanNumber = number.replace(/^0+/, "");
		const imageName = `${cleanNumber}.jpg`;
		return (
			<img
				key={index}
				src={`/images/${imageName}`}
				alt={`Image ${imageName}`}
				className='number-image'
			/>
		);
	});

	return (
		<div className='image-card' style={cardStyle}>
			<div className='image-container'>
				<img
					src={`/images/Keerthi/nodexl${imageName}`}
					alt='Image'
					style={imageStyle}
				/>
			</div>
			<div className='text-container'>
				<p>{text}</p>
				{imageElements.length > 0 && (
					<div className='image-list'>
						{imageElements.length > 1 ? "Images: " : "Image: "}
						{imageElements}
					</div>
				)}
			</div>
		</div>
	);
};

export default ImageCard;
