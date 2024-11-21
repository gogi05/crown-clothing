import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const CategoryPreview = ({ title, categoryList }) => {
  return (
    <>
      <Link className="title" to={title}>
        <h2>{title.toUpperCase()}</h2>
      </Link>
      <div className="category-preview-container">
        <div className="preview">
          {categoryList
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;
