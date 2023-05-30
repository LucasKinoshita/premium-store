import { render, screen } from '@testing-library/react'
import { productMock } from 'components/ProductCard/mock'
import ProductCard from '.'

describe('<ProductCard />', () => {
  it('should render information of ProductCard', () => {
    render(<ProductCard {...productMock} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(/R\$ 250.50/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /name of product/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument()
  })
})
