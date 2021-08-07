import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import { withLayout } from "../../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../../interfaces/menu.interface";
import { TopPageModel } from "../../interfaces/topPage.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { ParsedUrlQuery } from "querystring";

const firstCategory = 0;

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return (
    <>
      {products && products.length}
    </>
  );
}

export default withLayout(Course);

// generate paths
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    paths: menu.flatMap(menu => menu.pages.map(page => '/courses/' + page.alias)),
    fallback: true
  };
};

// get menu, page alias, products
export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  // get menu
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  // get alias page
  const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);

  // get products
  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: page.category,
    limit: 10
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products
    }
  };
};


