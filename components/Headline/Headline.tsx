import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from '@/styles/components/Headline/Headline.module.scss';

interface HeadlineProps {
	title: ReactNode;
	subtitle: ReactNode;
	titleTag?: 'h1' | 'p';
	className?: string;
}

const variants = {
	fromLeft: {
		opacity: 0, translateX: -100
	},
	fromRight: {
		opacity: 0, translateX: 100
	},
	animate: {
		opacity: 1, translateX: 0
	}
};

const lineVariants = {
	initial: { display: 'none', opacity: 0},
	animate: { display: 'block', opacity: 1, transition: { duration: 0.1, delay: 0.3 }}
}

const motionProps = {
	initial: 'fromLeft',
	animate: 'animate',
	variants
};

const lineMotionProps = {
	initial: 'initial',
	animate: 'animate',
	variants: lineVariants
}

export default function Headline(props: HeadlineProps) {
	const title     = props.title;
	const headline  = <motion.h1 className={styles.HeadlineTitle} {...motionProps}>{title}</motion.h1>
	const paragraph = <motion.p  className={styles.HeadlineTitle} {...motionProps}>{title}</motion.p>

	return <div className={`${styles.Headline} ${props.className || ''}`} {...motionProps}>
		{props.titleTag === 'h1' ? headline : paragraph}

		<motion.p
			className={`${styles.HeadlineSubtitle}`}
			initial={'fromRight'}
			animate={'animate'}
			transition={{ delay: 0.2 }}
			variants={variants}
		>
			{props.subtitle}

			<motion.span {...lineMotionProps} className={styles.HeadlineLeftBorder}/>
			<motion.span {...lineMotionProps} className={styles.HeadlineRightBorder}/>
		</motion.p>
	</div>
}