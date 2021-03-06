import styles from '@/styles/components/Header/Header.module.scss';
import Logo from "@/components/Header/Logo/Logo";
import Nav from './Nav/Nav';

export interface Page {
	name: string,
	path: string
};

const pages: Page[] = [
	{
		name: 'home',
		path: '/'
	},
	{
		name: 'projects',
		path: '/projects'
	},
	{
		name: 'contact',
		path: '/contact'
	}
];

export default function Header() {
	return <>
		<header>
			<div className={styles.Header}>
				<Logo />
				<Nav pages={pages} />
			</div>
		</header>
	</>
}
