import styled from 'styled-components'

export const OrderWrapper = styled.div`
  align-self: self-start;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
`

export const OrderTitle = styled.h2`
  text-transform: uppercase;
`
export const OrderSubtotal = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
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
export const OrderButton = styled.button`
  background: #51b853;
  border: 0;
  color: #fff;
  cursor: pointer;
  height: 4rem;
  text-transform: uppercase;
  transition: 0.5s opacity ease-in;

  &:hover {
    opacity: 0.9;
  }
`
