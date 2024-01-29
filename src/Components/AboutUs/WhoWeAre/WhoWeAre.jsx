/* eslint-disable no-unused-vars */
import React from "react";
import style from "../AboutUs.module.css";
import Card from "../Card";

const WhoWeAre = () => {
	return (
		<>
			<section className={style.WhoWeAre_container}>
				<article className={style.WhoWeAre_Header}>
					<h1>Why Choose us?</h1>
				</article>

				<article className={style.WhoWrAre_Card_Wrapper}>
					<Card percent={98} />
					<Card percent={100} />
					<Card percent={100} />
				</article>
			</section>
		</>
	);
};

export default WhoWeAre;
