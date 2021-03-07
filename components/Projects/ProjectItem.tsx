import { useState } from 'react';
import { motion } from "framer-motion";
import styles from "@/styles/components/Projects/Projects.module.scss";
import {Project} from '@/components/Projects/Projects';
import Button from "@/components/Button/Button";

interface ProjectProps {
	data: Project;
	expanded?: boolean;
	cls?: string;
}

export default function ProjectItem(props: ProjectProps) {
	const [isExpanded, setIsExpanded] = useState((props.expanded));

	const nav = isExpanded ? (
		<nav className={styles.ProjectLinks}>
			<ul>
				{Object.keys(props.data.links).map((link, index)=> {
					return (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: 150 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								delay: (index * 0.2) + 1,
								x: { type: "spring", stiffness: 100, bounce: 0 },
								default: { duration: 1 },
							}}
						>
							<Button href={props.data.links[link]}>
								{link}
							</Button>
						</motion.li>
					);
				})}
			</ul>
		</nav>
	) : null;

	return <>
		<motion.article
			id={`project-${props.data.id}`}
			className={`${styles.Project} ${props.cls}`}
		>
			<div className={`${styles.ProjectPreview} ${props.expanded ? styles.ProjectPreviewExpanded : '' }`}>
				<video muted loop playsInline width="250" height="200" autoPlay>
					<source src={props.data.preview} type="video/mp4"/>
				</video>
			</div>

			{nav}

			<h2>
				{props.data.title}
			</h2>

			<p dangerouslySetInnerHTML={{__html: props.data.desc}}/>
		</motion.article>
	</>
}
