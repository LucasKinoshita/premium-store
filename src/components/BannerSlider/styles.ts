import styled, { css } from 'styled-components'

type ImageWrapperProps = {
  src: string
}

export const Wrapper = styled.section`
  .slick-dots {
    align-items: center;
    display: flex !important;
    justify-content: center;
    list-style: none;
    margin-top: 1.6rem;

    li {
      align-items: center;
      background: white;
      border: 0.1rem solid #1d1d1d;
      border-radius: 100%;
      cursor: pointer;
      display: flex;
      height: 1rem;
      justify-content: center;
      margin: 0 0.5rem;
      width: 1rem;

      &.slick-active {
        background: #1d1d1d;
      }
    }

    button {
      cursor: pointer;
      height: 1.2rem;
      opacity: 0;
      width: 1.2rem;
    }
  }
`

export const ImageWrapper = styled.div<ImageWrapperProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
    width: 100%;

    &:before {
      bottom: 0;
      background: rgba(0, 0, 0, 0.05);
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  `}
`
