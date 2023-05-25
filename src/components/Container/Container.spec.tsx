import { render } from '@testing-library/react'
import Container from './Container'

describe('<Container />', () => {
  it('should render the Container', () => {
    const { container } = render(
      <Container>
        <h5>title</h5>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('max-width', '100rem')
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin-left: auto;
        margin-right: auto;
        max-width: 100rem;
        padding-left: 5rem;
        padding-right: 5rem;
        width: 100%;
      }

      @media screen and (max-width:720px) {
        .c0 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
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
