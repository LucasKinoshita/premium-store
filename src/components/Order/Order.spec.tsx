import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Order from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('<Order />', () => {
  it('should render the Order', () => {
    render(<Order total={160} subtotal={160} />)

    expect(
      screen.getByRole('heading', { name: /resumo do pedido/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/subtotal:/i)).toBeInTheDocument()
    expect(
      screen.getAllByText(/R\$ 160,00/i, { collapseWhitespace: true })
    ).toHaveLength(2)

    expect(screen.getByText(/desconto:/i)).toBeInTheDocument()
    expect(
      screen.getByText(/R\$ 0,00/i, { collapseWhitespace: true })
    ).toBeInTheDocument()

    expect(screen.getByText(/total:/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/checkout/i)).toBeInTheDocument()
  })

  it('should render checkout sucess when click in button checkout', async () => {
    render(<Order total={160} subtotal={160} />)

    expect(
      screen.queryByRole('heading', {
        name: /compra feita com sucesso!/i
      })
    ).not.toBeInTheDocument()

    userEvent.click(screen.getByText(/finalizar a compra/i))

    expect(
      await screen.findByRole('heading', {
        name: /compra feita com sucesso!/i
      })
    ).toBeInTheDocument()
  })
})
