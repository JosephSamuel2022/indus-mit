import React from "react";
import ImageCardk from "./ImageCardk";
import "./Trials.css"; // Import the CSS file for styling the Trials component

const Trials = () => {
	return (
		<div className='trials'>
			<h2 className='headingt'>List of Symbols</h2>
			<div className='row'>
				<ImageCardk
					imageName='trail.jpg'
					height='450px'
					width='450px'
					isJoseph='true'
				/>
				<ImageCardk
					imageName='trail 2.jpg'
					height='450px'
					width='450px'
					isJoseph='true'
				/>
			</div>
			<div className='row'>
				<ImageCardk
					imageName='trail 3.jpg'
					height='450px'
					width='450px'
					isJoseph='true'
				/>
				<ImageCardk
					imageName='trail 4.jpg'
					height='450px'
					width='450px'
					isJoseph='true'
				/>
			</div>
		</div>
	);
};

export default Trials;
