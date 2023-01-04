import {
  Arrow,
  CheckOutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  RemoveButton,
  Value,
} from './checkout-item.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

export const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addOneToCart, removeOneToCart, deleteItemToCart } =
    useContext(CartContext);

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow
          onClick={() => {
            removeOneToCart(cartItem);
          }}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow
          onClick={() => {
            addOneToCart(cartItem);
          }}
        >
          &#10095;
        </Arrow>
      </Quantity>
      <Value>${price * quantity}</Value>
      <RemoveButton
        onClick={() => {
          deleteItemToCart(cartItem);
        }}
      >
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};
