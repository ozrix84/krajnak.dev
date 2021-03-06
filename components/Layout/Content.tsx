import React from 'react';
import styles from '@/styles/components/Layout/Content.module.scss';

export default function Content(props: React.PropsWithChildren<{}>) {
	return <div className={styles.Content}>
		{props.children}
	</div>
}