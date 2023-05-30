import { ChangeEvent } from 'react'
import useCart from '../../hooks/useCart'
import { ProductTemplateProps } from '../../templates/Product'
import { formatValueToCurrency } from '../../utils/currency'
import { Trash as TrashIcon } from '@styled-icons/ionicons-outline'
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

type CardItemProps = ProductTemplateProps & {
  quantity: number
}

const CartItem = ({
  id,
  name,
  price,
  description,
  imageUrl,
  quantity
}: CardItemProps) => {
  const { deleteItem, updatedQuantity } = useCart()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    if (value >= 1) updatedQuantity(id, value)
  }

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
          <CartItemQuantity
            type="number"
            value={quantity}
            onChange={handleChange}
          />
          <CartItemPrice>{formatValueToCurrency(price)}</CartItemPrice>
        </CartItemFooter>
      </CartItemContent>
    </CartItemWrapper>
  )
}

export default CartItem
