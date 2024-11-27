import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import data from "../../data/data.json"
import teachers from "../../data/teachers.json"

import { FiArrowLeft, FiBarChart } from "react-icons/fi"
import { FaBriefcase, FaGithub, FaLinkedin } from "react-icons/fa"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

import { Container, Content, Cover, About, Teacher } from "./styles"

interface Details {
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

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
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
    }
  }, [params.id])

  return (
    <Container>
      <Header />

      <Content>
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

            <div className="specialization">
              {teacher.especializacoes.map((spec, index) => (
                <Tag key={String(index)} title={spec} />
              ))}
            </div>
          </Teacher>
        )}
      </Content>
    </Container>
  )
}
