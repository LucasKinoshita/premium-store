import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1rem;
  }
`

export const NoProductsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const NoProductsMessage = styled.p`
  font-size: 1.6rem;
`

export const BackToHomeButton = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
  color: #1d1d1d;
`
