import { useRouter } from "next/router";
import styles from '@/styles/components/Header/Nav.module.scss';
import {Page} from "@/components/Header/Header";

interface NavItemProps {
	item: Page
}

export default function NavItem(props: NavItemProps) {
	const router = useRouter();

	return <li className={`${styles.NavItem} ${router.pathname == props.item.path ? styles.NavItemActive : ''}`}>
		<a href={props.item.path}>
			{props.item.name}
		</a>
	</li>
}
