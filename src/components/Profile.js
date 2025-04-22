import MyAvatar from "../assets/my_avatar.jpg";

function Profile() {
	return (
		<>
			<div className="flex justify-center">
				<img
					src={MyAvatar}
					alt="Avatar"
					className="w-36 rounded-full object-cover mt-8"
				/>
			</div>
			<div className="text-center text-white mt-8">
				<h1 className="text-4xl font-bold">Hello, I'm John Doe</h1>
				<h2 className="text-white text-2xl mt-2 font-bold">
					I do code and <br />
					make content{"  "}
					<span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
						about it!
					</span>
				</h2>
			</div>
			<div className="text-center max-w-2xl mx-auto mt-8 px-4">
				<p className="text-gray-400 text-sm sm:text-base leading-relaxed">
					I am a seasoned full-stack software engineer with over 8 years of
					professional experience, specializing in backend development. My
					expertise lies in crafting robust and scalable SaaS-based
					architectures on the Amazon AWS platform.
				</p>
			</div>
		</>
	);
}

export default Profile;
