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
import { useCart } from '../../hooks/useCart'
import { formatValueToCurrency } from '../../utils/currency'

const CartItem = ({
  id,
  name,
  price,
  description,
  imageUrl
}: ProductTemplateProps) => {
  const { deleteItem } = useCart()

  return (
    <CartItemWrapper>
      <img src={imageUrl} alt={name} />
      <CartItemContent>
        <CartItemTitleWrapper>
          <h2>{name}</h2>

          <CartItemDeleteButton
            type="button"
            aria-label="delete cart item"
            onClick={() => deleteItem(id)}
          >
            <TrashIcon />
          </CartItemDeleteButton>
        </CartItemTitleWrapper>

        <CartItemDescription>{description}</CartItemDescription>

        <CartItemFooter>
          <CartItemQuantity type="number" value="1" onChange={() => ''} />
          <CartItemPrice>{formatValueToCurrency(price)}</CartItemPrice>
        </CartItemFooter>
      </CartItemContent>
    </CartItemWrapper>
  )
}

export default CartItem
