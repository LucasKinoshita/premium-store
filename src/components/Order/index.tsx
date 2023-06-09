import { formatValueToCurrency } from 'utils/currency'
import {
  CheckoutWrapper,
  GoToHomeButton,
  OrderDescount,
  OrderDivider,
  OrderSubtotal,
  OrderTitle,
  OrderTotal,
  OrderWrapper
} from './styles'
import useCart from 'hooks/useCart'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from 'components/Button'

export type OrderProps = {
  subtotal: number
  descount?: number
  total: number
}

const Order = ({ subtotal, descount = 0, total }: OrderProps) => {
  const { clearCart } = useCart()
  const router = useRouter()
  const [isCheckout, setIsCheckout] = useState(false)

  const handleCheckout = () => {
    if (total === 0) return

    setIsCheckout(true)
    clearCart()
  }

  const goToHome = () => {
    router.push('/')
  }

  return (
    <OrderWrapper>
      {isCheckout && (
        <CheckoutWrapper>
          <h3>Purchase made successfully!</h3>
          <p>Thank you for shopping in our store.</p>

          <GoToHomeButton onClick={goToHome}>Go to home</GoToHomeButton>
        </CheckoutWrapper>
      )}

      <OrderTitle>Order</OrderTitle>
      <OrderSubtotal>
        Subtotal: <span>{formatValueToCurrency(subtotal)}</span>
      </OrderSubtotal>

      <OrderDescount>
        Discount: <span>{formatValueToCurrency(descount)}</span>
      </OrderDescount>

      <OrderDivider />

      <OrderTotal>
        Total <span>{formatValueToCurrency(total)}</span>
      </OrderTotal>

      <Button onClick={handleCheckout} aria-label="checkout">
        Checkout
      </Button>
    </OrderWrapper>
  )
}

export default Order
