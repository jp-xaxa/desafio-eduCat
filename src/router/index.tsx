import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { DetailsCourse } from "../pages/DetailsCourse"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details-course/:id" element={<DetailsCourse />} />
      </Routes>
    </BrowserRouter>
  )
}
