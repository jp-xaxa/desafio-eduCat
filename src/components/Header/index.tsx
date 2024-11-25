import logo from "../../assets/SkilllLab-semFundo.png"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { BiLogOut } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"

import { Input } from "../Input"
import { ButtonText } from "../ButtonText"

import { Container, Logo, Profile } from "./styles"

export function Header() {
  const avatarUrl = avatarPlaceholder

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />
      </Logo>

      <Input
        placeholder="Pesquisar por assunto e professores"
        icon={FiSearch}
      />

      <Profile>
        <img src={avatarUrl} alt="Foto do usuário" />
        <div>
          <ButtonText title="Nome do usuário" />
          <ButtonText title="sair" icon={BiLogOut} />
        </div>
      </Profile>
    </Container>
  )
}
