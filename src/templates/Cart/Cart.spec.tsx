import { render, screen } from '@testing-library/react'
import { CartContext } from 'context/Cart'
import { productsMock } from 'components/ProductCard/mock'
import CartTemplate from '.'

jest.mock('components/Header', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Header" />
  }
}))

jest.mock('components/CartItem', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock CartItem" />
  }
}))

jest.mock('components/Order', () => ({
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
          items: [
            { ...productsMock[0], quantity: 1 },
            { ...productsMock[1], quantity: 1 }
          ],
          addToCart: jest.fn(),
          deleteItem: jest.fn(),
          updatedQuantity: jest.fn(),
          clearCart: jest.fn(),
          order: { subtotal: 15, total: 15 }
        }}
      >
        <CartTemplate />
      </CartContext.Provider>
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock CartItem')).toHaveLength(2)
    expect(screen.getByTestId('Mock Order')).toBeInTheDocument()
  })

  it('should render the component no products', () => {
    render(
      <CartContext.Provider
        value={{
          items: [],
          addToCart: jest.fn(),
          deleteItem: jest.fn(),
          updatedQuantity: jest.fn(),
          clearCart: jest.fn(),
          order: { subtotal: 0, total: 0 }
        }}
      >
        <CartTemplate />
      </CartContext.Provider>
    )

    expect(
      screen.getByText(/você não tem produtos ainda./i)
    ).toBeInTheDocument()
    expect(screen.queryByTestId('Mock CartItem')).not.toBeInTheDocument()
  })
})
