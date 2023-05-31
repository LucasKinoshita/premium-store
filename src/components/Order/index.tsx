import { formatValueToCurrency } from 'utils/currency'
import {
  CheckoutWrapper,
  GoToHomeButton,
  OrderButton,
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
          <h3>Compra feita com sucesso!</h3>
          <p>Obrigado por comprar em nossa loja.</p>

          <GoToHomeButton onClick={goToHome}>Ir para home</GoToHomeButton>
        </CheckoutWrapper>
      )}

      <OrderTitle>Resumo do pedido</OrderTitle>
      <OrderSubtotal>
        Subtotal: <span>{formatValueToCurrency(subtotal)}</span>
      </OrderSubtotal>

      <OrderDescount>
        Desconto: <span>{formatValueToCurrency(descount)}</span>
      </OrderDescount>

      <OrderDivider />

      <OrderTotal>
        Total <span>{formatValueToCurrency(total)}</span>
      </OrderTotal>

      <OrderButton type="button" onClick={handleCheckout} aria-label="checkout">
        Finalizar a compra
      </OrderButton>
    </OrderWrapper>
  )
}

export default Order
