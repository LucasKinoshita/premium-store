import useCart from 'hooks/useCart'
import { Badge, Wrapper } from './styles'

const ShoppingCartIcon = () => {
  const { items } = useCart()

  return (
    <Wrapper>
      <div>
        <img src="/assets/cart.svg" alt="shopping cart icon" />
      </div>
      {Boolean(items?.length) && (
        <Badge aria-label="Cart items">{items?.length}</Badge>
      )}
    </Wrapper>
  )
}

export default ShoppingCartIcon
