import styled from "styled-components"

export const ContactWrapper = styled.section`
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0px auto 50px;
    padding-bottom: 130px;
  }

  button {
    margin-top: 50px;
  }
`
export const СontactNumberTitle = styled.p`
  margin-bottom: 7px;
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 16px;
`
export const ContactTitle = styled.h2`
  font-size: clamp(35px, 5vw, 53px);
  margin-bottom: 10px;
  font-weight: 700;
`

export const ContactText = styled.p`
  font-size: 17px;
  color: var(--color-slate);

  @media (max-width: 480px) {
    font-size: 15px;
  }
`
