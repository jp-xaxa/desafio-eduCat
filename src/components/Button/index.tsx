import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: React.ElementType
}

export function Button({ title, icon: Icon, ...rest }: ButtonProps) {
  return (
    <Container>
      {Icon && <Icon />}
      <button {...rest}>{title}</button>
    </Container>
  )
}
