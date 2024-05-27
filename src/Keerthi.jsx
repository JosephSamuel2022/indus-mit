import React from "react";
import ImageCard from "./ImageCard"; // Import the ImageCard component
import ImageCardf from "./ImageCardf";
import "./Keerthi.css";

const imagesWithText = [
	{
		imageName: "1.jpg",
		text: "The table above shows a graph plotted where the nodes are connected based on the relative positions of symbols in seals.From the above shown observation table, it can be inferred that there is a  deep correlation between in this graph between the betweenness centrality and degree of the node.Also we observe that the signaificant nodes here are:002,740,742 and 001",
	},
	{
		imageName: "2.jpg",
		text: "This table above shows the data observed in the graph where nodes are connected based on their appearances on seals. Here according to betweenness centrality, the statistically influential nodes are:740,002,032 and 001.",
	},
	{
		imageName: "3.jpg",
		text: "In the same appearance in seal based table, we can see a slightly different result when degree of the node is taken as the measure.The most influential nodes are:740,002,240 and 220",
	},
	{
		imageName: "4.jpg",
		text: "Based on clustering which is done based how closely connected the nodes are, the above groups are formed.",
	},
	{
		imageName: "5.jpg",
		text: "The graph formed where the nodes are plotted based on the the relative position of symbols present in the seals.",
	},
	{
		imageName: "6.jpg",
		text: "The graph where the nodes are connected based on each symbol's positional appearance in seals.",
	},
	{
		imageName: "/Keerthi/nodexl7.png",
		text: "Influential nodes identified",
		isSpecial: true,
	},
	{
		imageName: "/Keerthi/nodexl8.png",
		text: "Interaction amongst influential nodes",
		isSpecial: true,
	},
	{
		imageName: "/Keerthi/nodexl9.png",
		text: "From the above data it can be inferred that most of occurrences of symbols like 817, 705 and 90 occur in next to only around only unique symbol, indicating a strong relationship between the two.",
		isSpecial: true,
	},
	{
		imageName: "/Keerthi/nodexl10.png",
		text: "Above it can be seen that symbols 2 and 740 are way above the rest in terms of degree and are more interconnected than the rest.",
		isSpecial: true,
	},
	{
		imageName: "/Keerthi/nodexl11.png",
		text: "Here it can be seen that symbols 2 and 740 are way above the rest in terms of degree and are present in most number of significant edges.",
		isSpecial: true,
	},
	{
		imageName: "/Keerthi/nodexl14.png",
		text: "Each community represents a distinct cluster of symbols with shared characteristics, possibly reflecting different linguistic elements, grammatical constructs, or semantic domains. ",
		isSpecial: true,
	},
	{
		imageName: "/Keerthi/nodexl15.png",
		text: "Reference for the motifs used",
		isSpecial: true,
	},
	{
		imageName: "/Keerthi/nodexl16.png",
		text: "Graph after grouping by Motifs",
		isSpecial: true,
	},
];

const Keerthi = () => {
	return (
		<div className='keerthi'>
			<h2 className='heading'>Network Analysis</h2>
			<div className='kishor'>
				{imagesWithText.map((item, index) =>
					item.isSpecial ? (
						<ImageCardf
							key={index}
							imageName={item.imageName}
							text={item.text}
							height='350px'
							width='350px'
						/>
					) : (
						<ImageCard
							key={index}
							imageName={item.imageName}
							text={item.text}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Keerthi;
