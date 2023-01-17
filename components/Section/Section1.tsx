import Link from "next/link";
import React from "react";

const Section1 = () => {
	return (
		<div>
			<div className="image1 h-screen bg-cover bg-center flex justify-center flex-col p-5 space-y-5">
				<h6 className="text-lg font-semibold text-white mt-32">
					RECENT LAUNCH
				</h6>
				<h1 className="text-5xl font-bold text-white">DRAGON TRUNK MISSION</h1>
				<button className="border-2 border-white px-10 text-sm py-3 text-white uppercase font-semibold bg-transparent w-fit">
					<Link href="/dragon">Learn More</Link>
				</button>
			</div>
		</div>
	);
};

export default Section1;
