import Header from '../../components/Header'
import CartItem from '../../components/CartItem'
import Order from '../../components/Order'
import { ProductTemplateProps } from '../Product'
import { Container } from '../../templates/Home/styles'
import { Wrapper } from './styles'

export type CartTemplateProps = {
  products: ProductTemplateProps[]
}

const CartTemplate = ({ products }: CartTemplateProps) => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <div>
          {products.map((product, index) => (
            <CartItem key={`product-${index}`} {...product} />
          ))}
        </div>

        <Order total="160.00" subtotal="160.00" onClick={() => ''} />
      </Wrapper>
    </Container>
  )
}

export default CartTemplate
