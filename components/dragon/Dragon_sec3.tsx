import React from "react";

const Dragon_sec3 = () => {
	return (
		<>
			<div className="bg-black">
				<div className="dragon-trunk-lines bg-fixed bg-cover bg-center h-screen flex items-center">
					<h6 className="w-[90%] md:w-[40%] pl-20 pb-10 text-white">
						The Dragon spacecraft is capable of carrying up to 7 passengers to
						and from Earth orbit, and beyond. It is the only spacecraft
						currently flying that is capable of returning significant amounts of
						cargo to Earth, and is the first private spacecraft to take humans
						to the space station.
					</h6>
				</div>
				<div className="dragon-trunk-render bg-cover bg-center h-screen flex items-center pl-20 pb-10 bg-fixed">
					<table
						className="text-white w-[90%] md:w-[40%] text-sm"
						cellPadding={8}
					>
						<tbody>
							<tr className="border-b-2 border-gray-700">
								<td>HEIGHT</td>
								<td className="text-end">8.1 m / 26.7 ft</td>
							</tr>
							<tr className="border-b-2 border-gray-700">
								<td>DIAMETER</td>
								<td className="text-end">4 m / 13 ft</td>
							</tr>
							<tr className="border-b-2 border-gray-700">
								<td>CAPSULE VOLUME</td>
								<td className="text-end">9.3 m³ / 328 ft³</td>
							</tr>
							<tr className="border-b-2 border-gray-700">
								<td>TRUNK VOLUME</td>
								<td className="text-end">37 m³ / 1300 ft³</td>
							</tr>
							<tr className="border-b-2 border-gray-700">
								<td>LAUNCH PAYLOAD MASS</td>
								<td className="text-end">6,000 kg / 13,228 lbs</td>
							</tr>
							<tr className="border-b-2 border-gray-700 ">
								<td>RETURN PAYLOAD MASS</td>
								<td className="text-end">3,000 kg / 6,614 lbs</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Dragon_sec3;
