import React from "react";
import ImageCardk from "./ImageCardk";
import "./Grammar.css"; // Import the CSS file for styling the Grammar component

const imagesWithText = [
	{
		imageName: "g1.png",
		text: "The analysis revealed recurring patterns of Y connective morpheme X, indicating a systematic syntactic structure within the corpus",
	},
	{
		imageName: "g2.png",
		text: "The examination uncovered various sub-sequences serving as pre-connective and post-connective elements, suggesting a structured syntactic framework within the Indus script.",
	},
	{
		imageName: "g3.png",
		text: "When the crop symbol occupies the terminal position within inscriptions, it consistently precedes stroke symbols. ",
	},
	{
		imageName: "g4.png",
		text: "When the jar symbol follows a crop symbol within Indus script inscriptions, it's frequently observed that the preceding symbol is consistently the same",
	},
	{
		imageName: "g5.png",
		text: "The stroke sign shares a common inscriptional context with other stroke numerals within the Indus script. ",
	},
	{
		imageName: "g6.png",
		text: "Encapsulated signs serve as replacements for basic signs and symbols, primarily appearing at terminal positions within the Indus script. ",
	},
	{
		imageName: "g7.png",
		text: "When a lexeme is preceded by a numerical symbol in one sequence, indicating quantity or repetition, it often occurs precisely that number of times in another sequence. ",
	},
	{
		imageName: "g8.png",
		text: "Individual signs found within composite signs often retain their original meaning or contribute to the semantic composition of the composite sign. ",
	},
	{
		imageName: "g10.png",
		text: "Symbols appearing in the final position without any connective signs may have standalone meanings. ",
	},
	{
		imageName: "g11.png",
		text: "When a rectangle symbol is followed by a jar symbol in the Indus script, it frequently appears that the preceding symbol is a fish symbol. ",
	},
	{
		imageName: "g12.png",
		text: "A noteworthy pattern emerges where an arrow symbol, when preceded by a fish symbol, is often further preceded by another fish symbol. ",
	},
	{
		imageName: "g13.png",
		text: "A notable pattern is observed where the depiction of a man symbol, when preceded by a jar symbol, frequently occurs alongside a preceding fish symbol.",
	},
	{
		imageName: "g14.png",
		text: "The consistent occurrence of a jar symbol preceding a man symbol, followed by another symbol  , suggests a systematic pattern within the Indus script.",
	},
	{
		imageName: "g15.png",
		text: "The consistent occurrence of a   symbol preceding a jar symbol, followed by another symbol  , suggests a systematic pattern within the Indus script. ",
	},
	{
		imageName: "g16.png",
		text: "The occurrence of a numeral sign at the third position from the last, followed by symbols possibly representing time at the second position from the last, when another symbol appears in the last position, suggests a structured pattern within the Indus script. ",
	},
	{
		imageName: "g17.png",
		text: "The consistent occurrence of crop symbol following two stroke symbols, especially when preceded by jar symbols, suggests a structured pattern within the Indus script. ",
	},
	{
		imageName: "g18.png",
		text: "When these two symbols appear together , it frequently follows with the usage of the connecting symbols to join it with the subsequent elements in the sequence. ",
	},
	{
		imageName: "g19.png",
		text: "When these two symbols appear together, it is commonly preceded by symbols resembling A in form or function. ",
	},
	// Add more images and descriptions as needed
];

const Grammar = () => {
	return (
		<div>
			<h2 className='headingt'>Grammar Rules</h2>
			<div className='grammar'>
				{imagesWithText.map((item, index) => (
					<div key={index} className='grammar-row'>
						<ImageCardk
							imageName={item.imageName}
							text={item.text}
							height='250px'
							width='250px'
							isJoseph={true}
						/>
					</div>
				))}
				<ImageCardk
					imageName='g20.png'
					height='300px'
					width='300px'
					isJoseph={true}
				/>
				<ImageCardk
					imageName='g21.jpg'
					height='300px'
					width='300px'
					isJoseph={true}
				/>
				<ImageCardk
					imageName='g22.jpg'
					height='300px'
					width='300px'
					isJoseph={true}
				/>
				<ImageCardk
					imageName='g23.jpg'
					height='300px'
					width='300px'
					isJoseph={true}
				/>
				<ImageCardk
					imageName='g24.jpg'
					height='500px'
					width='300px'
					isJoseph={true}
				/>
			</div>
		</div>
	);
};

export default Grammar;
