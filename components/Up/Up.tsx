import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';

import styles from './Up.module.css';
import { ArrowTopIcon } from '../../public/icons/ArrowTopIcon';
import { useEffect } from 'react';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className={styles.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ArrowTopIcon />
    </motion.button >
  );
};