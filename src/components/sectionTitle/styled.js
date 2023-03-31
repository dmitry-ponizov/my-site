import styled from "styled-components"

export const StyledTitle = styled.h2`
  display: flex;
  align-items: center;
  margin: 10px 0px 40px;
  font-size: clamp(21px, 5vw, 28px);
  font-weight: 700;
  white-space: nowrap;

  &::after {
    content: "";
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--color-line);
    @media (max-width: 1080px) {
      width: 200px;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  span {
    font-family: var(--font-mono);
    font-size: clamp(16px, 3vw, 21px);
    font-weight: 400;
    color: var(--color-accent);
    margin: 0 10px -5px 0;
  }
`
