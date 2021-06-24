import React from "react";
import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Заголовок 1 уровня</Htag>
      <Button appearance="ghost" arrow="right">кнопка</Button>
      <Button appearance="primary" arrow="down">кнопка</Button>
    </>
  );
}
