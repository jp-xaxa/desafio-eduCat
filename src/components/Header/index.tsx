import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import dataJSON from "../../data/data.json"

import logo from "../../assets/SkilllLab-semFundo.png"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { BiLogOut } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"

import { ButtonText } from "../ButtonText"

import { Container, Logo, Search, Profile, Option } from "./styles"

interface Data {
  id: number
  titulo: string
  tags: string[]
}

export function Header() {
  const [search, setSearch] = useState<string>("")
  const [filteredData, setFilteredData] = useState<Data[]>([])

  const navigate = useNavigate()

  const avatarUrl = avatarPlaceholder

  function handleDetailsCourse(id: number) {
    navigate(`/details-course/${id}`)
  }

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData([]) // Limpa a lista se a busca estiver vazia
    } else {
      const filtered = dataJSON.filter((course: Data) => {
        // Verifica se o título ou alguma tag do curso contém o texto da busca
        return (
          course.titulo.toLowerCase().includes(search.toLowerCase()) ||
          course.tags.some((tag) =>
            tag.toLowerCase().includes(search.toLowerCase())
          )
        )
      })
      setFilteredData(filtered) // Atualiza os cursos filtrados
    }
  }, [search])

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo do site" />
      </Logo>

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

                  <span>(</span>
                  {course.tags.map((tag, index) => (
                    <span key={index}>
                      {tag}
                      {index < course.tags.length - 1 && ", "}
                    </span>
                  ))}
                  <span>)</span>
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
    </Container>
  )
}
