import styled from "styled-components"

export const FooterContainer = styled.div`
  text-align: center;
  padding: 15px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  filter: ${props => props.menuActive && "blur(5px) brightness(0.7)"};
`
export const FooterLink = styled.a`
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-light-slate);
  padding: 10px;
  transition: var(--transition);

  &:hover {
    color: var(--color-accent);
  }
`
