import projectsStyles from '@/styles/pages/projects.module.scss';
import Projects from "@/components/Projects/Projects";
import Headline from "@/components/Headline/Headline";

const title = <strong>Recent work</strong>;
const subtitle = <span>Select a preview down below</span>;

export default function ProjectsPage() {
	return <>
		<Headline
			titleTag={'h1'}
			title={title}
			subtitle={subtitle}
			titleClass={projectsStyles.HeadlineTitle}
			subtitleClass={projectsStyles.HeadlineSubtitle}
		/>
		<Projects />
	</>
};
