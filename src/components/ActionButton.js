function ActionButton() {
	return (
		<>
			<div className="flex justify-center mt-8">
				<button className="rounded-full bg-white px-4 py-2 hover:bg-gray-400 transition duration-300">
					Get In Touch
				</button>
				<button className="rounded-full border text-white px-4 py-2 ml-4 transition duration-300 hover:bg-white hover:text-black">
					Download CV
				</button>
			</div>
		</>
	);
}

export default ActionButton;
