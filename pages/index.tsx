import styles from '@/styles/pages/index.module.scss';
import Headline from "@/components/Headline/Headline";

const title = 'Welcome.';
const subtitle = 'I’m an experienced web developer';

export default function Index() {
  return <>
	<Headline title={title} subtitle={subtitle} />
	<p className={styles.Intro}>
		Have a look at my <a href="/projects">work</a>, or get <a href="/contact">in touch</a>.
	</p>
  </>
};
