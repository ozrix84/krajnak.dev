import { motion, AnimatePresence } from "framer-motion";
import Headline from "@/components/Headline/Headline";
import Link from 'next/link';
import indexStyles from '@/styles/pages/index.module.scss';

const title = <strong>Welcome.</strong>;
const subtitle = <span>I'm a web developer open for work</span>;

export default function IndexPage() {
	return <>
		<AnimatePresence>
			<motion.div>
				<Headline title={title} subtitle={subtitle} />

				<motion.p
					className={indexStyles.Intro}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
				>
					Have a look at my <Link href="/projects">work</Link>, or get <Link href="/contact">in touch</Link>.
				</motion.p>
			</motion.div>
		</AnimatePresence>
	</>
};
