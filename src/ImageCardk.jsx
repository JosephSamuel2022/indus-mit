import React from "react";
import "./ImageCard.css"; // Import the external CSS file

const ImageCardk = ({ imageName, text, height, width }) => {
	const imageStyle = {
		height: height || "auto", // Default to "auto" if height prop is not provided
		width: width || "", // Default to "auto" if width prop is not provided
	};
	const cardStyle = {
		width: width || "", // Default to "auto" if width prop is not provided
	};
	return (
		<div className='image-card' style={cardStyle}>
			<div className='image-container'>
				<img
					src={`/images/Kishor/Associate${imageName}`}
					alt='Image'
					style={imageStyle}
				/>
			</div>
			<div className='text-container'>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default ImageCardk;
