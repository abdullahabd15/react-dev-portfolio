import JSIcon from "../assets/javascript.png";
import NodeJSIcon from "../assets/nodejs.png";
import HTML5Icon from "../assets/html.png";
import CSS3Icon from "../assets/css.png";
import ReactIcon from "../assets/reactjs.png";

function Skills() {
	return (
		<>
			<h1 className="text-2xl tracking-[.2em] text-white mt-8 text-center">
				EXPERIENCE WITH
			</h1>
			<div className="flex justify-center items-center gap-8 py-4 mt-4">
				<img
					src={JSIcon}
					alt="JavaScript"
					className="w-10 h-10 object-contain"
				/>
				<img
					src={NodeJSIcon}
					alt="Node JS"
					className="w-10 h-10 object-contain"
				/>
				<img src={HTML5Icon} alt="HTML5" className="w-10 h-10 object-contain" />
				<img src={CSS3Icon} alt="CSS3" className="w-10 h-10 object-contain" />
				<img
					src={ReactIcon}
					alt="React JS"
					className="w-10 h-10 object-contain"
				/>
			</div>
		</>
	);
}

export default Skills;
