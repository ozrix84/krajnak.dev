import styles from "@/styles/components/Address/Address.module.scss";
import {motion} from "framer-motion";
import Button from "@/components/Button/Button";



export default function Address() {
	return <>
		<address className={styles.Address}>
			<motion.img
				className={styles.Avatar}
				src="/images/avatar.webp"
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.3 }}
			/>

			<div className={styles.AddressButtons}>
				<motion.div initial={{ opacity: 0, x: -65 }} transition={{ delay: 0.6 }} animate={{ opacity: 1, x: 0 }}>
					<Button className={styles.AddressButton}
							href="https://www.linkedin.com/in/jirikrajnak/">
						LinkedIn
					</Button>
				</motion.div>

				<motion.div initial={{ opacity: 0, x: -50 }} transition={{ delay: 0.8 }} animate={{ opacity: 1, x: 15 }}>
					<Button className={styles.AddressButton}
							href="https://github.com/ozrix84">
						Github
					</Button>
				</motion.div>
			</div>

			<motion.a
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.9 }}
				href="tel:+420608768984"
				className={styles.AddressPhone}>
				(+420) 608 768 984
			</motion.a>
			<motion.a
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.9 }}
				href="mailto:philipkdick1984@gmail.com"
				className={styles.AddressMail}>
				philipkdick1984@gmail.com
			</motion.a>
		</address>
	</>
}