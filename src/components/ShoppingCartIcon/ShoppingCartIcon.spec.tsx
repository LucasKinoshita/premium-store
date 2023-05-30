import { render, screen } from '@testing-library/react'
import { CartContext } from 'context/Cart'
import { productMock } from 'components/ProductCard/mock'
import ShoppingCartIcon from '.'

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
          items: [productMock],
          addToCart: jest.fn(),
          deleteItem: jest.fn(),
          updatedQuantity: jest.fn(),
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
