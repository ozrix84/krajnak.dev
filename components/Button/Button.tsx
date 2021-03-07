import React from 'react';
import styles from '@/styles/components/Button/Button.module.scss';

export interface ButtonProps {
	href: string;
	width?: number;
	className?: string;
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
	const style = {
		width: `${props.width}px` || 'auto'
	};

	return <>
		<a className={`${styles.Button} ${props.className || ''}`} href={props.href} style={style}>
			{props.children}
		</a>
	</>
}