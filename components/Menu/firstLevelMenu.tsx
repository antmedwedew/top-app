import { TopLevelCategory } from '../../interfaces/topPage.interface';
import { firstLevelMenuItem } from '../../interfaces/menu.interface';

import { CapIcon } from '../../public/icons/CapIcon';
import { CloudIcon } from '../../public/icons/CloudIcon';
// import { BookIcon } from '../../public/icons/BookIcon';
// import { BoxIcon } from '../../public/icons/BoxIcon';


export const firstLevelMenu: firstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CapIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <CloudIcon />, id: TopLevelCategory.Services },
  // { route: 'books', name: 'Книги', icon: <BookIcon />, id: TopLevelCategory.Books },
  // { route: 'products', name: 'Товары', icon: <BoxIcon />, id: TopLevelCategory.Products },
];