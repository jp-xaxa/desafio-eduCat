import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: React.ElementType
}

export function ButtonText({ title, icon: Icon, ...rest }: ButtonTextProps) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
