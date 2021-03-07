import {useRouter} from "next/router";
import Link from "next/link";
import styles from '@/styles/components/Header/Logo.module.scss';

export default function Logo() {
	const router = useRouter();
	const link = <Link href="/"><a href="/">Jiří <span>Krajňák</span></a></Link>

	return <>
		{router.pathname === '/' ? <h1 className={`${styles.Logo}`}>
			{link}
		</h1> : <div className={`${styles.Logo}`}>
			{link}
		</div>}
	</>
}
