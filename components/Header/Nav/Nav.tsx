import styles from '@/styles/components/Header/Nav.module.scss';
import NavItem from "@/components/Header/Nav/NavItem";
import {Page} from "@/components/Header/Header";

interface NavProps {
	pages: Page[]
}

export default function Nav(props: NavProps) {
	return (
		<nav>
			<ul className={styles.Nav}>
				{props.pages.map((page, i)=> <NavItem key={i} item={page}/>)}
			</ul>
		</nav>
	);
}
