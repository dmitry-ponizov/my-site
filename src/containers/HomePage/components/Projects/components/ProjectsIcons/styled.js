import styled from "styled-components"

export const ProjectIcons = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 10px;
    justify-content: flex-start;
  }
`

export const IconsItem = styled.li`
  &:first-child {
    margin-right: 20px;
  }
`

export const IconsLink = styled.a`
  width: 20px;
  transition: var(--transition);

  &:hover {
    svg {
      stroke: var(--color-accent);
    }
  }
`
