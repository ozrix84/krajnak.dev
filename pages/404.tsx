import Head from 'next/head';
import Headline from "@/components/Headline/Headline";
import styles from '@/styles/components/Headline/Headline.module.scss';

const title = <strong>404</strong>;
const subtitle = <span>The requested page couldn't be found</span>;

export default function IndexPage() {
	return <>
		<Head>
			<title>Jiří Krajňák - Web Developer</title>
		</Head>
		<Headline className={styles.Page404} title={title} subtitle={subtitle} />
	</>
};
