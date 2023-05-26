import { render, screen } from '@testing-library/react'
import { productsMock } from '../../components/ProductCard/mock'
import CartTemplate from '.'

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
    render(<CartTemplate products={productsMock} />)

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock CartItem')).toHaveLength(8)
    expect(screen.getByTestId('Mock Order')).toBeInTheDocument()
  })
})
