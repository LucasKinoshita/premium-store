import styled from 'styled-components'

export const OrderWrapper = styled.div`
  align-self: self-start;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1.6rem;
  position: relative;
`

export const OrderTitle = styled.h2`
  font-family: var(--font-title);
  font-size: 2rem;
  text-transform: uppercase;
`
export const OrderSubtotal = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-family: var(--font-text);
  justify-content: space-between;
  padding-top: 1rem;
`

export const OrderDescount = styled(OrderSubtotal)`
  padding-bottom: 1rem;
  padding-top: 0.5rem;
`

export const OrderDivider = styled.hr`
  background-color: #dce2e5;
  border-width: 0;
  height: 0.1rem;
  margin-bottom: 1rem;
`

export const OrderTotal = styled(OrderSubtotal)`
  padding-top: 0.5rem;
  padding-bottom: 2rem;
`

export const CheckoutWrapper = styled(OrderWrapper)`
  box-shadow: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;

  h3 {
    color: var(--black-medium);
    font-family: var(--font-title);
    font-size: 2rem;
  }

  p {
    font-family: var(--font-text);
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
`
