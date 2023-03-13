import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  filter: ${props => props.menuActive && "blur(5px) brightness(0.7)"};
  pointer-events: ${props => props.menuActive && "none"};
`

export const Container = styled.div`
  width: 100%;
  padding: 0 14px;
  margin: 0 auto;
  max-width: 1300px;
  @media (max-width: 1300px) {
    width: 960px;
  }
  @media (max-width: 1024px) {
    width: 767px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`
