import styled from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;

  @media screen and (max-width: 720px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export default Container
