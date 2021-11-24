import React from "react";
import './about.scss';
import HeroImage from "../../components/heroImage/heroImage";
import MissionStatement  from "./missionStatementSection";
import Team from "./TeamSection";
import Footer from "../../components/footer/footer";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<>
			<HeroImage/>
			<MissionStatement/>
			<Team/>
			<Footer/>
		</>
		);
};