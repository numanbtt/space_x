import Link from "next/link";
import React from "react";

const Section3 = () => {
	return (
		<div>
			<div className="image3 h-screen bg-cover bg-center flex justify-center flex-col p-5 space-y-5">
				<h6 className="text-lg font-semibold text-white mt-32">
					UPCOMING LAUNCH
				</h6>
				<h1 className="text-5xl font-bold text-white">FALCON-9 MISSION</h1>
				<button className="border-2 border-white px-10 text-sm py-3 text-white uppercase font-semibold bg-transparent w-fit">
					<Link href="/falcon9">Read More</Link>
				</button>
			</div>
		</div>
	);
};

export default Section3;
