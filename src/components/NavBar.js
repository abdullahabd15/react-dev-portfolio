import myAvatar from "../assets/my_avatar.jpg";
import hamburgerMenuIcon from "../assets/hamburger-menu.png";
import { useState } from "react";

function NavBar({ menu }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 bg-[#222222] px-8 py-4 flex justify-between items-center">
			<div className="flex items-center">
				<img
					src={myAvatar}
					alt="Logo"
					className="h-8 w-auto rounded-full cursor-pointer"
				/>
			</div>

			<ul className="hidden md:flex space-x-10 text-white text-sm">
				{menu.map((item) => (
					<li
						key={item.name}
						className="font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent cursor-pointer"
					>
						<a href={`#${item.id}`}>{item.name}</a>
					</li>
				))}
			</ul>

			<div className="md:hidden">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-white text-2xl"
				>
					<img src={hamburgerMenuIcon} alt="Menu" className="h-6 w-auto" />
				</button>
			</div>

			{isOpen && (
				<div className="absolute top-16 left-0 w-full bg-[#222222] flex flex-col items-center space-y-4 py-4 md:hidden z-50">
					{menu.map((item) => (
						<span
							key={item.id}
							className="text-white font-semibold hover:bg-gradient-to-r hover:from-orange-400 hover:via-pink-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent cursor-pointer"
							onClick={() => setIsOpen(false)}
						>
							<a href={`#${item.id}`}>{item.name}</a>
						</span>
					))}
				</div>
			)}
		</nav>
	);
}

export default NavBar;
