import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import data from "../../data/data.json"
import teachers from "../../data/teachers.json"

import { useCoursesRegister } from "../../hook/coursesRegister"

import { FiArrowLeft, FiBarChart } from "react-icons/fi"
import { FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa"
import { TbClockHour2 } from "react-icons/tb"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Menu } from "../../components/Menu"

import { Container, Content, Cover, About, Teacher } from "./styles"

interface Details {
  id: number
  titulo: string
  descricao: string
  categorias: {
    area: string
    nivel: string
  }
  tags: string[]
  professorId: number
  sobre: string
  duracaoHoras: number
  avaliacao: number
}

interface Teacher {
  id: number
  nome: string
  biografia: string
  especializacoes: string[]
  formacao: string
  redesSociais: {
    linkedin: string
    github: string
  }
}

export function DetailsCourse() {
  const [details, setDetails] = useState<Details | null>(null)
  const [teacher, setTeacher] = useState<Teacher | null>(null)
  const [isCourseRegistered, setIsCourseRegistered] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const { registeredCourses, registerCourse, unregisterCourse } =
    useCoursesRegister()

  function handleBack() {
    navigate(-1)
  }

  function handleCourseRegistration() {
    if (isCourseRegistered) {
      unregisterCourse(details!.id)
    } else {
      registerCourse(details!)
    }
  }

  useEffect(() => {
    const courseId = Number(params.id)
    const courseDetails = data.find((course) => course.id === courseId)

    if (courseDetails) {
      setDetails(courseDetails)

      const courseTeacher = teachers.find(
        (teacher) => teacher.id === courseDetails.professorId
      )

      if (courseTeacher) {
        setTeacher(courseTeacher)
      }

      const isRegistered = registeredCourses.some(
        (course) => course.id === courseDetails.id
      )
      setIsCourseRegistered(isRegistered)
    }
  }, [params.id, registeredCourses])

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Content>
        <section>
          <ButtonText
            title="Voltar"
            icon={FiArrowLeft}
            onClick={handleBack}
            className="back"
          />

          {details && (
            <>
              <Cover>
                <h1>{details.titulo}</h1>

                <p>{details.descricao}</p>

                <div>
                  <Tag title={details.categorias.area} icon={FaBriefcase} />
                  <Tag title={details.categorias.nivel} icon={FiBarChart} />
                  <Tag
                    title={`${details.duracaoHoras} horas`}
                    icon={TbClockHour2}
                  />

                  <span>|</span>

                  {details.tags.map((tag, index) => (
                    <Tag key={String(index)} title={tag} />
                  ))}
                </div>
              </Cover>

              <About>
                <div>
                  <h1 className="title">
                    Sobre o curso <span> (Avaliação: {details.avaliacao})</span>
                  </h1>
                </div>

                <p>{details.sobre}</p>
              </About>
            </>
          )}

          {teacher && (
            <Teacher>
              <div>
                <h1 className="title">
                  Professor: {teacher.nome} <span> ({teacher.formacao})</span>
                </h1>

                <div>
                  <ButtonText
                    title="LinkedIn"
                    icon={FaLinkedin}
                    className="linkedin"
                    onClick={() =>
                      window.open("https://www.linkedin.com/", "_blank")
                    }
                  />
                  <ButtonText
                    title="GitHub"
                    icon={FaGithub}
                    className="github"
                    onClick={() => window.open("https://github.com/", "_blank")}
                  />
                </div>
              </div>

              <p>{teacher.biografia}</p>

              <footer>
                {teacher.especializacoes.map((spec, index) => (
                  <Tag key={String(index)} title={spec} />
                ))}
              </footer>
            </Teacher>
          )}

          <div style={{ margin: "0 auto" }}>
            <Button
              title={
                isCourseRegistered ? "Cancelar inscrição" : "Registrar no curso"
              }
              onClick={handleCourseRegistration}
            />
          </div>
        </section>
      </Content>
    </Container>
  )
}
