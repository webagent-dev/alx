import styled from "styled-components"
type styleProps =
  {
    bg: string
  }
export const Container = styled.div<styleProps>`
  width: 100vw;
  height: 100vh;
  background: url(${(
    props
  ) =>
    props.bg});
`
export const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  background: whitesmoke;
  margin: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding: 50px;
`
export const Header = styled.div`
  font-size: 60px;
  color: #21803a;
  margin-top: 40px;
`
export const Text = styled.div`
  margin-top: 40px;
  font-size: 30px;
  font-family: monospace;
  font-weight: 500;
`
