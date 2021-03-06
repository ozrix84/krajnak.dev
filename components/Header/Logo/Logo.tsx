import styles from '@/styles/components/Header/Logo.module.scss';

export default function Logo() {
	return <>
		<h1 className={`${styles.Logo}`}>
			<a href="/">Jiří <span>Krajňák</span></a>
		</h1>
	</>
}
