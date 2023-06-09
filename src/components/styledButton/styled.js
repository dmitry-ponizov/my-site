import styled from "styled-components"

export const StyledBtn = styled.button`
  color: var(--color-accent);
  font-family: var(--font-mono);
  background-color: transparent;
  border: 1px solid var(--color-accent);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }

  ${({ link, bigVariant }) => {
    const padding = link ? "0" : bigVariant ? "20px 28px" : "11px 16px"
    const fontSize = bigVariant ? "14px" : "13px"
    const linkPadding = bigVariant ? "20px 28px" : "11px 16px"

    return `
      padding: ${padding};
      font-size: ${fontSize};

      & > a {
        padding: ${linkPadding};
      }
    `
  }}
`
