import { useNavigate } from "react-router-dom";
import {
  StyledDirectoryContainer,
  StyledBackgroundImage,
  StyledDirectoryBody,
} from "./style.js";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <StyledDirectoryContainer onClick={onNavigateHandler}>
      <StyledBackgroundImage imageUrl={imageUrl} />
      <StyledDirectoryBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </StyledDirectoryBody>
    </StyledDirectoryContainer>
  );
};

export default DirectoryItem;
