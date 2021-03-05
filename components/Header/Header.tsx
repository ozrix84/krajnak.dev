import styles from '@/styles/components/Header/Header.module.scss';
import Logo from "@/components/Header/Logo/Logo";
import Nav from './Nav/Nav';

export interface Page {
	name: string,
	url: string
};

const pages: Page[] = [
	{
		name: 'home',
		url: '/'
	},
	{
		name: 'projects',
		url: '/projects'
	},
	{
		name: 'contact',
		url: '/contact'
	}
];

export default function Header() {
	return <div className={styles.Header}>
		<Logo />
		<Nav pages={pages} />
	</div>
}
