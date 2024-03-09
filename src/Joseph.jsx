import React from "react";
import ImageCardk from "./ImageCardk";
import SymbolRow from "./SymbolRow";
import "./Joseph.css";

const Joseph = () => {
	return (
		<div className='joseph-container'>
			<h2 className='heading'>N Gram Analysis</h2>
			<div className='image-card-container'>
				<ImageCardk
					imageName='Uni.png'
					text='Top 10 Unigrams'
					isJoseph={true}
				/>
				<ImageCardk imageName='Bi.png' text='Top 10 Bigrams' isJoseph={true} />
			</div>
			<div className='running-note-container'>
				<marquee className='running-note'>
					You can input numbers ranging from 1 to 958 into certain fields, and
					then press the "Fill Null Values" button to generate a predicted
					sequence based on n-gram analysis. Click "Next Sequence" to view
					subsequent possible sequences. Keep in mind that certain numbers might
					not correspond to a symbol.
				</marquee>
			</div>
			<SymbolRow />
		</div>
	);
};

export default Joseph;
