import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <ul className={styles.menu}>
      {menu.map(item => (<li key={item._id.secondCategory}>{item._id.secondCategory}</li>))}
    </ul>
  );
};