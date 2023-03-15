import styled from "styled-components"

export const ActiveLink = styled.a`
  display: inline-block;
  color: #64ffda !important;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &::after {
    content: "";
    position: relative;
    display: block;
    width: 0px;
    height: 1px;
    bottom: 0.23em;
    background-color: #64ffda;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0.5;
  }
  &:hover {
    outline: 0px;
    &::after {
      width: 100%;
    }
  }
`
