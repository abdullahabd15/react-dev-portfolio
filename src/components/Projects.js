import ItemProject from "./ItemProject";
import HtmlTutorialImage from "../assets/project-thumbnail-1.jpg";
import CssTutorialImage from "../assets/project-thumbnail-2.jpg";

function Projects() {
	return (
		<>
			<div className="flex justify-center mt-20">
				<span className="bg-gradient-to-b from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent font-bold text-2xl">
					PROJECTS
				</span>
			</div>
			<div className="flex flex-col items-center md:flex-row md:justify-center mt-4 gap-8">
				<ItemProject projectName="HTML TUTORIAL" image={HtmlTutorialImage} />
				<ItemProject projectName="CSS TUTORIAL" image={CssTutorialImage} />
			</div>
		</>
	);
}

export default Projects;
