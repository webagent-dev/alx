import React from "react"
import {
  GlobalStyle,
  Container,
} from "./globalStyle"
import HorizontalScroll from "react-scroll-horizontal"
import {
  Home,
  Intro,
} from "./file"
function App() {
  return (
    <Container>
      <GlobalStyle />
      <HorizontalScroll>
        <Home />
        <Intro />
      </HorizontalScroll>
    </Container>
  )
}

export default App
