/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";
import Testimonial from "./Components/Testimonial/Testimonial";
import OurTeam from "./Components/OurTeam/OurTeam";
import FAQ from "./Components/FAQs/FAQ";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

import "../src/index.css";

const App = () => {
	return (
		<>
			<main className="app_main_container">
				<Navbar />
				<Hero />
				<AboutUs />
				<Services />
				<Testimonial />
				<OurTeam />
				<FAQ />
				<Subscribe />
				<Footer />
			</main>
		</>
	);
};

export default App;
