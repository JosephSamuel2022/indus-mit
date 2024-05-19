import React from "react";
import ImageCardf from "./ImageCardf";
import "./OutputImages.css"; // Import the CSS file for styling

const outputNumbers = [
	740, 2, 220, 32, 240, 60, 1, 33, 741, 861, 820, 520, 390, 235, 817, 233, 920,
	590, 705, 798, 803, 90, 415, 400, 760, 31, 100, 3, 176, 806, 368, 550, 255,
	140, 231, 706, 900, 690, 840, 692, 350, 405, 61, 407, 700, 575, 717, 17, 125,
	527, 55, 142, 435, 904, 617, 585, 151, 440, 460, 892, 70, 850, 742, 4, 595,
	388, 615, 416, 503, 790, 455, 923, 16, 621, 226, 480, 335, 482, 845, 495, 832,
	374, 413, 320, 95, 5, 165, 921, 630, 752, 632, 156, 175, 745, 555, 65, 821,
	315, 171, 154,
];

const OutputImages = () => {
	return (
		<div>
			<h2 className='heading'>Top 100 Most Frequent Symbols</h2>
			<div className='output-images'>
				{outputNumbers.map((number, index) => (
					<ImageCardf
						key={index}
						imageName={`${number}.jpg`}
						text={` ${number}`}
						height='50px'
						width='50px'
					/>
				))}
			</div>
		</div>
	);
};

export default OutputImages;
