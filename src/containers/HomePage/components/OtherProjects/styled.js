import styled from "styled-components"

export const OtherProjectsWrapper = styled.section`
  max-width: 1000px;

  button {
    display: block;
    margin: 0 auto;
  }
`

export const OtherProjectsTitle = styled.h3`
  font-size: clamp(26px, 5vw, 28px);
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const OtherProjectsItems = styled.ul`
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  margin-bottom: 80px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`
