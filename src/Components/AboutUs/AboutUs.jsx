/* eslint-disable no-unused-vars */
import React from "react";
import style from "./AboutUs.module.css";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const AboutUs = () => {
	return (
		<>
			<main className={style.About_main_container}>
				<section className={style.aboutus_main_section}>
					<article>
						<div>AboutUs</div>
					</article>

					<article className={style.whatwedo_container}>
						<WhatWeDo />
					</article>

					<article className={style.whoweare_container}>
						<WhoWeAre />
					</article>
				</section>
			</main>
		</>
	);
};

export default AboutUs;
