import React from "react";
import "./Table.css";
const TableRow = ({ rule, symbols }) => {
	// Function to extract antecedent and consequent from the rule string
	const extractNumbers = (rule) => {
		const match = rule.match(/\[(.*?)\] -> \[(.*?)\]/); // Regex to match antecedent and consequent
		if (!match) return { antecedent: [], consequent: [] };
		const antecedent = match[1].split(",").map((number) => number.trim()); // Extract antecedent numbers
		const consequent = match[2].split(",").map((number) => number.trim()); // Extract consequent numbers
		return { antecedent, consequent };
	};

	// Function to render images based on the numbers
	const renderImages = (numbers) => {
		return numbers.map((number, index) => {
			number = number.replace(/['"]+/g, "");
			return (
				<div key={index} className='image-containers'>
					<img
						src={`/images/${number}.jpg`}
						alt={`Image ${number}`}
						className='table-image'
					/>
				</div>
			);
		});
	};

	// Extract antecedent and consequent from the rule
	const { antecedent, consequent } = extractNumbers(rule);

	return (
		<tr className='table-row'>
			<td>{rule}</td>
			<td>{renderImages(antecedent)}</td>
			<td>{renderImages(consequent)}</td>
			<td>{symbols}</td>
		</tr>
	);
};

export default TableRow;
