import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import data from "../../data/data.json"

import { IoMdClose } from "react-icons/io"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"
import { InputCheck } from "../../components/InputCheck"
import { ButtonText } from "../../components/ButtonText"

import { Container, Content, Aside } from "./styles"

interface Course {
  id: number
  titulo: string
  descricao: string
  categorias: {
    area: string
    nivel: string
  }
  tags: string[]
  professor: string
}

export function Home() {
  const [courses, setCourses] = useState<Course[]>([])
  const [levelList, setLevelList] = useState<string[]>([])
  const [areaList, setAreaList] = useState<string[]>([])
  const [teachersList, setTeachersList] = useState<string[]>([])

  const [filterSelected, setFilterSelected] = useState<string[]>([])

  const navigate = useNavigate()

  function handleDetailsCourse(id: number) {
    navigate(`/details/${id}`)
  }

  function handleFilter(filterName: string) {
    const alreadySelected = filterSelected.includes(filterName)

    if (alreadySelected) {
      const filteredTags = filterSelected.filter(
        (filter) => filter !== filterName
      )
      setFilterSelected(filteredTags)
    } else {
      setFilterSelected((prevState) => [...prevState, filterName])
    }
  }

  function handleClearFilter() {
    setFilterSelected([])
  }

  useEffect(() => {
    const filteredCourses = filterSelected.length
      ? data.filter((course) => {
          const matchArea = filterSelected.includes(course.categorias.area)
          const matchLevel = filterSelected.includes(course.categorias.nivel)
          const matchTeacher = filterSelected.includes(course.professor)

          return matchArea || matchLevel || matchTeacher
        })
      : data

    setCourses(filteredCourses)

    const levels: Set<string> = new Set()
    const areas: Set<string> = new Set()
    const teachers: Set<string> = new Set()

    data.forEach((course) => {
      levels.add(course.categorias.nivel)
      areas.add(course.categorias.area)
      teachers.add(course.professor)
    })

    setLevelList(Array.from(levels))
    setAreaList(Array.from(areas))
    setTeachersList(Array.from(teachers))
  }, [filterSelected])

  return (
    <Container>
      <Header />

      <Aside>
        <h2>Filtrar catalgo:</h2>

        <div>
          <p>Tipo de curso</p>

          {areaList.map((area, index) => (
            <InputCheck
              title={area}
              key={String(index)}
              onClick={() => handleFilter(area)}
              $checkout={filterSelected.includes(area)}
            />
          ))}
        </div>

        <div>
          <p>Nível de habilidade</p>

          {levelList.map((level, index) => (
            <InputCheck
              title={level}
              key={String(index)}
              onClick={() => handleFilter(level)}
              $checkout={filterSelected.includes(level)}
            />
          ))}
        </div>

        <div>
          <p>Professores: </p>

          {teachersList.map((teacher, index) => (
            <InputCheck
              title={teacher}
              key={String(index)}
              onClick={() => handleFilter(teacher)}
              $checkout={filterSelected.includes(teacher)}
            />
          ))}
        </div>
      </Aside>

      <Content>
        <div>
          <h1>Catalogo</h1>

          {filterSelected.length > 0 && (
            <ButtonText
              title="Limpar filtros"
              className="clear"
              icon={IoMdClose}
              onClick={handleClearFilter}
            />
          )}
        </div>

        <section>
          {courses.map((course) => (
            <Card
              key={String(course.id)}
              title={course.titulo}
              description={course.descricao}
              instructorName={course.professor}
              onClick={() => handleDetailsCourse(course.id)}
            />
          ))}
        </section>
      </Content>
    </Container>
  )
}
