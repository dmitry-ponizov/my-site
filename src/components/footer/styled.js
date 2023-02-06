import styled from "styled-components"

export const FooterContainer = styled.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  filter: ${props => props.menuActive && "blur(5px) brightness(0.7)"};
`
