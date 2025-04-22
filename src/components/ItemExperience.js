function ItemExperience({ logo, jobTitle, workDuration, description }) {
	return (
		<>
			<div className="flex justify-center">
				<div className="max-w-2xl py-4">
					<div className="flex justify-between py-3 rounded-md">
						<div className="flex gap-3">
							<img src={logo} alt="Company logo" className="h-6" />
							<h3 className="text-white font-semibold text-sm sm:text-base">
								{jobTitle}
							</h3>
						</div>
						<span className="text-sm text-gray-400 whitespace-nowrap">
							{workDuration}
						</span>
					</div>
					<p className="text-sm sm:text-base text-gray-400 leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</>
	);
}

export default ItemExperience;
