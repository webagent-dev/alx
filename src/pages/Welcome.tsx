import React from "react"
import { WelcomeContainer } from "../globalStyle"
import {
  Head,
  PageOne,
  Table,
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
      <Table />
    </WelcomeContainer>
  )
}

export default Welcome
