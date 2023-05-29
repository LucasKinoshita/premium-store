import { render, screen } from '@testing-library/react'
import { productsMock } from '../../components/ProductCard/mock'
import CartTemplate from '.'
import { CartContext } from '../../hooks/useCart'

jest.mock('../../components/Header', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Header" />
  }
}))

jest.mock('../../components/CartItem', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock CartItem" />
  }
}))

jest.mock('../../components/Order', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Order" />
  }
}))

describe('<CartTemplate />', () => {
  it('should render the CartTemplate', () => {
    render(
      <CartContext.Provider
        value={{
          items: [...productsMock],
          addToCart: jest.fn(),
          deleteItem: jest.fn(),
          order: { subtotal: 15, total: 15 }
        }}
      >
        <CartTemplate />
      </CartContext.Provider>
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock CartItem')).toHaveLength(8)
    expect(screen.getByTestId('Mock Order')).toBeInTheDocument()
  })
})
