import { render, screen } from '@testing-library/react'
import { productMock } from 'components/ProductCard/mock'
import HomeTemplate from '.'

jest.mock('components/ProductCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ProductCard" />
  }
}))

describe('<HomeTemplate />', () => {
  it('should render the HomeTemplate with components', () => {
    render(<HomeTemplate products={[productMock]} />)

    expect(screen.getAllByTestId('Mock ProductCard')).toHaveLength(1)
  })
})
