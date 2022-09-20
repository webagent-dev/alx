import React from "react"
import { WelcomeContainer } from "../globalStyle"
import {
  Head,
  PageOne,
} from "../file"
function Welcome() {
  return (
    <WelcomeContainer>
      <Head
        main="Introduction"
        header="to the ALX SE Programme"
        text=""
      />
      <PageOne />
    </WelcomeContainer>
  )
}

export default Welcome
