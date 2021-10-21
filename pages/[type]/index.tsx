import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interface";
import { firstLevelMenu } from "../../helpers/firstLevelMenu";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import axios from 'axios';

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Type({ firstCategory }: TypeProps): JSX.Element {

  return (
    <>
      <h1>Type {firstCategory}</h1>
    </>
  );
}

export default withLayout(Type);

// get paths
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(menu => '/' + menu.route),
    fallback: true
  };
};

// get menu
export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find(menu => menu.route === params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory: firstCategoryItem.id
  });

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id
    }
  };
};