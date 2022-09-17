import React from "react"
import {
  GlobalStyle,
  Container,
} from "./globalStyle"
import HorizontalScroll from "react-horizontal-scrolling"
import {
  Home,
  Intro,
  Approach,
  Curriculum,
  Modalitie,
  Thanks,
  Comm,
} from "./file"
function App() {
  return (
    <Container>
      <GlobalStyle />
      <HorizontalScroll>
        <Home />
        <Intro />
        <Approach />
        <Curriculum />
        <Modalitie />
        <Thanks />
        <Comm />
      </HorizontalScroll>
    </Container>
  )
}

export default App
