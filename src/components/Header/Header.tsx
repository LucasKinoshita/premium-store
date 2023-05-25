import Link from 'next/link'
import { Container } from '../Container'
import { ShoppingCartIcon } from '../ShoppingCartIcon'
import { Wrapper } from './styles'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <img
            src="assets/logo.svg"
            alt="Premium store logo"
            aria-label="go to home"
          />
        </Link>
        <ShoppingCartIcon />
      </Wrapper>
    </Container>
  )
}

export default Header
