//import { Spin } from "../Spin"
import { InputHTMLAttributes } from "react"
import { Container } from "./styles"
import { Spin } from "../Spin"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
  icon?: React.ElementType
}

export function Input({ icon: Icon, isLoading = false, ...rest }: InputProps) {
  return (
    <Container>
      {Icon && <Icon />}

      <input type="text" {...rest} />

      {isLoading && <Spin />}
    </Container>
  )
}
