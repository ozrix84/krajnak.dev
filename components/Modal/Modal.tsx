import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {AnimatePresence, motion} from "framer-motion";
import styles from '@/styles/components/Modal/Modal.module.scss';

interface ModalProps {
	onClose(): void;
}

export default function Modal(props: React.PropsWithChildren<ModalProps>) {
	const [modalRoot, setModalRoot] = useState<HTMLElement | null>();
	const [isVisible, setVisible] = React.useState(false);

	function close() {
		setVisible(false);
		props.onClose();
	}

	useEffect(()=>{
		setModalRoot(document.getElementById('modal-root'));
		if (props.children) setVisible(true);
	},[props.children]);

	const wrapper = <>
		<motion.div onClick={close}>
			<AnimatePresence>
				{isVisible && props.children && <div>
					<motion.div
						key={0}
						className={styles.Modal}
						initial={{ scale: 0.75, x: '-50%' }}
						animate={{ scale: 1, x: '-50%' }}
						exit={{ opacity: 0, x: '-50%', transition: {duration: 0.1} }}
					>
						<div className={styles.ModalWrapper}>
							{props.children}
						</div>
					</motion.div>

					<motion.div
						className={styles.ModalBackdrop}
						key={1}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.8 }}
						exit={{ opacity: 0, transition: { delay: 0.1 } }}
					/>
				</div>}

			</AnimatePresence>
		</motion.div>
	</>

	return modalRoot ? ReactDOM.createPortal(
		wrapper,
		modalRoot
	) : null;
}
