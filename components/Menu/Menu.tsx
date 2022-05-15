import React, { useContext, KeyboardEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from './firstLevelMenu';
import { motion, useReducedMotion } from 'framer-motion';

import styles from './Menu.module.css';
import classNames from "classnames";

export const Menu: React.FC = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      marginBottom: 5,
      transition: shouldReduceMotion ? {} : {
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

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(item => {
      if (item._id.secondCategory === secondCategory) {
        setAnnounce(item.isOpened ? 'closed' : 'opened');
        item.isOpened = !item.isOpened;
      }
      return item;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firsLevelListMenu}>
        {firstLevelMenu.map(item => (
          <li key={item.id}>
            <Link href={`/${item.route}`}>
              <a aria-expanded={item.id == firstCategory}>
                <div className={classNames(styles.firstLevel, {
                  [styles.firstLevelActive]: item.id == firstCategory
                })}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </a>
            </Link>
            {item.id === firstCategory && buildSecondLevel(item)}
          </li>
        ))}
      </ul >
    );
  };

  const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map(item => {
          if (item.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            item.isOpened = true;
          }

          return (
            <li key={item._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onClick={() => openSecondLevel(item._id.secondCategory)}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, item._id.secondCategory)}
                aria-expanded={item.isOpened}
              >
                {item._id.secondCategory}
              </button>
              <motion.ul
                className={styles.secondLeveelBlock}
                layout
                variants={variants}
                initial={item.isOpened ? 'visible' : 'hidden'}
                animate={item.isOpened ? 'visible' : 'hidden'}
              >
                {buildThirdLevel(item.pages, menuItem.route, item.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        })
        }
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return (
      pages.map(page => (
        <motion.li
          key={page._id}
          variants={variantsChildren}
        >
          <Link href={`/${route}/${page.alias}`}>
            <a tabIndex={isOpened ? 0 : -1} className={classNames(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
            })}
              aria-current={`/${route}/${page.alias}` === router.asPath ? 'page' : false}
            >
              {page.category}
            </a>
          </Link>
        </motion.li>
      ))
    );
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && <span className="visualyHidden" role='log'>
        {announce == 'opened' ? 'развернуто' : 'свернуто'}
      </span>}
      {buildFirstLevel()}
    </nav>
  );
};