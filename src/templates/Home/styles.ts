import styled from 'styled-components'

export const ProductsWrapper = styled.section`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 130rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
