import styled from 'styled-components'

export const Wrapper = styled.button`
  border: 0;
  border-radius: 1.5rem;
  background: var(--pink-gradient);
  box-shadow: 1px 6px 10px -2px rgba(0, 0, 0, 0.15);
  color: var(--pink);
  cursor: pointer;
  font-family: var(--font-title);
  font-size: 1.4rem;
  margin-top: 1rem;
  opacity: 1;
  padding: 1rem 4.5rem;
  text-transform: uppercase;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`
