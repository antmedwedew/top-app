import React from "react";
import { Advantages, HhDataBlock, Htag, Tag, } from "../../components";
import { ProductModel } from "../../interfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/topPage.interface";

import styles from "./TopPageComponent.module.css";

interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="grey" size="m">{products.length}</Tag>}
        <span>Сортировка</span>
      </div>

      {/* <div>
        {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
      </div> */}

      {firstCategory === TopLevelCategory.Courses && page.hh && <>
        <div className={styles.hhTitle}>
          <Htag tag="h2">Вакансии - {page.category}</Htag>
          {products && <Tag color="red" size="m">hh.ru</Tag>}
        </div> <HhDataBlock {...page.hh} />
      </>}

      {page.advantages && page.advantages.length > 0 && page.advantages[0].title !== '' && <>
        <Htag tag="h2">Преимущества</Htag>
        <Advantages advantages={page.advantages} />
      </>}

      {page.seoText && <div className={styles.seoText} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

      {page.tags && <>
        <Htag tag="h2">Получаемые навыки</Htag>
        {page.tags.map(tag => (
          <Tag key={tag} color="primary" mrgnBottom={true}>{tag}</Tag>
        ))}
      </>}
    </div >
  );
};