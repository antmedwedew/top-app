import React, { useContext, useEffect } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import { firstLevelMenu } from "../../layout/Menu/firstLevelMenu";
import { ParsedUrlQuery } from "querystring";
import axios from "axios";
import { API } from "../../helpers/api";
import { AppContext } from "../../context/app.context";

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Type({ menu, firstCategory }: TypeProps) {
  const { setMenu } = useContext(AppContext);

  useEffect(() => {
    setMenu && setMenu(menu);
  }, [menu]);

  const activeItemMenu = firstLevelMenu.find(
    (item, i) => item && i === firstCategory
  );

  return (
    <>
      <h1 className="h1">{activeItemMenu?.name}</h1>
    </>
  );
}

export default withLayout(Type);

// get paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((menu) => "/" + menu.route),
    fallback: true,
  };
};

// get menu
export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find(
    (menu) => menu.route === params.type
  );

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory: firstCategoryItem.id,
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
