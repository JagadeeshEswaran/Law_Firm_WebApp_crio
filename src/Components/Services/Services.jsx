/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Services.module.css";
import { services_grid_imgs } from "../../DataAPI/AppData";

import img1 from "../../assets/Services/Tile_img_1.png";
import img2 from "../../assets/Services/Tile_img_2.png";
import img3 from "../../assets/Services/Tile_img_3.png";
import img4 from "../../assets/Services/Tile_img_4.png";
import img5 from "../../assets/Services/Tile_img_5.png";
import img6 from "../../assets/Services/Tile_img_6.png";

const Services = () => {
	return (
		<>
			<main className={style.services_main_container}>
				<section className={style.services_main_section}>
					<article className={style.services_header}>
						<h1>Area of Practices</h1>
					</article>

					<article className={style.services_row_odd}>
						<div className="style.servicesGrid1_item1">
							<h1 className={style.servicesGridItem_h1}>Business Law</h1>
							<img src={img1} alt="" height={250} />
						</div>
						<div className="style.servicesGrid1_item2">
							<h1 className={style.servicesGridItem_h1}>Partnership Law</h1>
							<img src={img2} alt="" height={250} />
						</div>
					</article>

					<article className={style.services_row_odd}>
						<div className="style.servicesGrid2_item3">
							<h1 className={style.servicesGridItem_h1}>Real Estate Law</h1>
							<img src={img3} alt="" height={250} />
						</div>
						<div className="style.servicesGrid2_item4">
							<h1 className={style.servicesGridItem_h1}>Criminal Law</h1>
							<img src={img4} alt="" height={250} />
						</div>
					</article>

					<article className={style.services_row_odd}>
						<div className="style.servicesGrid3_item5">
							<h1 className={style.servicesGridItem_h1}>Landlord Disputes</h1>
							<img src={img5} alt="" height={250} />
						</div>
						<div className="style.servicesGrid3_item6">
							<h1 className={style.servicesGridItem_h1}>Elder Abuse</h1>
							<img src={img6} alt="" height={250} />
						</div>
					</article>
					{/* <article className={style.services_row2}>
						<img src={img3} alt="" className="style.servicesGrid2_item1" />
						<img src={img4} alt="" className="style.servicesGrid2_item2" />
					</article>
					<article className={style.services_row3}>
						<img src={img5} alt="" className="style.servicesGrid3_item1" />
						<img src={img6} alt="" className="style.servicesGrid3_item2" />
					</article> */}
				</section>
			</main>
		</>
	);
};

export default Services;
