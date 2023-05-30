import Link from 'next/link'
import useCart from 'hooks/useCart'
import { Cart as CartIcon } from '@styled-icons/ionicons-outline'
import { Badge, Wrapper } from './styles'

const ShoppingCartIcon = () => {
  const { items } = useCart()

  return (
    <Wrapper>
      <Link href="/cart">
        <CartIcon aria-label="Shopping cart" />
        {Boolean(items?.length) && (
          <Badge aria-label="Cart items">{items?.length}</Badge>
        )}
      </Link>
    </Wrapper>
  )
}

export default ShoppingCartIcon
