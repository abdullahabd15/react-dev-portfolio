function ItemProject({ projectName, image }) {
	return (
		<>
			<div className="w-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
				<img src={image} alt="Project" className="w-full h-48 object-cover" />
				<div className="bg-[#2c2c2c] px-4 py-3 flex items-center justify-between">
					<div className="text-white">
						<p className="uppercase text-gray-400 text-[0.65rem]">
							Click here to visit
						</p>
						<p className="font-bold">{projectName}</p>
					</div>
					<span className="text-white text-xl">➜</span>
				</div>
			</div>
		</>
	);
}

export default ItemProject;
