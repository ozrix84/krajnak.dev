import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from '@/styles/components/Headline/Headline.module.scss';

interface HeadlineProps {
	title: ReactNode;
	subtitle: ReactNode;
	titleTag?: 'h1' | 'p';
	titleClass?: string;
	subtitleClass?: string;
}

const variants = {
	initialLeft: {
		opacity: 0, translateX: -100
	},
	initialRight: {
		opacity: 0, translateX: 100
	},
	animate: {
		opacity: 1, translateX: 0
	}
};

const headlineProps = {
	initial: 'initialLeft',
	animate: 'animate',
	variants
};

export default function Headline(props: HeadlineProps) {
	const cls       = props.titleClass || styles.HeadlineTitle;
	const title     = <strong>{props.title}</strong>
	const headline  = <motion.h1 className={cls} {...headlineProps}>{title}</motion.h1>
	const paragraph = <motion.p  className={cls} {...headlineProps}>{title}</motion.p>

	return <div className={styles.Headline} {...headlineProps}>
		{props.titleTag === 'h1' ? headline : paragraph}

		<motion.p
			className={`${props.subtitleClass || styles.HeadlineSubtitle}`}
			initial={'initialRight'}
			animate={'animate'}
			transition={{ delay: 0.2 }}
			variants={variants}
		>
			{props.subtitle}
		</motion.p>
	</div>
}