import React from "react"
import {
  IntroPageContainer,
  First,
  Second,
  Img,
  Wrapper,
  Header,
  Text,
} from "./intro.style"
import { introImage } from "../../file"
function IntroPage() {
  return (
    <IntroPageContainer>
      <First>
        <Img
          src={
            introImage
          }
          alt="itro-pic"
        />
      </First>
      <Second>
        <Wrapper>
          <Header>
            Welcome
            to
            the
            ALX
            <br />
            SE
            Program
            Guide.
          </Header>
          <Text>
            This
            is
            your
            one-stop
            shop
            for
            all
            things
            related
            to
            your
            participation
            in
            this
            ALX
            SE
            Programme
            Experience.
          </Text>
        </Wrapper>
      </Second>
    </IntroPageContainer>
  )
}

export default IntroPage
