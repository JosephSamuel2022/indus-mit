import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css"; // Import your CSS file with animations
import SymbolRow from "./SymbolRow";
import Keerthi from "./Keerthi";
import Kishor from "./Kishor";
import Joseph from "./Joseph";
import Home from "./Home";
import Trials from "./Trials";
import Seals from "./Seals";
import Grammar from "./Grammar";

const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [selectedItem, setSelectedItem] = useState("item0");

	const toggleDashboard = () => {
		setIsOpen(!isOpen);
		const icon = document.querySelector(".dashboard-icon");
		icon.classList.toggle("rotate");
	};

	const handleItemClick = (item) => {
		setSelectedItem(item);
	};

	return (
		<>
			<div className={`dashboard ${isOpen ? "open" : "closed"}`}>
				<div className='dashboard-content'>
					<div className='dashboard-menu'>
						<div
							className={`dashboard-item ${
								selectedItem === "item0" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item0")}>
							HOME
						</div>
						<div
							className={`dashboard-item ${
								selectedItem === "item4" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item4")}>
							LIST OF SYMBOLS
						</div>
						<div
							className={`dashboard-item ${
								selectedItem === "item3" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item3")}>
							SYMBOL CLASSIFICATION
						</div>
						<div
							className={`dashboard-item ${
								selectedItem === "item5" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item5")}>
							SEALS
						</div>
						<div
							className={`dashboard-item ${
								selectedItem === "item2" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item2")}>
							FREQUENCY ANALYSIS
						</div>
						<div
							className={`dashboard-item ${
								selectedItem === "item1" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item1")}>
							NETWORK ANALYSIS
						</div>

						<div
							className={`dashboard-item ${
								selectedItem === "item6" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item6")}>
							GRAMMAR
						</div>
					</div>
				</div>
			</div>
			<div className='dashboard-icon' onClick={toggleDashboard}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			{selectedItem === "item0" && <Home />}
			{selectedItem === "item1" && <Keerthi />}
			{selectedItem === "item2" && <Joseph />}
			{selectedItem === "item3" && <Kishor />}
			{selectedItem === "item4" && <Trials />}
			{selectedItem === "item5" && <Seals />}
			{selectedItem === "item6" && <Grammar />}
		</>
	);
};

export default Dashboard;
