import Head from 'next/head';
import { motion } from "framer-motion";
import Headline from "@/components/Headline/Headline";
import Address from "@/components/Address/Address";
import contactStyles from '@/styles/pages/contact.module.scss';

const title = <strong>Need work done?</strong>;
const subtitle = <span>Call, or mail me your inquiry</span>;

const dotContainer = {
	hidden: { opacity: 0 },
	show: { opacity: 1 }
}

const dotVariants = {
	hidden: { opacity: 0, scale: 0 },
	show: { opacity: 1, scale: 1 }
};

const linesWidthMap = [77, 70, 117, 140, 180, 190, 420];

export default function ContactPage() {
	return <>
		<Head>
			<title>Contact Information - Jiří Krajňák</title>
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-100.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-200.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-300.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-500.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-600.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-700.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-800.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-900.woff2" as="font" type="font/woff2" crossOrigin="" />
		</Head>

		<Headline
			title={title}
			subtitle={subtitle}
			titleTag={'h1'}
			titleClass={contactStyles.HeadlineTitle}
			subtitleClass={contactStyles.HeadlineSubtitle}
		/>

		<Address/>

		<motion.div
			className={contactStyles.Dots}
			variants={dotContainer}
			initial="hidden"
			animate="show"
		>
			{[...new Array(6)].map((i,j) => {
				return <motion.div
					key={j}
					variants={dotVariants}
					transition={{delay: j * 0.1 }} />
			})}
		</motion.div>

		<div className={contactStyles.Lines}>
			{[...new Array(7)].map((i,j) => {
				return <motion.div
					key={j}
					initial={{ width: 0 }}
					animate={{ width: linesWidthMap[j] || 100 }}
					transition={{ delay: 0.4 + 0.15 }} />
			})}
		</div>
	</>
};
