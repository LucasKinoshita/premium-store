import { render, screen } from '@testing-library/react'
import { productMock } from 'components/ProductCard/mock'
import ProductTemplate from '.'

describe('<ProductTemplate />', () => {
  it('should render the ProductTemplate', () => {
    render(<ProductTemplate {...productMock} />)

    expect(screen.getByLabelText(/back to home/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /name of product/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/R\$ 250,50/i, { collapseWhitespace: true })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /descricao/i })
    ).toBeInTheDocument()

    expect(screen.getByText('description text'))
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
  })
})
