import React from 'react';
import styles from '@/styles/components/Button/Button.module.scss';

export interface ButtonProps {
	href: string;
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
	return <>
		<a className={styles.Button} href={props.href}>
			{props.children}
		</a>
	</>
}