import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import ProductCard from "../../components/ProductCard";

import "./style.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesList } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesList[category]);

  useEffect(() => {
    setProducts(categoriesList[category]);
  }, [categoriesList, category]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </>
  );
};

export default Category;
