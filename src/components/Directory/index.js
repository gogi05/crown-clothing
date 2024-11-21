import { Categories } from "./constants";
import Category from "../DirectoryItem";
import { StyledCategoriesContainer } from "./style.js";

const Directory = () => {
  return (
    <StyledCategoriesContainer>
      {Categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </StyledCategoriesContainer>
  );
};

export default Directory;
