import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import CategoryPreview from "../../components/CategoryPreview";
import "./style.scss";

const CategoriesPage = () => {
  const { categoriesList } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {Object.keys(categoriesList).map((title) => (
        <CategoryPreview title={title} categoryList={categoriesList[title]} />
      ))}
    </div>
  );
};

export default CategoriesPage;
