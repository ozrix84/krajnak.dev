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

const dot = {
	hidden: { opacity: 0, scale: 0 },
	show: { opacity: 1, scale: 1 }
};

const linesWidthMap = [77, 70, 117, 140, 180, 190, 420];

export default function ContactPage() {
	return <>
		<Head>
			<title>Contact Information - Jiří Krajňák</title>
		</Head>
		<motion.div>
			<Headline
				title={title}
				subtitle={subtitle}
				titleTag={'h1'}
				titleClass={contactStyles.HeadlineTitle}
				subtitleClass={contactStyles.HeadlineSubtitle}
			/>
		</motion.div>

		<Address/>

		<motion.div className={contactStyles.Dots}
					variants={dotContainer}
					initial="hidden"
					animate="show">
			{[...new Array(6)].map((i,j) => {
				return <motion.div key={j} variants={dot} transition={{delay: j * 0.1 + 0.2 }} />
			})}
		</motion.div>

		<div className={contactStyles.Lines}>
			{[...new Array(7)].map((i,j) => {
				return <motion.div key={j}
								   initial={{ width: 0 }}
								   animate={{ width: linesWidthMap[j] || 100 }}
								   transition={{ delay: 0.4 }} />
			})}
		</div>
	</>
};
