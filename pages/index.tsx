import { GetStaticProps } from "next";
import React, { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(1);

  return (
    <>
      <Htag tag="h1">Заголовок 1 уровня</Htag>
      <Button appearance="ghost" arrow="right">кнопка</Button>
      <Button appearance="primary" arrow="down">кнопка</Button>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempore?</P>
      <Tag size='s'>Мал</Tag>
      <Tag color="red" href="https://github.com/">red</Tag>
      <Tag color="green">green</Tag>
      <Tag color="ghost">ghost</Tag>
      <Tag color="grey">grey</Tag>
      <Tag color="primary" >primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
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


