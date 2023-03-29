import styled from "styled-components"

export const OtherProjectsIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;

  svg {
    width: 40px;
  }
`

export const IconsList = styled.ul`
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
