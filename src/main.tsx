import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global"

import theme from "./styles/theme"
import { Router } from "./router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  </StrictMode>
)
