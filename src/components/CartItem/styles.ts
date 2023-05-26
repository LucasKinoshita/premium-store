import styled from 'styled-components'

export const CartItemWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 2rem;
  max-width: 50rem;

  > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: 365px) {
    grid-template-columns: 1fr;
  }
`

export const CartItemContent = styled.div`
  padding: 1rem;
`

export const CartItemTitleWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const CartItemDeleteButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  > svg {
    width: 1.6rem;
  }
`

export const CartItemDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`

export const CartItemFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const CartItemQuantity = styled.input`
  border: none;
  background: #f3f5f6;
  border-radius: 0.5rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  height: 3rem;
  padding-left: 1rem;
  width: 5rem;
`

export const CartItemPrice = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`
