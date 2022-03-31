import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";

export const Hero = ({ backgroundColor, title, ...props }) => {
	return (
		// <div className={styles.hero} style={backgroundColor && { backgroundColor }} {...props}>
		// 	<div className={styles.logo}>
		// 		<h1 className={styles.title}>{title}</h1>
		// 		<Image src='/logo-iriepixel.svg' alt='IRIE PIXEL Logo' width={137} height={79} priority />
		// 	</div>
		// </div>
		<>
			<div className={styles.container}>
				<div className={styles.glitch} data-text='IRIEPIXEL'>
					IRIE PIXEL
				</div>
				<div className={styles.glow}>IRIE PIXEL</div>
				<p className={styles.subtitle}>
					<a href='mailto:jev@iriepixel.com'>jev@iriepixel.com</a>
				</p>
			</div>
			{/* <div className={styles.scanlines}></div> */}
		</>
	);
};

Hero.propTypes = {
	backgroundColor: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

Hero.defaultProps = {
	backgroundColor: "#171717",
	title: "IRIE PIXEL",
};
