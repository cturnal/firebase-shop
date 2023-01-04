import {
  CheckOutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckOutItem } from '../../components/checkout-item/checkout-item.component';

export const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const { totalCounter } = useContext(CartContext);

  return (
    <CheckOutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItem={item} />
      ))}

      <Total>Total: ${totalCounter}</Total>
    </CheckOutContainer>
  );
};
