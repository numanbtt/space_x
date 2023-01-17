import React from "react";

const F9_section4 = () => {
	return (
		<div className="bg-black py-16">
			<div className="flex flex-col justify-center items-center space-y-5">
				<div className="w-[2px] h-48 bg-white"></div>
				<h2 className="text-white text-center">
					For information about our launch services, contact{" "}
					<span className="italic font-semibold">sales@spacex.com</span>
				</h2>
				<div className="space-x-5 space-y-5 flex flex-col md:flex-row justify-center items-center">
					<button className="border-2 uppercase border-white px-10 text-sm py-3 text-white font-semibold bg-transparent w-fit">
						Download User Guide
					</button>
					<button className="border-2 uppercase border-white px-10 text-sm py-3 text-white font-semibold bg-transparent w-fit">
						Capabilities and services
					</button>
				</div>
			</div>
		</div>
	);
};

export default F9_section4;
