/* eslint-disable no-unused-vars */
import React from "react";
import style from "../AboutUs.module.css";

const WhatWeDo = () => {
	return (
		<>
			<section className={style.WhatWeDo_container}>
				<article className={style.WhatWeDo_Intro1}>
					<p>Let&apos;s Introduce Ourself</p>
				</article>
				<div className={style.seperator}></div>
				<article className={style.WhatWeDo_Intro2}>
					<h1>Criminal Lawyer</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						cum asperiores doloribus incidunt veniam impedit quae maiores
						laboriosam totam!
					</p>
				</article>
			</section>
		</>
	);
};

export default WhatWeDo;
