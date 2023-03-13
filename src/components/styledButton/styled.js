import styled from "styled-components"

export const StyledBtn = styled.button`
  color: #64ffda;
  font-family: var(--font-mono);
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 11px 16px;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`