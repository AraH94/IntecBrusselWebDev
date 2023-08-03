import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState(false); // nav is initial state, which is false in this case and setNav is the function that's going to change
	const handleNav = () => {
		setNav(!nav) // (! = everytime we run this function, do the opposit what the current value is) 
		// if you put false and ! it will do the opposite
	}

	return (
		<div className="w-full h-[90px] bg-black">
			<div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
				<div>
					<h1 className="text-[var(--primary-blue)]">DEFI</h1>
				</div>
				<div className="hidden md:flex">
					<ul className="flex text-white items-center">
						<li>Platform</li>
						<li>Developers</li>
						<li>Community</li>
						<li>About</li>
						<button className="ml-4">Use Defi</button>
					</ul>
				</div>

				{/* Hamburger Menu */}
				<div onClick={handleNav} className="block md:hidden">
					{/* if nav is true 'AiOutlineClose' else (:) 'AiOutlineMenu' */}
					{nav ? <AiOutlineClose size={30} className="text-white" /> : <AiOutlineMenu size={30} className="text-white" />}
				</div>

				{/* Mobile Menu */}
				{/* if nav is true 'w-full...' else (:) 'absolute...' */}
				<div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
					<ul>
						<li className="text-2xl">Platform</li>
						<li className="text-2xl">Developers</li>
						<li className="text-2xl">Community</li>
						<li className="text-2xl">About</li>
						<button className="m-8">Use Defi</button>
					</ul>
				</div>
			</div>
		</div>
	)
};

export default Navbar;
