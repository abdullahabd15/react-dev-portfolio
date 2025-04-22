import ItemExperience from "./ItemExperience";
import googleLogo from "../assets/google-logo.png";
import appleLogo from "../assets/apple-logo.png";
import metaLogo from "../assets/meta-logo.png";

function WorkExperience() {
	return (
		<>
			<div className="max-w-3xl mx-auto mt-20 px-4">
				<div className="text-center">
					<span className="bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent font-bold text-2xl">
						EXPERIENCE
					</span>
				</div>
				<ItemExperience
					logo={googleLogo}
					jobTitle="Lead Software Engineer at Google"
					workDuration="Nov 2019 - Present"
					description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
				/>
				<ItemExperience
					logo={appleLogo}
					jobTitle="Software Engineer at Apple"
					workDuration="Jan 2017 - Oct 2019"
					description="During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
				/>
				<ItemExperience
					logo={metaLogo}
					jobTitle="Software Engineer Intern at Meta"
					workDuration="Jun 2016 - Dec 2016"
					description="At Meta, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
				/>
			</div>
		</>
	);
}

export default WorkExperience;
