import CartTemplate from '../templates/Cart'
import { productsMock } from '../components/ProductCard/mock'

const Cart = () => {
  return <CartTemplate products={productsMock} />
}

export default Cart
