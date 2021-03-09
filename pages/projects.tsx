import Head from 'next/head';
import styles from '@/styles/components/Headline/Headline.module.scss';
import Projects from "@/components/Projects/Projects";
import Headline from "@/components/Headline/Headline";

const title = <strong>Recent work</strong>;
const subtitle = <span>Select a preview down below</span>;

export default function ProjectsPage() {
	return <>
		<Head>
			<title>Recently Completed Projects - Jiří Krajňák</title>
			<link rel="prefetch" href="/video/full/gol.mp4" as="video" type="video/mp4" crossOrigin="" />
			<link rel="prefetch" href="/video/full/premium.mp4" as="video" type="video/mp4" crossOrigin="" />
			<link rel="prefetch" href="/video/full/stocks.mp4" as="video" type="video/mp4" crossOrigin="" />
		</Head>

		<Headline
			className={styles.Projects}
			title={title}
			titleTag={'h1'}
			subtitle={subtitle}
		/>

		<Projects />
	</>
};
