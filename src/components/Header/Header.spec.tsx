import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
  it('should render the Header', () => {
    render(<Header />)

    expect(screen.getByRole('img', { name: /go to home/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  })
})
