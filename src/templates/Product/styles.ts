import Link from 'next/link'
import styled from 'styled-components'
import { Container } from 'templates/Home/styles'

export const Wrapper = styled(Container)``

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1d1d1d;
  font-size: 1.6rem;
  gap: 0.5rem;

  > svg {
    width: 2rem;
    color: '#1d1d1d';
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
`

export const ProductName = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`
export const ProductPrice = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem 0;
`
export const ProductDescriptionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`
export const ProductDescription = styled.p`
  font-size: 1.2rem;
`

export const AddToCartButton = styled.button`
  align-self: flex-start;
  background: #1d1d1d;
  border: 0;
  color: #fff;
  cursor: pointer;
  justify-self: flex-start;
  margin-top: 1rem;
  padding: 1rem;
  transition: 0.5s opacity ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 2rem;
  }
`
