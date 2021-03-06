import styles from '@/styles/components/Headline/Headline.module.scss';

interface HeadlineProps {
	title: string,
	subtitle: string
}

export default function Headline(props: HeadlineProps) {
	return <div className={styles.Headline}>
		<p className={styles.HeadlineTitle}>
			<strong>{props.title}</strong>
		</p>
		<p className={styles.HeadlineSubtitle}>
			{props.subtitle}
		</p>
	</div>
}