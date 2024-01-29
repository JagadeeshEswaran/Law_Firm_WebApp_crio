/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "../AboutUs/AboutUs.module.css";

import Gift_Icon from "../../assets/AboutUs/Gift_1.svg";

const Card = ({ percent }) => {
	return (
		<>
			<article className={style.WhoWeAre_cards}>
				<div className={style.Gift_Icon_Wrapper}>
					<img src={Gift_Icon} alt="" />
				</div>

				<h2>{percent}% Success Rate</h2>

				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
					porro tempora soluta aspernatur, eius consequatur hic officiis
					distinctio nesciunt
				</p>

				<button>Read More</button>
			</article>
		</>
	);
};

export default Card;
