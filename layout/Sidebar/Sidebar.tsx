import { HTMLAttributes } from "react";
import styles from "./Sidebar.module.css";
import classNames from "classnames";
import { Menu, Search } from "../../components";

import { Logo } from "../../public/logo";
import Link from "next/link";

export const Sidebar = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classNames(className, styles.sidebar)} {...props}>
      <Link href={"/"} passHref>
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <Search />
      <Menu />
    </div>
  );
};
