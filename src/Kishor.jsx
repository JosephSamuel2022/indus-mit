import React from "react";
import "./Kishor.css";
import ImageCardk from "./ImageCardk";
import Table from "./Table";

const Kishor = () => {
	return (
		<div>
			<h2 className='heading'>Associate Rule Mining</h2>
			<div className='kishor'>
				<div className='tall-image'>
					<ImageCardk
						imageName='1.png'
						text='Rules generated using apriori method'
						height='108vh'
					/>
				</div>

				<div className='small-images'>
					<div className='small-image'>
						<ImageCardk
							imageName='2.png'
							text='Graph of Distribution of lift values'
						/>
					</div>
					<div className='small-image'>
						<ImageCardk
							imageName='3.png'
							text='Graph of Distribution of confidence values'
						/>
					</div>
				</div>
			</div>
			<div className='row'>
				<ImageCardk
					imageName='4.png'
					text='Rules after removing missing values and duplicates'
					width='70vw'
				/>
			</div>
			<div className='row'>
				<ImageCardk
					imageName='5.png'
					text='Antecedent and Consequent analysis'
					width='70vw'
				/>
			</div>
			<Table />
		</div>
	);
};

export default Kishor;
