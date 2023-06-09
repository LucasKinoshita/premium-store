import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.header`
  background: var(--black);
`
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 130rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const CartItem = styled(Link)`
  align-items: center;
  color: var(--gray-light);
  display: flex;
  gap: 1rem;
  text-decoration: none;

  > span {
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`
