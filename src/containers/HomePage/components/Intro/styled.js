import styled from "styled-components"

export const IntroWrapper = styled.section`
  font-size: clamp(40px, 8vw, 70px);
  font-weight: 700;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  min-height: 100vh;
  max-width: 1000px;

  h1 {
    font-family: var(--font-mono);
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;
    margin: 0px 0px 20px 4px;
    color: var(--color-accent);
  }

  h3 {
    color: var(--color-slate);
  }

  p {
    font-weight: 400;
    color: var(--color-slate);
    margin: 30px 0 50px 0;
    max-width: 547px;
  }
`
