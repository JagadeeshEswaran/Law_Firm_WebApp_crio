/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Hero.module.css";
import Hero_Img_Banner from "../../assets/Hero/Hero_Img_Banner.svg";
// import Hero_Img_1 from "../../assets/Hero/Hero_Bg_Panel_png.png";
// import Hero_Img_2 from "../../assets/Hero/Hero_Person_img_png.png";

const Hero = () => {
	return (
		<>
			<main className={style.hero_main_container}>
				<section className={style.hero_main_section}>
					<article>
						<h1 className={style.heroText_1}>You don't have to</h1>
						<h1 className={style.heroText_2}>Fight them Alone.</h1>

						<p className={style.heroText_p}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
							eveniet in accusantium inventore repudiandae est nemo hic
							assumenda repellendus. Lorem ipsum dolor sit amet consectetur
							adipisicing elit <span style={{ border: "50%" }}>.</span>
						</p>

						<article className={style.hero_form_ele}>
							<form action="#" className={style.hero_form}>
								<input
									type="text"
									// placeholder={`${Hero_Form_Email}`}
									placeholder={` Enter your email address`}
									className={style.hero_form_input}
								/>
								<button className={style.hero_form_btn}>
									<p>Let's Talk</p>
								</button>
							</form>
						</article>
					</article>
				</section>

				<section className={style.hero_sub_section}>
					{/* <article className={style.Hero_Image_Banner}>
						<article className={style.Hero_img_Panel}></article>
						<img src={Hero_Img_2} alt="" />
					</article> */}

					<img src={Hero_Img_Banner} alt="" />
				</section>
			</main>
		</>
	);
};

export default Hero;
