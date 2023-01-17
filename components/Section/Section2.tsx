import React from "react";

const Section2 = () => {
	return (
		<div>
			<div className="image2 h-screen bg-cover bg-center flex justify-center flex-col p-5 space-y-5">
				<h6 className="text-lg font-semibold text-white mt-32">
					UPCOMING LAUNCH
				</h6>
				<h1 className="text-5xl font-bold text-white">STARLINK MISSION</h1>
				<button className="border-2 border-white px-10 text-sm py-3 text-white uppercase font-semibold bg-transparent w-fit">
					<a href="https://www.starlink.com" target="__blank">
						Go to StarLink Website
					</a>
				</button>
			</div>
		</div>
	);
};

export default Section2;
