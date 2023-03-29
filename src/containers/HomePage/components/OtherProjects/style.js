import styled from "styled-components"

export const OtherProjectsWrapper = styled.section`
  max-width: 1000px;
`

export const OtherProjectsTitle = styled.h3`
  font-size: clamp(26px, 5vw, 28px);
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  display: flex;
  flex-direction: column;

  p {
    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 400;
  }
`

export const OtherProjectsItems = styled.ul`
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  margin-bottom: 80px;

  & ~ button {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`

export const ContentLink = styled.a`
  position: static;
  margin: 0px 0px 10px;
  color: #ccd6f6;
  font-size: 19px;
  font-weight: 700;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
`

export const OtherProjectsItem = styled.li`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--color-light-bg);
  transition: var(--transition);
  overflow: auto;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);

    ${ContentLink} {
      color: var(--color-accent);
    }
  }
`

export const OtherProjectsIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;

  svg {
    width: 40px;
  }
`

export const IconsList = styled.ul`
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
`

export const IconsListLink = styled.a`
  width: 20px;
  margin-left: 14px;

  svg {
    stroke: var(--color-slate);
    transition: var(--transition);

    &:hover {
      stroke: var(--color-accent);
    }
  }
`

export const ContentText = styled.p`
  color: var(--color-light-slate);
`

export const OtherProjectsList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  margin: 20px 0px 0px;
`

export const ProjectsListItem = styled.li`
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.75;
  color: var(--color-slate);

  &:not(:last-child) {
    margin-right: 15px;
  }
`
