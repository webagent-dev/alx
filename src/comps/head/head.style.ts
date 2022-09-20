import styled from "styled-components"
type props =
  {
    bg: string
  }
export const HeadContainer = styled.div<props>`
  width: 100vw;
  height: 100vh;
  background: url(${(
    props
  ) =>
    props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Header = styled.h1`
  font-size: 60px;
  color: white;
`
export const Text = styled.h1`
  font-size: 60px;
  color: #787a40;
`
export const Small = styled.p``
