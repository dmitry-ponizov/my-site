import styled from "styled-components"

import StyledButton from "../../components/styledButton"

export const IntroWrapper = styled.section`
  font-family: var(--font-sans);
  font-size: clamp(40px, 8vw, 75px);
  font-weight: 600;
  line-height: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  margin: 0px auto;
  padding-top: 100px;
  max-width: 1000px;
`
export const IntroButton = styled(StyledButton)`
  font-family: var(--font-mono);
  font-size: 14px;
  padding: 1.25rem 1.75rem;
  line-height: 1;
`

export const FirstTitle = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 400;
  margin: 0px 0px 20px 4px;
  color: #64ffda;
`

export const SecondTitle = styled.h2`
  color: #ccd6f6;
`

export const ThirdTitle = styled.h3`
  color: #8892b0;
`

export const IntroText = styled.div`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 400;
  color: #8892b0;
  margin: 30px 0 50px 0;
  max-width: 547px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`
