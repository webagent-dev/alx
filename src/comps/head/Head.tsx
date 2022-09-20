import React from "react"
import { bgs } from "../../file"
import {
  HeadContainer,
  Header,
  Text,
  Small,
} from "./head.style"

type headProps =
  {
    main: string
    header: string
    text: string
  }
function Head(
  props: headProps
): JSX.Element {
  return (
    <HeadContainer
      bg={
        bgs
      }
    >
      <Header>
        {
          props.main
        }
      </Header>
      <br />
      <Text>
        {
          props.header
        }
      </Text>
      <Small>
        {
          props.text
        }
      </Small>
    </HeadContainer>
  )
}

export default Head
