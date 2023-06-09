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
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  top: 0;
  width: 100%;

  h3 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1.2rem;
  }
`

export const GoToHomeButton = styled.button`
  background: #1d1d1d;
  border: 0;
  color: #fff;
  cursor: pointer;
  height: 4rem;
  text-transform: uppercase;
  transition: 0.5s opacity ease-in;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
  }
`
