import { Routes, Route } from "react-router-dom";
import CategoriesPage from "../../components/CategoriesPage";
import Category from "../Category";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPage />} />
      <Route path={":category"} element={<Category />} />
    </Routes>
  );
};

export default Shop;
