import Link from 'next/link'
import styled from 'styled-components'
import { Container } from 'templates/Home/styles'

export const Wrapper = styled(Container)`
  margin-top: 3rem;
`

export const BackButton = styled(Link)`
  align-items: center;
  color: var(--black-medium);
  display: flex;
  font-family: var(--font-title);
  text-decoration: none;
  font-size: 1.6rem;
  gap: 0.5rem;

  > svg {
    width: 2rem;
    color: var(--black-medium);
  }
`
export const ProductWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 3rem;

  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-start;
  }
`

export const ProductName = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: var(--font-title);
`
export const ProductPrice = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  font-family: var(--font-title);
  padding: 0.5rem 0;
`
export const ProductDescriptionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  font-family: var(--font-title);
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`
export const ProductDescription = styled.p`
  font-size: 1.2rem;
  font-family: var(--font-text);
  max-width: 30rem;
`
