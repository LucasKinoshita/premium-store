import { render, screen } from '@testing-library/react'
import Main from '.'

describe('Main', () => {
  it('should render heading', () => {
    const { container } = render(<Main title="title" />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
