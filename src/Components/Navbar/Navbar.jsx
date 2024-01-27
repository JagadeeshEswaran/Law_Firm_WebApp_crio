/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Navbar.module.css";
import Logo from "../../assets/App/Logo.svg";
import { navlinks_data } from "../../DataAPI/AppData";

const Navbar = () => {
	return (
		<>
			<main className={style.navbar_main_container}>
				<section className={style.navbar_main_section}>
					<article>
						<img src={Logo} alt="Logo of Xigstudio" />
					</article>

					<article className={style.navlinks_container}>
						{navlinks_data.map((item) => (
							<p key={item.id}>{item.title}</p>
						))}
					</article>

					<article className={style.contactNow_btn_container}>
						<button className={style.contactNow_btn}>Contact Now</button>
					</article>
				</section>
			</main>
		</>
	);
};

export default Navbar;
