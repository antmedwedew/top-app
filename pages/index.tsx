import { GetStaticProps } from "next";
import React from "react";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { Input, Textarea } from "../components";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Home({ menu }: HomeProps): JSX.Element {

  return (
    <>
      <Input placeholder="Имя" />
      <Textarea placeholder="Введите текст" />
    </>
  );
}

export default withLayout(Home);

// get menu
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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


