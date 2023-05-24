import { Cart as CartIcon } from '@styled-icons/ionicons-outline/Cart'
import { Badge, Wrapper } from './styles'

type ShoppingCartIconProps = {
  quantity?: number
}

const ShoppingCartIcon = ({ quantity = 0 }: ShoppingCartIconProps) => {
  return (
    <Wrapper>
      <CartIcon aria-label="Shopping cart" />
      {Boolean(quantity) && <Badge aria-label="Cart items">{quantity}</Badge>}
    </Wrapper>
  )
}

export default ShoppingCartIcon
