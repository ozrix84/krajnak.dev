import { useState } from 'react';
import styles from "@/styles/components/Address/Address.module.scss";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";

type AddressData = {
	className: string;
	value: string;
	href?: string;
};

const variants = {
	initial: { opacity: 0, y: 50 },
	initialInv: { opacity: 0, y: -50 },
	animate: i => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1 + 0.9
		}
	})
};

export default function Address() {
	const [ addressData, setAddressData ] = useState<AddressData[]>([
		{
			className: styles.AddressMail,
			value: 'moc.liamg@4891kcidkpilihp'
		},
		{
			className: styles.AddressPhone,
			value: '489 867 806 (024+)'
		},
		{
			className: styles.AddressResume,
			value: 'Resumé',
			href: '/docs/cv-krajnak.pdf'
		}
	]);

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
				<motion.div initial={{ opacity: 0, x: -65 }}
							transition={{ delay: 0.6 }}
							animate={{ opacity: 1, x: 0 }}>
					<Button className={styles.AddressButton}
							href="https://www.linkedin.com/in/jirikrajnak/">
						LinkedIn
					</Button>
				</motion.div>

				<motion.div initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 15 }}
							transition={{ delay: 0.8 }}>
					<Button className={styles.AddressButton}
							href="https://github.com/ozrix84">
						Github
					</Button>
				</motion.div>
			</div>

			{addressData.map((item, index)=> {
				const props = {
					key: index,
					custom: index,
					variants: variants,
					initial: index === 0 ? 'initialInv' : 'initial',
					animate: 'animate',
					className: item.className
				};

				return item.href ? (
					<motion.a {...props} href={item.href}>
						{item.value}
					</motion.a>
				): (
					<motion.span {...props}>
						{item.value}
					</motion.span>
				);
			})}
		</address>
	</>
}