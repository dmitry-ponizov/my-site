import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: var(--transition);
  filter: ${props => props.menuActive && "blur(5px) brightness(0.7)"};
  pointer-events: ${props => props.menuActive && "none"};
  padding: 0px 150px;

  @media (max-width: 1024px) {
    padding: 0px 100px;
  }

  @media (max-width: 768px) {
    padding: 0px 50px;
  }

  @media (max-width: 480px) {
    padding: 0px 25px;
  }
`
