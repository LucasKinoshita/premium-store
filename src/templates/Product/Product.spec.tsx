import { render, screen } from '@testing-library/react'
import ProductTemplate from '.'
import { productMock } from '../../components/ProductCard/mock'

jest.mock('../../components/Header', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Header" />
  }
}))

describe('<ProductTemplate />', () => {
  it('should render the ProductTemplate', () => {
    render(<ProductTemplate {...productMock} />)

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
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
    expect(screen.getByLabelText(/add product to cart/i)).toBeInTheDocument()
  })
})
