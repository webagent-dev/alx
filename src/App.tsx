import React from "react"

import {
  GlobalStyle,
  Container,
} from "./globalStyle"
import {
  Home,
  Intro,
} from "./file"
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Home />
      <Intro />
    </Container>
  )
}

export default App
