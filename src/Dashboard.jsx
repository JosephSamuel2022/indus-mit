import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css"; // Import your CSS file with animations
import SymbolRow from "./SymbolRow";
import Keerthi from "./Keerthi";
import Kishor from "./Kishor";
import Joseph from "./Joseph";
const Dashboard = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [selectedItem, setSelectedItem] = useState("default");

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
								selectedItem === "item1" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item1")}>
							<FontAwesomeIcon icon={faUser} className='icon' /> KEERTHI KUMAR
						</div>
						<div
							className={`dashboard-item ${
								selectedItem === "item2" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item2")}>
							<FontAwesomeIcon icon={faUser} className='icon' /> JOSEPH SAMUEL M
						</div>
						<div
							className={`dashboard-item ${
								selectedItem === "item3" ? "selected" : ""
							}`}
							onClick={() => handleItemClick("item3")}>
							<FontAwesomeIcon icon={faUser} className='icon' /> KISHOR
						</div>
					</div>
				</div>
			</div>
			<div className='dashboard-icon' onClick={toggleDashboard}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			{selectedItem === "item1" && <Keerthi />}
			{selectedItem === "item2" && <Joseph />}
			{selectedItem === "item3" && <Kishor />}
		</>
	);
};

export default Dashboard;
