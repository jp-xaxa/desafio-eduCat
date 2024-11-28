import { useNavigate } from "react-router-dom"

import logo from "../../assets/SkilllLab-semFundo.png"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { BiLogOut } from "react-icons/bi"
import { FaHome } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

import { ButtonText } from "../ButtonText"

import { Container, Header, Nav, Profile, ButtonIcon } from "./styles"

interface MenuProps {
  menuIsOpen: boolean
  onCloseMenu: () => void
}

export function Menu({ menuIsOpen, onCloseMenu }: MenuProps) {
  const navigate = useNavigate()

  const avatarUrl = avatarPlaceholder

  function handleNavigate(page: string) {
    navigate(page)
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <ButtonIcon onClick={onCloseMenu}>
        <IoClose />
      </ButtonIcon>

      <section>
        <Header>
          <img src={logo} alt="Logo do site" />
        </Header>

        <Nav>
          <ButtonText
            title="Home"
            icon={FaHome}
            onClick={() => handleNavigate("/")}
          />
        </Nav>
      </section>

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
