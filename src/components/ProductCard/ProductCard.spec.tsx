import { render, screen } from '@testing-library/react'
import ProductCard from '.'
import { productMock } from './mock'

describe('<ProductCard />', () => {
  it('should render information of ProductCard', () => {
    render(<ProductCard {...productMock} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(/R\$ 250.50/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /name of product/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
