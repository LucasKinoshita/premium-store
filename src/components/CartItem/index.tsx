import { Trash as TrashIcon } from '@styled-icons/ionicons-outline'
import { ProductTemplateProps } from '../../templates/Product'
import {
  CartItemContent,
  CartItemDescription,
  CartItemFooter,
  CartItemDeleteButton,
  CartItemPrice,
  CartItemQuantity,
  CartItemTitleWrapper,
  CartItemWrapper
} from './styles'

const CartItem = ({
  name,
  price,
  description,
  imageUrl
}: ProductTemplateProps) => {
  return (
    <CartItemWrapper>
      <img src={imageUrl} alt={name} />
      <CartItemContent>
        <CartItemTitleWrapper>
          <h2>{name}</h2>

          <CartItemDeleteButton type="button" aria-label="delete cart item">
            <TrashIcon />
          </CartItemDeleteButton>
        </CartItemTitleWrapper>

        <CartItemDescription>{description}</CartItemDescription>

        <CartItemFooter>
          <CartItemQuantity type="number" value="1" onChange={() => ''} />
          <CartItemPrice>R$ {price}</CartItemPrice>
        </CartItemFooter>
      </CartItemContent>
    </CartItemWrapper>
  )
}

export default CartItem
