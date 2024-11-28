import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import dataJSON from "../../data/data.json"

import logo from "../../assets/SkilllLab-semFundo.png"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { BiLogOut } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { IoMenu } from "react-icons/io5"

import { ButtonText } from "../ButtonText"

import {
  Container,
  Content,
  Logo,
  Search,
  Option,
  Profile,
  ButtonIcon,
} from "./styles"

interface Data {
  id: number
  titulo: string
  tags: string[]
}

interface HeaderProps {
  onOpenMenu: () => void
}

export function Header({ onOpenMenu }: HeaderProps) {
  const [search, setSearch] = useState<string>("")
  const [filteredData, setFilteredData] = useState<Data[]>([])

  const navigate = useNavigate()

  const avatarUrl = avatarPlaceholder

  function handleDetailsCourse(id: number) {
    navigate(`/details-course/${id}`)
  }

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData([])
    } else {
      const filtered = dataJSON.filter((course: Data) => {
        return (
          course.titulo.toLowerCase().includes(search.toLowerCase()) ||
          course.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          )
        )
      })
      setFilteredData(filtered)
    }
  }, [search])

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="Logo do site" />
        </Logo>

        <ButtonIcon onClick={onOpenMenu}>
          <IoMenu />
        </ButtonIcon>

        <Search $active={search.length > 0 && filteredData.length > 0}>
          <div>
            <FiSearch />
            <input
              placeholder="Buscar informações"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {search && filteredData.length > 0 && (
            <div className="options">
              {filteredData.map((course) => (
                <Option
                  key={String(course.id)}
                  onClick={() => handleDetailsCourse(course.id)}
                >
                  <div>
                    <h1 className="title">{course.titulo}</h1>

                    <div>
                      <span>(</span>
                      {course.tags.map((tag, index) => (
                        <span key={index}>
                          {tag}
                          {index < course.tags.length - 1 && ", "}
                        </span>
                      ))}
                      <span>)</span>
                    </div>
                  </div>
                </Option>
              ))}
            </div>
          )}
        </Search>

        <Profile>
          <img src={avatarUrl} alt="Foto do usuário" />
          <div>
            <ButtonText title="Nome do usuário" />
            <ButtonText title="sair" icon={BiLogOut} />
          </div>
        </Profile>
      </Content>
    </Container>
  )
}
