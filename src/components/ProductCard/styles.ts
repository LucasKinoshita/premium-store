import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 20rem;
  width: 100%;
`

export const ImageWrapper = styled.div`
  width: 100%;

  > img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`

export const ProductInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;

  > button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 1.8rem;
    }
  }
`

export const ProductName = styled.h3`
  font-size: 1.8rem;
  font-weight: normal;
`

export const ProductPrice = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.5rem;
`
