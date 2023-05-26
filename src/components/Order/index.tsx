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
  subtotal: string
  descount?: string
  total: string
  onClick: () => void
}

const Order = ({ subtotal, descount = '0.00', total, onClick }: OrderProps) => {
  return (
    <OrderWrapper>
      <OrderTitle>Resumo do pedido</OrderTitle>
      <OrderSubtotal>
        Subtotal: <span>R$ {subtotal}</span>
      </OrderSubtotal>

      <OrderDescount>
        Desconto: <span>R$ {descount}</span>
      </OrderDescount>

      <OrderDivider />

      <OrderTotal>
        Total <span>R$ {total}</span>
      </OrderTotal>

      <OrderButton type="button" onClick={onClick} aria-label="checkout">
        Finalizar a compra
      </OrderButton>
    </OrderWrapper>
  )
}

export default Order
