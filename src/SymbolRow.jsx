import React, { useState, useEffect } from "react";
import "./SymbolRow.css"; // Import CSS file for styling
import SymbolComponent from "./SymbolComponent";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SymbolRow = () => {
	const [filledList, setFilledList] = useState([
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
		"None",
	]);
	useEffect(() => {
		// Any side effect code you want to run when filledList changes
	}, [filledList]);

	const [dataArray, setDataArray] = useState([]);
	const [currentArrayIndex, setCurrentArrayIndex] = useState(0);

	const handleFillNullValues = async () => {
		try {
			const values = filledList.map((item) => {
				if (item === undefined || item == "") {
					console.log("None");
					return "None";
				} else {
					console.log(item);
					return item.toString();
				}
			});
			setFilledList(values);
			const response = await axios.post("https://indus-mit.onrender.com/fill", {
				values,
			});
			const updatedFilledList = response.data.result[0].map((item) =>
				String(item)
			);
			setDataArray(response.data.result);
			setFilledList(updatedFilledList);
			toast.success("Filled Null Values based on N Gram Analysis");
		} catch (error) {
			console.error("Error filling null values:", error);
			toast.error("Failed to fill null values");
		}
	};

	const handleUpdateValue = (index, newValue) => {
		const newFilledList = [...filledList];
		newFilledList[index] = newValue;
		setFilledList(newFilledList);
	};

	const handleNextSequence = () => {
		const nextIndex = (currentArrayIndex + 1) % dataArray.length;
		setFilledList(dataArray[nextIndex]);
		setCurrentArrayIndex(nextIndex);
	};
	return (
		<div className='symbol-row-container'>
			<div className='symbol-row'>
				{[...Array(8)].map((_, index) => (
					<SymbolComponent
						key={index}
						value={filledList[index] === "None" ? "" : filledList[index]}
						onChange={(value) => handleUpdateValue(index, value)}
					/>
				))}
			</div>
			<div className='symbol-row'>
				{[...Array(7)].map((_, index) => (
					<SymbolComponent
						key={index + 8}
						value={
							filledList[index + 8] === "None" ? "" : filledList[index + 8]
						}
						onChange={(value) => handleUpdateValue(index + 8, value)}
					/>
				))}
			</div>
			<button className='fill-button' onClick={handleFillNullValues}>
				Fill Null Values
			</button>
			<button className='next-sequence-button' onClick={handleNextSequence}>
				Next Sequence
			</button>
		</div>
	);
};

export default SymbolRow;
