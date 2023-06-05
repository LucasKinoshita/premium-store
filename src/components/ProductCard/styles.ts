import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 20rem;
  width: 100%;

  a {
    text-decoration: none;
    color: #1d1d1d;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;

  > img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    height: 20rem;
  }
`

export const ProductInfoWrapper = styled.div`
  align-items: flex-start;
  background: #1d1d1d;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 1rem;

  a {
    align-items: space-between;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 2rem;
      color: #fff;
    }
  }
`

export const ProductName = styled.h3`
  font-size: 1.6rem;
  font-weight: normal;
  color: #fff;
`

export const ProductPrice = styled.span`
  color: #fff;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
`
