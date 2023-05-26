import { render, screen } from '@testing-library/react'
import { productMock } from '../ProductCard/mock'
import CartItem from '.'

describe('<CartItem />', () => {
  it('should render CartItem', () => {
    render(<CartItem {...productMock} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /name of product/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/delete cart item/i)).toBeInTheDocument()
    expect(screen.getByText('description text'))
    expect(screen.getByRole('spinbutton')).toHaveDisplayValue('1')
    expect(screen.getByText(/R\$ 250.50/i)).toBeInTheDocument()
  })
})
