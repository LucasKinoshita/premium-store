import styled from 'styled-components'

export const Wrapper = styled.div`
  align-items: center;
  background: var(--black-medium);
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
`

export const Title = styled.h1`
  color: var(--gray-light);
  font-family: var(--font-title);
  font-size: 4rem;
  line-height: 1.5;
  text-align: center;

  span {
    color: var(--pink-medium);
  }
`
export const Text = styled.p`
  font-family: var(--font-text);
  color: var(--gray-medium);
  font-size: 2rem;
  max-width: 50rem;
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`
