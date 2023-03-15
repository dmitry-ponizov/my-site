import styled from "styled-components"

export const ActiveLink = styled.a`
  color: #64ffda !important;
  display: inline-block;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  text-decoration: none;
  text-decoration-skip-ink: auto;
  &::after {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.23em;
    background-color: #64ffda;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0.5;
  }
  &:hover {
    color: #64ffda;
    outline: 0px;
    &::after {
      width: 100%;
    }
  }
`
