import { useReducedMotion } from "framer-motion";
import React, { useEffect, useReducer } from "react";
import { Advantages, HhDataBlock, Product, Sort, Tag } from "../../components";
import { SortEnum } from "../../components";
import { sortReducer } from "../../components/Sort/sort.reducer";
import { ProductModel } from "../../interfaces/product.interface";
import {
  TopLevelCategory,
  TopPageModel,
} from "../../interfaces/topPage.interface";

import styles from "./TopPageComponent.module.css";
import classNames from "classnames";

interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export const TopPageComponent: React.FC<TopPageComponentProps> = ({
  page,
  products,
  firstCategory,
}) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    { sort: SortEnum.Rating, products }
  );
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({
      type: "reset",
      initialState: products,
    });
  }, [products]);

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1 className={classNames(page.title + " h1")}>{page.title}</h1>
        {products && (
          <Tag color="grey" size="m" aria-label={products.length + "элементов"}>
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div role="list">
        {sortedProducts &&
          sortedProducts.map((product) => (
            <Product
              role="listitem"
              layout={!shouldReduceMotion}
              key={product._id}
              product={product}
            />
          ))}
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <>
          <div className={styles.hhTitle}>
            <h2 className="h2">Вакансии - {page.category}</h2>
            {products && (
              <Tag color="red" size="m">
                hh.ru
              </Tag>
            )}
          </div>{" "}
          <HhDataBlock {...page.hh} />
        </>
      )}

      {page.advantages &&
        page.advantages.length > 0 &&
        page.advantages[0].title !== "" && (
          <>
            <h2 className="h2">Преимущества</h2>
            <Advantages advantages={page.advantages} />
          </>
        )}

      {page.seoText && (
        <div
          className={styles.seoText}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      {page.tags && (
        <>
          <h2 className="h2">Получаемые навыки</h2>
          {page.tags.map((tag) => (
            <Tag key={tag} color="primary" mrgnBottom={true}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    </div>
  );
};
