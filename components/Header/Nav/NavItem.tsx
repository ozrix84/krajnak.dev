import {Page} from "@/components/Header/Nav/Nav";

interface NavItemProps {
	item: Page
}

export default function NavItem(props: NavItemProps) {
	return <li>
		<a href={props.item.url}>
			{props.item.name}
		</a>
	</li>
}
