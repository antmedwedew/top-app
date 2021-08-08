import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { firstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/topPage.interface';

import styles from './Menu.module.css';
import classNames from "classnames";

import { CapIcon } from '../../public/icons/CapIcon';
import { CloudIcon } from '../../public/icons/CloudIcon';
import { BookIcon } from '../../public/icons/BookIcon';
import { BoxIcon } from '../../public/icons/BoxIcon';


const firstLevelMenu: firstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CapIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <BoxIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.id}>
            <a href={`/${m.route}`}>
              <div className={classNames(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == firstCategory
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(item => (
          <div key={item._id.secondCategory}>
            <div className={styles.secondLevel}>{item._id.secondCategory}</div>
            <div className={classNames(styles.secondLeveelBlock, {
              [styles.secondLeveelBlockOpened]: item.isOpened
            })}>
              {buildThirdLevel(item.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <a href={`/${route}/${p.alias}`} key={p._id} className={classNames(styles.thirdLevel, {
          [styles.thirdLevelActive]: false
        })}>
          {p.category}
        </a>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};