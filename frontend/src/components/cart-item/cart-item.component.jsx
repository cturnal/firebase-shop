import { CartItemContainer, ItemDetails } from './cart-item.styles.jsx';

export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price * quantity}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
