import {useEffect, useState} from 'react';
import styles from "@/styles/components/Projects/Projects.module.scss";
import ProjectItem from "@/components/Projects/ProjectItem";
import {motion} from "framer-motion";
import Modal from "@/components/Modal/Modal";

export interface Project {
	id: number;
	title: string;
	desc: string;
	preview: string;
	theme: string;

	links: {
		video?: string;
		visit?: string;
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
			video: 'video/full/gol.mp4',
			visit: '/game-of-life',
			github: 'https://github.com/ozrix84/game-of-life'
		}
	},
	{
		id: 2,
		title: 'E15 Stocks',
		desc: 'Stock app for financial news site E15 written in <strong>React</strong> and <strong>Chart.js</strong>.',
		preview: 'video/stocks.mp4',
		theme: 'crimson',
		links: {
			video: 'video/full/stocks.mp4'
		}
	},
	{
		id: 3,
		title: 'E15 Premium',
		desc: 'Subscriber section of financial news site E15. Utilizes modern, performant CSS transitions.',
		preview: 'video/premium.mp4',
		theme: 'caramel',
		links: {
			video: 'video/full/premium.mp4',
			visit: 'https://e15.cz/premium'
		}
	},
]

export default function Projects() {
	const [ selected, setSelected ] = useState<null | number>(null);
	const [ modalOpened, setModalOpened ] = useState<boolean>(false);
	const [ videoUrl, setVideoUrl ] = useState<string | null>(null);

	const video = modalOpened ? (
		<video muted loop playsInline width="250" height="200" autoPlay>
			<source src={videoUrl} type="video/mp4"/>
		</video>) : null;

	useEffect(()=>{
		const timeout = setTimeout(()=> setSelected(0), 900);
		return () => clearTimeout(timeout);
	}, []);

	function videoClickHandler(index: number) {
		setVideoUrl(projects[index].links.video);
		setModalOpened(true);
	}

	return <>
		<div className={styles.Projects}>
			{projects.map((project, index)=> {
				const expanded = selected === index;

				return (
					<motion.div
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.15 }}
					>
						<ProjectItem cls={index + 1 === projects.length ? styles.ProjectLast : ''}
									 key={project.id}
									 data={project}
									 expanded={expanded}
									 onClick={()=> setSelected(index)}
									 onVideoClick={()=> videoClickHandler(index)}
						/>
					</motion.div>
				)
			})}
		</div>

		<Modal onClose={()=> setModalOpened(false)}>
			{video}
		</Modal>
	</>
}
