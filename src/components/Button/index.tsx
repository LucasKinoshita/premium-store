import { Wrapper } from './styles'

export type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>
}

export default Button
