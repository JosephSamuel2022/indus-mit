import React, { useState, useEffect } from "react";
import ImageCardf from "./ImageCardf";
import "./RNgrams.css";

const RNgrams = () => {
	const [selectedNumber, setSelectedNumber] = useState(2);
	const [imageNumbers, setImageNumbers] = useState([]);

	const fetchRandomSequence = async (number) => {
		try {
			const response = await fetch(`/sequences_${number}.txt`);
			const text = await response.text();
			const lines = text.trim().split("\n");
			const randomLine = lines[Math.floor(Math.random() * lines.length)];
			const numbers = randomLine.match(/\d+/g).map(Number);
			setImageNumbers(numbers);
		} catch (error) {
			console.error("Error fetching sequence file:", error);
		}
	};

	useEffect(() => {
		fetchRandomSequence(selectedNumber);
	}, [selectedNumber]);

	return (
		<div>
			<h2 className='heading'>Random N-gram Sequence Selector</h2>
			<div className='rngrams'>
				<div className='select-container'>
					<select
						value={selectedNumber}
						onChange={(e) => setSelectedNumber(Number(e.target.value))}>
						{[...Array(14)].map((_, i) => (
							<option key={i + 2} value={i + 2}>
								{i + 2}
							</option>
						))}
					</select>
				</div>
				<div className='image-pair'>
					{imageNumbers.map((num, index) => (
						<ImageCardf
							key={index}
							imageName={`${num}.jpg`}
							height='50px'
							width='50px'
							isJoseph={true}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default RNgrams;
