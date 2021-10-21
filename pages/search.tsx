import { GetStaticProps } from "next";
import React from "react";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Search(): JSX.Element {

  return (
    <>
      <h1>Search</h1>
    </>
  );
}

export default withLayout(Search);

// get menu
export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};