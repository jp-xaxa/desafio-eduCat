import React, { createContext, useState, ReactNode } from "react"

interface Course {
  id: number
  titulo: string
}

interface CoursesRegisterContextType {
  registeredCourses: Course[]
  registerCourse: (course: Course) => void
  unregisterCourse: (courseId: number) => void
}

const CoursesRegisterContext = createContext<
  CoursesRegisterContextType | undefined
>(undefined)

interface CoursesProviderProps {
  children: ReactNode
}

export const CoursesProvider: React.FC<CoursesProviderProps> = ({
  children,
}) => {
  const [registeredCourses, setRegisteredCourses] = useState<Course[]>(() => {
    const storedCourses = localStorage.getItem("registeredCourses")
    return storedCourses ? JSON.parse(storedCourses) : []
  })

  const registerCourse = (course: Course) => {
    setRegisteredCourses((prevCourses) => {
      const updatedCourses = [...prevCourses, course]
      localStorage.setItem("registeredCourses", JSON.stringify(updatedCourses))
      alert(`Curso ${course.titulo} registrado com sucesso!`)
      return updatedCourses
    })
  }

  const unregisterCourse = (courseId: number) => {
    setRegisteredCourses((prevCourses) => {
      const updatedCourses = prevCourses.filter(
        (course) => course.id !== courseId
      )
      localStorage.setItem("registeredCourses", JSON.stringify(updatedCourses))
      alert("Curso removido com sucesso!")
      return updatedCourses
    })
  }

  return (
    <CoursesRegisterContext.Provider
      value={{ registeredCourses, registerCourse, unregisterCourse }}
    >
      {children}
    </CoursesRegisterContext.Provider>
  )
}

export const useCoursesRegister = (): CoursesRegisterContextType => {
  const context = React.useContext(CoursesRegisterContext)
  if (!context) {
    throw new Error("useCoursesRegister must be used within a CoursesProvider")
  }
  return context
}
