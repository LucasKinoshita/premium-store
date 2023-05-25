import { render } from '@testing-library/react'
import Container from './Container'

describe('<Container />', () => {
  it('should render the Container', () => {
    const { container } = render(
      <Container>
        <h5>title</h5>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('max-width', '320rem')
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin-left: auto;
        margin-right: auto;
        max-width: 320rem;
        padding-left: 5rem;
        padding-right: 5rem;
        width: 100%;
      }

      <div
        class="c0"
      >
        <h5>
          title
        </h5>
      </div>
    `)
  })
})
