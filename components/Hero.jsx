import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import "../styles/Hero.module.scss";

export const Hero = ({ backgroundColor, title, ...props }) => {
	return (
		<div
			className='hero'
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			<div className='hero__logo'>
				<h1>{title}</h1>
				<Image
					src='/logo-iriepixel.svg'
					alt='IRIE PIXEL Logo'
					width={137}
					height={79}
				/>
			</div>
		</div>
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
