import ActionButton from "./components/ActionButton";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
	const menu = [
		{ name: "Home", id: "home" },
		{ name: "Projects", id: "projects" },
		{ name: "Experiences", id: "experiences" },
		{ name: "Contact", id: "contact" },
	];
	return (
		<>
			<div className="font-poppins">
				<NavBar menu={menu} />
				<div className="bg-[#161513] h-full">
					<section id={menu[0].id} className="scroll-mt-20">
						<Profile />
						<ActionButton />
						<Skills />
					</section>
					<section id={menu[1].id} className="scroll-mt-20">
						<Projects />
					</section>
					<section id={menu[2].id} className="scroll-mt-20">
						<WorkExperience />
					</section>
					<section id={menu[3].id}>
						<Contacts />
					</section>
				</div>
			</div>
		</>
	);
}

export default App;
