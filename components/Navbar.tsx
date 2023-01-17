import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/spacex_logo.png";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const changeState = () => {
		setMobileMenu(!mobileMenu);
	};
	return (
		<div className="flex justify-center">
			{mobileMenu ? (
				<div className="h-screen bg-black w-screen">
					<div className="flex justify-around items-center my-5">
						<div>
							<Link href="/">
								<Image src={logo} alt="SpaceX Logo" className="w-48" />
							</Link>
						</div>
						<RxCross2
							className="text-white text-2xl font-bold cursor-pointer"
							onClick={changeState}
						/>
					</div>
					<div className="lg:hidden flex flex-col justify-center items-center">
						<div className="text-white text-center text-sm space-y-10 font-semibold flex flex-col justify-center items-center">
							<Link href="/dragon">DRAGON</Link>
							<Link href="/falcon9">FALCON 9</Link>
							<Link href="/human_spacelight">HUMAN SPACELIGHT</Link>
							<a
								href="https://www.starlink.com"
								target="_blank"
								rel="noreferrer"
							>
								STARLINK
							</a>
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-center">
					<div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 fixed top-5 w-[85%] rounded-lg items-center flex justify-around h-16">
						<div>
							<Link href="/">
								<Image src={logo} alt="SpaceX Logo" className="w-48" />
							</Link>
						</div>
						<div className=" hidden lg:flex items-center space-x-4">
							<div className="h-[1.5px] w-20 bg-white"></div>
							<div className="text-white text-sm space-x-10 font-semibold">
								<Link href="/dragon">DRAGON</Link>
								<Link href="/falcon9">FALCON 9</Link>
								<Link href="/human_spacelight">HUMAN SPACELIGHT</Link>
								<a
									href="https://www.starlink.com"
									target="_blank"
									rel="noreferrer"
								>
									STARLINK
								</a>
							</div>
						</div>
						<HiMenuAlt2
							className="text-white text-2xl font-bold lg:hidden cursor-pointer"
							onClick={changeState}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
