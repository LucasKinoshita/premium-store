import Link from 'next/link'
import ShoppingCartIcon from 'components/ShoppingCartIcon'
import { CartItem, Container, Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/">
          <div>
            <img src="/assets/logo.svg" alt="premium store" />
          </div>
        </Link>

        <CartItem href="/cart">
          <span>Cart</span>
          <ShoppingCartIcon />
        </CartItem>
      </Container>
    </Wrapper>
  )
}

export default Header
