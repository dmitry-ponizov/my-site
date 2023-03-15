import styled from "styled-components"

import { StyledBtn } from "../../components/styledButton/styled"
import { linkStyles } from "../../constants/index"

export const IntroWrapper = styled.section`
  font-family: var(--font-sans);
  font-size: clamp(40px, 8vw, 70px);
  font-weight: 700;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  padding-top: 100px;
  max-width: 1000px;
  h1 {
    font-family: var(--font-mono);
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;
    margin: 0px 0px 20px 4px;
    color: #64ffda;
  }

  h3 {
    color: #8892b0;
  }

  p {
    font-size: 17px;
    line-height: 1.4;
    font-weight: 400;
    color: #8892b0;
    margin: 30px 0 50px 0;
    max-width: 547px;
    a {
      ${linkStyles}
    }

    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
`
export const IntroButton = styled(StyledBtn)`
  font-family: var(--font-mono);
  font-size: 14px;
  padding: 1.25rem 1.75rem;
  line-height: 1;
`
