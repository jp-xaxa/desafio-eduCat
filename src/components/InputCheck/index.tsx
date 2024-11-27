interface InputCheckProps {
  title: string
  $checkout?: boolean
  onClick: () => void
}

import { Container } from "./styles"

export function InputCheck({
  title,
  $checkout = false,
  onClick,
}: InputCheckProps) {
  return (
    <Container $checkout={$checkout} onClick={onClick}>
      <div></div>
      <span>{title}</span>
    </Container>
  )
}
