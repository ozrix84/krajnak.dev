import styles from "@/styles/components/Projects/Projects.module.scss";
import ProjectItem from "@/components/Projects/ProjectItem";
import {motion} from "framer-motion";

export interface Project {
	id: number;
	title: string;
	desc: string;
	preview: string;
	theme: string;

	links: {
		video?: string;
		demo?: string;
		github?: string;
	}
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Game of Life',
		desc: 'The well-known cellular automaton algorithm implemented in <strong>React</strong> and <strong>Typescript.</strong>',
		preview: 'video/gol.mp4',
		theme: 'azure',
		links: {
			video: '/',
			demo: '/game-of-life',
			github: '/'
		}
	},
	{
		id: 2,
		title: 'E15 Stocks',
		desc: 'Stock app for financial news site E15 written in <strong>React</strong> and <strong>Chart.js</strong>.',
		preview: 'video/stocks.mp4',
		theme: 'caramel',
		links: {
			video: '/'
		}
	},
	{
		id: 3,
		title: 'E15 Premium',
		desc: 'Subscriber section of financial news site E15. Utilizes modern, performant CSS transitions.',
		preview: 'video/premium.mp4',
		theme: 'crimson',
		links: {
			video: '/',
			demo: 'https://e15.cz/premium'
		}
	},
]

export default function Projects() {
	return <>
		<div className={styles.Projects}>
			{projects.map((project, index)=> {
				const expanded = (!index);

				return <motion.div
					key={index}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: (index * 0.1) + 0.5 }}
				>
					<ProjectItem key={project.id} data={project} expanded={expanded} />
				</motion.div>
			})}
		</div>
	</>
}