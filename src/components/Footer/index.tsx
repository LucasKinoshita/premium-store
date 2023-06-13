import styled from 'styled-components'

export const Wrapper = styled.footer`
  background: var(--black);
  color: #fff;

  span {
    color: var(--gray-medium);
    display: block;
    font-family: var(--font-text);
    font-size: 1.6rem;
    padding: 3rem 0;
  }
`

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 130rem;
  padding: 0 2rem;
  width: 100%;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <span>Premium Store © some rights reserved</span>
      </Container>
    </Wrapper>
  )
}

export default Footer
