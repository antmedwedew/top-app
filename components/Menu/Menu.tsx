import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/firstLevelMenu';

import styles from './Menu.module.css';
import classNames from "classnames";


export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLavel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      if (m._id.secondCategory === secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
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
              <div className={styles.secondLevel} onClick={() => openSecondLavel(item._id.secondCategory)}>{item._id.secondCategory}</div>
              <div className={classNames(styles.secondLeveelBlock, {
                [styles.secondLeveelBlockOpened]: item.isOpened
              })}>
                {buildThirdLevel(item.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <Link href={`/${route}/${p.alias}`} key={p._id}>
          <a className={classNames(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
          })}>
            {p.category}
          </a>
        </Link>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};