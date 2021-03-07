import React from 'react';
import styles from '@/styles/components/Layout/Content.module.scss';

export default function Content(props: React.PropsWithChildren<{}>) {
	return <section className={styles.Content}>
		{props.children}
	</section>
}