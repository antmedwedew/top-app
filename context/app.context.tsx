import React, { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/topPage.interface";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider: React.FC<IAppContext> = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
