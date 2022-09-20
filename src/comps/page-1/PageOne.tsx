import React from "react"
import {
  Container,
  Wrapper,
  Header,
  Text,
} from "./page-1.style"
import { bgs } from "../../file"
function PageOne() {
  return (
    <Container
      bg={
        bgs
      }
    >
      <Wrapper>
        <Header>
          {" "}
          Welcome
          to
          the
          ALX
          Software
          Engineering
          Program
          Guide.
        </Header>
        <Text>
          In
          this
          document
          you
          would
          learn
          and
          discover
          everything
          you
          need
          to
          know
          about
          your
          participation
          in
          the
          ALX
          Software
          Engineering
          programme.
          <br />
          <br />
          <br />
          This
          is
          your
          personal
          map
          to
          understanding
          everything
          about
          this
          program,
          Unsure
          about
          the
          first
          step
          to
          take
          on
          your
          first,
          second
          or
          fifth
          day,
          the
          answer
          is
          probably
          in
          here.
          If
          you
          are
          wondering
          how
          to
          do
          something,
          the
          process
          document
          is
          probably
          linked
          somewhere
          in
          here.
          <br />
          <br />
          <br />
          We
          have
          carefully
          designed
          this
          document
          to
          break
          down
          your
          journey
          in
          this
          program
          in
          terms
          of
          approach,
          principles,
          methodology,
          requirements,
          and
          design.
        </Text>
      </Wrapper>
    </Container>
  )
}

export default PageOne
