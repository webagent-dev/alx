import styled, {
  createGlobalStyle,
} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Alfa Slab One', monospace;
    }
`
export const WelcomeContainer = styled.div`
  width: 100vw;
  height: 100%;
`
export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
export const ApproachContainer = styled.div`
  width: 100%;
  height: 100%;
  background: green;
`
export const ComContainer = styled.div`
  width: 100%;
  height: 100%;
  background: gray;
`
export const CurriculumContainer = styled.div`
  width: 100%;
  height: 100%;
  background: purple;
`
export const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: whitesmoke;
`
export const ModalitieContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
`
export const ThanksContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`
