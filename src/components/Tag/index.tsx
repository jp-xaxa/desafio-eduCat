import { Container } from "./styles"

interface TagProps {
  title: string
  icon?: React.ElementType
}

export function Tag({ title, icon: Icon }: TagProps) {
  return (
    <Container>
      
      {Icon && <Icon />}
      {title}
    </Container>
  )
}
