import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Order from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('<Order />', () => {
  it('should render the Order', () => {
    render(<Order total={160} subtotal={160} />)

    expect(screen.getByRole('heading', { name: /order/i })).toBeInTheDocument()

    expect(screen.getByText(/subtotal:/i)).toBeInTheDocument()
    expect(
      screen.getAllByText(/R\$ 160,00/i, { collapseWhitespace: true })
    ).toHaveLength(2)

    expect(screen.getByText(/discount:/i)).toBeInTheDocument()
    expect(
      screen.getByText(/R\$ 0,00/i, { collapseWhitespace: true })
    ).toBeInTheDocument()

    expect(screen.getByText(/total:/i)).toBeInTheDocument()

    expect(screen.getByText(/checkout/i)).toBeInTheDocument()
  })

  it('should render checkout sucess when click in button checkout', async () => {
    render(<Order total={160} subtotal={160} />)

    expect(
      screen.queryByRole('heading', {
        name: /purchase made successfully!/i
      })
    ).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/checkout/i))

    expect(
      await screen.findByRole('heading', {
        name: /purchase made successfully!/i
      })
    ).toBeInTheDocument()
  })
})
