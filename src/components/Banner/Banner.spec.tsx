import { render, screen } from '@testing-library/react'
import Banner from '.'

describe('<Banner />', () => {
  it('should render the Banner', () => {
    render(<Banner />)

    expect(
      screen.getByRole('heading', { name: /amazing products/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /our store has the great products for games, photography, equipment and stationery materials./i
      )
    ).toBeInTheDocument()
  })
})
