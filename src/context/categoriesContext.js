import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shopData";
import { getCategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  products: [],
});

export const CategoriesContextProvider = ({ children }) => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategoriesList(categories);
    };
    getCategoriesMap();
  }, []);

  const productValue = { categoriesList, setCategoriesList };

  return (
    <CategoriesContext.Provider value={productValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
