import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Details } from "../pages/Details"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}
