import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--white);
  border-radius: 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 26.1rem;
`

export const ImageWrapper = styled.div`
  width: 100%;
  padding: 0.8rem;
  position: relative;

  > img {
    display: block;
    max-width: 100%;
    width: 24rem;
    object-fit: cover;
    height: 18rem;
    border-radius: 1rem;
  }
`
export const InfoWrapper = styled.div`
  padding: 0.8rem 0.8rem 1.5rem 0.8rem;

  > span {
    display: block;
    color: var(--gray);
    font-family: var(--font-text);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`
export const TitleWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;

  h2 {
    color: var(--black-medium);
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 600;
  }

  > span {
    color: var(--gray);
    font-family: var(--font-title);
    font-size: 1.4rem;
    font-weight: normal;
    margin: 0;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;
  }
`
