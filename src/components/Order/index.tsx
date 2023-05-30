import { formatValueToCurrency } from 'utils/currency'
import {
  OrderButton,
  OrderDescount,
  OrderDivider,
  OrderSubtotal,
  OrderTitle,
  OrderTotal,
  OrderWrapper
} from './styles'

export type OrderProps = {
  subtotal: number
  descount?: number
  total: number
  onClick: () => void
}

const Order = ({ subtotal, descount = 0, total, onClick }: OrderProps) => {
  return (
    <OrderWrapper>
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

      <OrderButton type="button" onClick={onClick} aria-label="checkout">
        Finalizar a compra
      </OrderButton>
    </OrderWrapper>
  )
}

export default Order
