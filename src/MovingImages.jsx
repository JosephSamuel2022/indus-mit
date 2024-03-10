import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./MovingImages.css"; // Import CSS file

const MovingImages = () => {
	const [images, setImages] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		// Generate the list of image filenames based on the range 1-143
		const imageFilenames = Array.from(
			{ length: 143 },
			(_, index) => `${index + 1}.jpg`
		);
		setImages(imageFilenames);
	}, []); // This useEffect runs only once on component mount

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]); // This useEffect runs whenever the length of images array changes

	const goToPrevious = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	return (
		<div>
			<h2 className='symbols-heading'>Symbols Similar to Tamil</h2>
			<div className='moving-images-container'>
				<button className='arrow-button left' onClick={goToPrevious}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<img
					src={`/images/tamilindus/merged${images[currentIndex]}`}
					alt='Moving Image'
				/>
				<button className='arrow-button right' onClick={goToNext}>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
			<p className='note'>
				Note: These Symbols have a similarity of more than 75%
			</p>
		</div>
	);
};

export default MovingImages;
