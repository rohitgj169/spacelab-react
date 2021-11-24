import React, {useState, useEffect} from "react";
import "./accordion.scss";
import MemberCard from "../memberCard/memberCard";

/**
 * Renders an accordion style drop down div containing cards displaying the info passed as props
 * {title: (string), members: [{image: (string), fullName: (string), title: (string)}]}
 * @param props Object with Title of the team and its respective members
 * @returns {JSX.Element}
 * @constructor
 */
export default function Accordion(props) {
	const [open, setOpen] = useState(false);
	const [arrow, setArrow] = useState(false);
	const {title, members, firstLoad, setFirstLoad} = props;

	const handleAccordion = () => {
		setOpen(!open);
		setArrow(!arrow);
		if (firstLoad) setFirstLoad(false);
	};

	useEffect(() => {
		if (firstLoad) {
			setOpen(true);
			setArrow(true);
		}
	}, [firstLoad]);

	const openAccordion = open ? "accordion-open" : "";
	let flipArrow = arrow ? "icon-flip" : "";
	if (firstLoad) {
		flipArrow = "icon-flip";
	}

	return (
		<div className="accordion-container">
			<div className="accordion-container-heading">
				<div className="accordion-container-heading-text-container">
					{title}
				</div>
				<div className={`accordion-container-heading-icon ${flipArrow}`} onClick={handleAccordion}>
					▲
				</div>
			</div>
			<div className={`accordion-container-content ${openAccordion}`}>
				{members.map((member) => (
					<MemberCard key={`${title}-${member.fullName}`} member={member}/>
				))}
			</div>
		</div>
	);
}
