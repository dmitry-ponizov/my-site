import styled from "styled-components"

export const ContactWrapper = styled.section`
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0px auto 50px;
  }

  button {
    margin-top: 50px;
  }

  span {
    margin-bottom: 20px;
    color: var(--color-accent);
    font-family: var(--font-mono);
    font-size: 16px;
  }

  h2 {
    font-size: clamp(40px, 5vw, 50px);
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 17px;
    color: var(--color-slate);
  }
`
