import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
  it('should render the Header', () => {
    render(<Header />)

    expect(screen.getByAltText(/premium store/i)).toBeInTheDocument()
    expect(screen.getByText(/cart/i)).toBeInTheDocument()
  })
})
