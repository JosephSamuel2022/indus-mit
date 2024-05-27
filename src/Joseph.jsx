import React from "react";
import ImageCardk from "./ImageCardk";
import SymbolRow from "./SymbolRow";
import "./Joseph.css";
import "./MovingImages";
import MovingImages from "./MovingImages";
import OutputImages from "./OutputImages";
import RNgrams from "./RNgrams";
import ImageCardf from "./ImageCardf";

const Joseph = () => {
	return (
		<div>
			<h2 className='heading'>N Gram Analysis</h2>
			<div className='kishor'>
				<ImageCardf
					imageName='/Joseph/Uni.png'
					text='Top 10 Unigrams'
					isJoseph={true}
					height='450px'
					width='310px'
				/>
				<ImageCardf
					imageName='/Joseph/Bi.png'
					text='Top 10 Bigrams'
					isJoseph={true}
					height='450px'
					width='310px'
				/>

				<ImageCardf
					imageName='/Keerthi/nodexl17.png'
					text=' Symbols frequently used in last position'
					height='450px'
					width='310px'
				/>
				<ImageCardf
					imageName='/Keerthi/nodexl18.png'
					text=' Symbols frequently used in first position'
					height='450px'
					width='310px'
				/>
				<ImageCardf
					imageName='/Keerthi/nodexl19.png'
					text=' Some Symbols never used in first position'
					height='450px'
					width='310px'
				/>
				<ImageCardf
					imageName='/Keerthi/nodexl20.png'
					text='Symbols used in 10 or more unique positions'
					height='450px'
					width='310px'
				/>
				<ImageCardf
					imageName='/Keerthi/nodexl21.png'
					text='Some of max frequencies of combinations of positions'
					height='500px'
					width='310px'
				/>
			</div>
			<OutputImages />
			<RNgrams />
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
			<MovingImages />
		</div>
	);
};

export default Joseph;
