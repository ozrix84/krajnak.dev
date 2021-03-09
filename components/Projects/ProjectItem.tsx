import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from "@/styles/components/Projects/Projects.module.scss";
import {Project} from '@/components/Projects/Projects';
import Button from "@/components/Button/Button";

interface ProjectProps {
	data: Project;
	expanded?: boolean;
	cls?: string;
	onClick(): void;
}

const pulse = {
	rest: {},
	hover: { scale: 8, opacity: 0, transition: { duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }}
};

const preview = {
	rest: { scale: 0 },
	expand: { scale: 1, transition: { duration: 0.3 } }
}

const previewPulse = {
	rest: { scale: 1 },
	expand: { scale: 1.3, opacity: 0, transition: { duration: 0.3, delay: 0.2 }}
}

export default function ProjectItem(props: ProjectProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(()=>{
		setIsExpanded(props.expanded);
	}, [props.expanded]);

	const nav = isExpanded ? (
		<nav className={styles.ProjectLinks}>
			<ul>
				{Object.keys(props.data.links).map((link, index)=> {
					return (
						<motion.li
							key={index}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: (index * 0.2) + 0.4 }}
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
			className={`${styles.Project} ${props.cls}`}
			whileHover={isExpanded ? 'rest' : 'hover'}
			onClick={props.onClick}
		>
			<div className={styles.ProjectTop}>
				<motion.div
					className={`${styles.ProjectPreview}`}
					variants={preview}
					animate={isExpanded ? 'expand' : 'rest'}
				>
					<video muted loop playsInline width="250" height="200" autoPlay>
						<source src={props.data.preview} type="video/mp4"/>
					</video>

					<motion.div
						className={styles.ProjectPreviewPulse}
						variants={previewPulse}
						animate={isExpanded ? 'expand' : 'rest'} />
				</motion.div>

				<div className={styles.ProjectTopOverflow}>
					<motion.div
						className={styles.CirclePulse}
						variants={pulse}  />
				</div>

				{nav}
			</div>

			<div className={styles.HoverContainer}>
				<motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: {delay: 0.9} }}>
					{props.data.title}
				</motion.h2>
				<motion.p
					dangerouslySetInnerHTML={{__html: props.data.desc}}
					initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: {delay: 0.9} }}
				/>

				<div className={styles.Circle} />
			</div>
		</motion.article>
	</>
}
