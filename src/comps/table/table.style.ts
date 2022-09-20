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
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  pading: 20px
    10px;
`
export const First = styled.div`
  flex: 1;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-family: monospace;
  padding: 40px;
  flex-direction: column;
  gap: 2rem;
`
export const Color = styled.div`
  color: #62d981;
  margin-bottom: 10px;
`
export const Second = styled.div`
  flex: 2;
  background: whitesmoke;
  width: 100%;
  height: 100%;
  padding: 140px;
`
export const Head = styled.div`
  color: white;
`
export const List = styled.ol`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: monospace;
  font-weight: 2s00;
`
export const Item = styled.li`
  font-family: monospace;
`
export const Link = styled.a`
  padding: 3px;
`
export const Underline = styled.div`
  width: 300px;
  padding: 1px
    0px;
  background: white;
`
