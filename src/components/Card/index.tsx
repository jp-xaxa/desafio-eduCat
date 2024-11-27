import capa from "../../assets/SkilllLab.png"
import { FaChalkboardTeacher } from "react-icons/fa"

import { Container, Teacher } from "./styles"

interface CardProps {
  title: string
  description: string
  instructorName: string
  onClick: () => void
}
//
export function Card({
  title,
  description,
  instructorName,
  onClick,
}: CardProps) {
  return (
    <Container onClick={onClick}>
      <img src={capa} alt="Imagem de capa do curso." />

      <div>
        <h1>{title}</h1>

        <p>{description}</p>

        <Teacher>
          <FaChalkboardTeacher />
          <p>{instructorName}</p>
        </Teacher>
      </div>
    </Container>
  )
}
