import React from "react";
import ImageCard from "./ImageCard"; // Import the ImageCard component
import "./Keerthi.css";

const Keerthi = () => {
	return (
		<div className='keerthi'>
			<h2 className='heading'>Network Analysis</h2>
			<div className='row'>
				<ImageCard
					imageName='1.jpg'
					text='The table above shows a graph plotted where the nodes are connected based on the relative positions of symbols in seals.From the above shown observation table, it can be inferred that there is a  deep correlation between in this graph between the betweenness centrality and degree of the node.Also we observe that the signaificant nodes here are:002,740,742 and 001'
				/>
				<ImageCard
					imageName='2.jpg'
					text='This table above shows the data observed in the graph where nodes are connected based on their appearances on seals. Here according to betweenness centrality, the statistically influential nodes are:740,002,032 and 001.'
				/>
			</div>
			<div className='row'>
				<ImageCard
					imageName='3.jpg'
					text='In the same appearance in seal based table, we can see a slightly different result when degree of the node is taken as the measure.The most influential nodes are:740,002,240 and 220'
				/>
				<ImageCard
					imageName='4.jpg'
					text='Based on clustering which is done based how closely connected the nodes are, the above groups are formed.'
				/>
			</div>
			<div className='row'>
				<ImageCard
					imageName='5.jpg'
					text='The graph formed where the nodes are plotted based on the the relative position of symbols present in the seals.'
				/>
				<ImageCard
					imageName='6.jpg'
					text="The graph where the nodes are connected based on each symbol's positional appearance in seals."
				/>
			</div>
		</div>
	);
};

export default Keerthi;
