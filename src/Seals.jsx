import React, { useState } from "react";
import ImageCardk from "./ImageCardk";
import "./Seals.css"; // Import the CSS file for styling the Seals component

const imageNames = [
	"2.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
	"39.png",
	"40.png",
	"41.png",
	"42.png",
	"45.png",
	"56.png",
	"57.png",
	"58.png",
	"59.png",
	"60.png",
	"61.png",
	"62.png",
	"64.png",
	"224.png",
	"225.png",
	"226.png",
	"227.png",
	"228.png",
	"229.png",
	"230.png",
	"231.png",
];

const getRandomImages = (num) => {
	const shuffled = [...imageNames].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
};

const Seals = () => {
	const [selectedImages, setSelectedImages] = useState(getRandomImages(5));

	const handleButtonClick = () => {
		setSelectedImages(getRandomImages(5));
	};

	return (
		<div className='seals-container'>
			<div className='seals-row'>
				{selectedImages.map((imageName, index) => (
					<ImageCardk
						key={index}
						imageName={imageName}
						text={`Seal ${index + 1}`}
						height='150px'
						width='150px'
						isJoseph={true}
					/>
				))}
			</div>
			<div className='button-row'>
				<button className='buttons' onClick={handleButtonClick}>
					Show Another 5 Random Seals
				</button>
			</div>
		</div>
	);
};

export default Seals;
