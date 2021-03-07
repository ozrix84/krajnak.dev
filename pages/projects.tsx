import Head from 'next/head';
import projectsStyles from '@/styles/pages/projects.module.scss';
import Projects from "@/components/Projects/Projects";
import Headline from "@/components/Headline/Headline";

const title = <strong>Recent work</strong>;
const subtitle = <span>Select a preview down below</span>;

export default function ProjectsPage() {
	return <>
		<Head>
			<title>Recently Completed Projects - Jiří Krajňák</title>
		</Head>
		<Headline
			title={title}
			subtitle={subtitle}
			titleTag={'h1'}
			titleClass={projectsStyles.HeadlineTitle}
			subtitleClass={projectsStyles.HeadlineSubtitle}
		/>
		<Projects />
	</>
};
