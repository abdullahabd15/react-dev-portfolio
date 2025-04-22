import instaIcon from "../assets/instagram.png";
import xIcon from "../assets/x.png";
import youtubeIcon from "../assets/youtube.png";
import emailIcon from "../assets/email-icon.png";

function Contacts() {
	return (
		<>
			<div className="bg-[#191919]">
				<div className="max-w-3xl mx-auto mt-20 pb-16 py-4 px-4 sm:px-6 md:px-8">
					<span className="text-white text-2xl">Contact</span>
					<p className="text-gray-400 mt-4 text-sm ">
						Seasoned Full Stack Software Engineer with over 8 years of hands-on
						experience in designing and implementing robust, scalable, and
						innovative web solutions. Adept at leveraging a comprehensive skill
						set encompassing front-end and back-end technologies
					</p>
					<div className="flex gap-2 mt-8">
						<img src={emailIcon} alt="email icon" />
						<span className="text-gray-400 text-sm cursor-pointer hover:underline hover:underline-offset-1">
							johndoe@gmail.com
						</span>
					</div>
					<div className="flex gap-4 mt-8">
						<img
							src={instaIcon}
							alt="instagram icon"
							className="h-4 cursor-pointer"
						/>
						<img src={xIcon} alt="x icon" className="h-4 cursor-pointer" />
						<img
							src={youtubeIcon}
							alt="youtube icon"
							className="h-4 cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contacts;
