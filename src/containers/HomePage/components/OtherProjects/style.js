import styled from "styled-components"

export const OtherProjectsWrapper = styled.section`
  max-width: 1000px;

  /* p {
    display: flex;
    justify-content: center;
  } */
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
`
export const ContentLink = styled.a`
  position: static;
  margin: 0px 0px 10px;
  color: #ccd6f6;
  font-size: 18px;
  font-weight: 700;
  /* &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  } */
`

export const OtherProjectsItem = styled.li`
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* align-items: flex-start;
  position: relative;
  height: 100%; */
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--color-light-bg);
  transition: var(--transition);
  overflow: auto;

  &:hover {
    transform: translateY(-7px);
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

export const OtherProjectsContent = styled.div``

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
