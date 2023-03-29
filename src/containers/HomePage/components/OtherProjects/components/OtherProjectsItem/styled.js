import styled from "styled-components"

export const OtherProjectsLink = styled.a`
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
  box-shadow: 0 10px 30px -15px var(--color-box-shadow);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--color-light-bg);
  transition: var(--transition);
  overflow: auto;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 20px 30px -15px var(--color-box-shadow);

    ${OtherProjectsLink} {
      color: var(--color-accent);
    }
  }
`

export const OtherProjectsText = styled.div`
  p {
    color: var(--color-light-slate);
    position: relative;
  }
`

export const TechnologiesList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  margin: 20px 0px 0px;
`

export const TechnologiesListItem = styled.li`
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: 1.75;
  color: var(--color-slate);

  &:not(:last-child) {
    margin-right: 15px;
  }
`
