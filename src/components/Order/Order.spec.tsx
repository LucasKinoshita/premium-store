import { render, screen } from '@testing-library/react'
import Order from '.'

describe('<Order />', () => {
  it('should render the Order', () => {
    render(<Order total="160.00" subtotal="160.00" onClick={jest.fn} />)

    expect(
      screen.getByRole('heading', { name: /resumo do pedido/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/subtotal:/i)).toBeInTheDocument()
    expect(screen.getAllByText(/R\$ 160.00/i)).toHaveLength(2)

    expect(screen.getByText(/desconto:/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 0.00/i)).toBeInTheDocument()

    expect(screen.getByText(/total:/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/checkout/i)).toBeInTheDocument()
  })
})
