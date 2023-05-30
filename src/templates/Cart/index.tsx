import useCart from 'hooks/useCart'
import Header from 'components/Header'
import CartItem from 'components/CartItem'
import Order from 'components/Order'
import { Container } from 'templates/Home/styles'
import {
  BackToHomeButton,
  NoProductsMessage,
  NoProductsWrapper,
  Wrapper
} from './styles'

const CartTemplate = () => {
  const { items, order } = useCart()

  return (
    <Container>
      <Header />
      <Wrapper>
        <div>
          {items.length ? (
            items.map((product, index) => (
              <CartItem key={`product-${index}`} {...product} />
            ))
          ) : (
            <NoProductsWrapper>
              <NoProductsMessage>does not have products.</NoProductsMessage>
              <BackToHomeButton href="/" aria-label="go to products">
                Go to products
              </BackToHomeButton>
            </NoProductsWrapper>
          )}
        </div>

        <Order
          total={order.total}
          subtotal={order.subtotal}
          descount={order.descount}
          onClick={() => ''}
        />
      </Wrapper>
    </Container>
  )
}

export default CartTemplate
