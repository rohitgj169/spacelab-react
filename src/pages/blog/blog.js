import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import BlogCarousel from "./blogCarousel";
import Footer from "../../components/footer/footer";
import NavigationButton from "../../components/navigationButton/navigationButton";
import './blog.scss';

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Blog() {
	return (
		<>
			<HeroImage/>
			<div id={"blog-container"}>
				<div id={"blog-header"}>Featured Blogs</div>
				<BlogCarousel/>
			</div>
			<div id={"archives-button-container"}>
				<NavigationButton pathName={"/archives"} buttonText={"View Full Blog Archives"}/>
			</div>
			<Footer/>
		</>
	);
};