import styled from "styled-components"

export const AboutWrapper = styled.section`
  max-width: 900px;
`
export const ContentWrapper = styled.div`
  color: var(--color-slate);
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;

  @media (max-width: 768px) {
    display: block;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    margin-top: 20px;

    li {
      font-family: var(--font-mono);
      font-size: 13px;
      padding-left: 20px;
      line-height: 1.3;

      &::before {
        content: "▹";
        font-size: 14px;
        line-height: 0.86;
      }
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  background-color: var(--color-accent);
  max-width: 300px;
  border-radius: var(--border-radius);
  align-self: flex-start;
  transition: var(--transition);

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-accent);
    z-index: -1;
    border-radius: var(--border-radius);
    transition: var(--transition);
  }

  &:hover {
    &::after {
      top: 15px;
      left: 15px;
    }
  }

  img {
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);

    &:hover {
      filter: none;
      mix-blend-mode: normal;
    }
  }

  @media (max-width: 768px) {
    margin: 50px auto 0px;
    width: 70%;
  }
`
