import React, { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

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
