import React, { useContext, KeyboardEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from './firstLevelMenu';
import { motion } from 'framer-motion';

import styles from './Menu.module.css';
import classNames from "classnames";


export const Menu: React.FC = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 5,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },

    hidden: {
      marginBottom: 0
    }
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 'auto'
    },

    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const openSecondLavel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };

  const openSecondLavelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      openSecondLavel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.id}>
            <Link href={`/${m.route}`}>
              <a>
                <div className={classNames(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(item => {
          if (item.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            item.isOpened = true;
          }

          return (
            <div key={item._id.secondCategory}>
              <div tabIndex={0}
                className={styles.secondLevel}
                onClick={() => openSecondLavel(item._id.secondCategory)}
                onKeyDown={(key: KeyboardEvent) => openSecondLavelKey(key, item._id.secondCategory)}
              >
                {item._id.secondCategory}
              </div>
              <motion.div
                className={styles.secondLeveelBlock}
                layout
                variants={variants}
                initial={item.isOpened ? 'visible' : 'hidden'}
                animate={item.isOpened ? 'visible' : 'hidden'}
              >
                {buildThirdLevel(item.pages, menuItem.route, item.isOpened ?? false)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(p => (
        <motion.div
          key={p._id}
          variants={variantsChildren}
        >
          <Link href={`/${route}/${p.alias}`}>
            <a tabIndex={isOpened ? 0 : -1} className={classNames(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
            })}>
              {p.category}
            </a>
          </Link>
        </motion.div>
      ))
    );
  };

  return (
    <nav className={styles.menu} role="navigation">
      {buildFirstLevel()}
    </nav>
  );
};