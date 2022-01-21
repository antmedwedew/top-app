import React, { useReducer } from "react";
import { Advantages, HhDataBlock, Htag, Product, Sort, Tag } from "../../components";
import { SortEnum } from "../../components";
import { sortReducer } from "../../components/Sort/sort.reducer";
import { ProductModel } from "../../interfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/topPage.interface";

import styles from "./TopPageComponent.module.css";

interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { sort: SortEnum.Rating, products });

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="grey" size="m">{products.length}</Tag>}
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </div>

      <div>
        {sortedProducts && sortedProducts.map(product => (<Product key={product._id} product={product} />))}
      </div>

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