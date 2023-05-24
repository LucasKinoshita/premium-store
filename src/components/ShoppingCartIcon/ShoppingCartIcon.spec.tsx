import { render, screen } from '@testing-library/react'
import ShoppingCartIcon from './ShoppingCartIcon'

describe('<ShoppingCartIcon />', () => {
  it('should render ShoppingCartIcon without badge', () => {
    render(<ShoppingCartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render ShoppingCartIcon with badge', () => {
    render(<ShoppingCartIcon quantity={1} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
  })
})
