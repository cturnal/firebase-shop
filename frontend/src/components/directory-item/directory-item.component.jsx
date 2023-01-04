import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

export const DirectoryItem = ({ imageUrl, title, route }) => {
  const navigate = useNavigate();

  const goToShopHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={goToShopHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
