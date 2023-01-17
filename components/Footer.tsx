import Image from "next/image";
import logo from "../public/spacex_logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { SiFlickr } from "react-icons/si";
import React from "react";

const Footer = () => {
	return (
		<div className="bg-black">
			<div className="flex justify-center items-center space-x-8 py-5 md:space-x-20">
				<Image src={logo} alt="SpaceX Logo" className="w-48 hidden md:block" />
				<FaFacebookF className="text-white" />
				<BsInstagram className="text-white" />
				<FaLinkedinIn className="text-white" />
				<FiYoutube className="text-white" />
				<SiFlickr className="text-white" />
			</div>
		</div>
	);
};

export default Footer;
