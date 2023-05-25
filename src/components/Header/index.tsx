import Link from 'next/link'
import ShoppingCartIcon from '../ShoppingCartIcon'
import { Wrapper } from './styles'

const Header = () => {
  return (
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
  )
}

export default Header
