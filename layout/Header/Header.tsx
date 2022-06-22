import React, { HTMLAttributes, useEffect, useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import { Logo } from "../../public/logo";
import Link from "next/link";
import { ButtonIcon } from "../../components";
import { motion } from "framer-motion";
import { Sidebar } from "../Sidebar/Sidebar";
import { useRouter } from "next/router";

export const Header: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  useEffect(() => {
    isOpened
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [isOpened]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },

    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <header className={classNames(className, styles.header)} {...props}>
      <Link href={"/"} passHref>
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <ButtonIcon
        appearance="white"
        icon="BurgerIcon"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="CloseIcon"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
