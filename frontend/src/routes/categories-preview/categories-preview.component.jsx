import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, idx) => {
        const products = categoriesMap[title];

        return <CategoryPreview key={idx} title={title} products={products} />;
      })}
    </Fragment>
  );
};
