import React from "react"
import {
  HomepageContainer,
  HomeContainerWrapper,
  HeaderWord,
  WordOne,
  Small,
  Underline,
  Other,
} from "./homepage.style"
function HomePage() {
  return (
    <HomepageContainer>
      <HomeContainerWrapper>
        <HeaderWord>
          <WordOne>
            ALX
          </WordOne>
          <WordOne>
            Software
            Engineering
          </WordOne>
          <WordOne>
            Programme
          </WordOne>
        </HeaderWord>
        {/* // eslint-disable-next-line prettier/prettier */}
        <Small>
          The
          Fountain
          of
          Truth
        </Small>
        <Underline />
        <Other>
          Student
          Guide
        </Other>
      </HomeContainerWrapper>
    </HomepageContainer>
  )
}

export default HomePage
