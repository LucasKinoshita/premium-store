import { render, screen } from '@testing-library/react'
import ShoppingCartIcon from '.'
import { CartContext } from '../../hooks/useCart'
import { productMock } from '../ProductCard/mock'

describe('<ShoppingCartIcon />', () => {
  it('should render ShoppingCartIcon without badge', () => {
    render(<ShoppingCartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render ShoppingCartIcon with badge', () => {
    render(
      <CartContext.Provider
        value={{
          items: [{ ...productMock }],
          addToCart: jest.fn(),
          deleteItem: jest.fn(),
          order: { subtotal: 15, total: 15 }
        }}
      >
        <ShoppingCartIcon />
      </CartContext.Provider>
    )

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
  })
})
