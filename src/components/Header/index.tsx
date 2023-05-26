import Link from 'next/link'
import ShoppingCartIcon from '../ShoppingCartIcon'
import { Wrapper } from './styles'

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <h1>Premium Store.</h1>
      </Link>
      <ShoppingCartIcon />
    </Wrapper>
  )
}

export default Header
