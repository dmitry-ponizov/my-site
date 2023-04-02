import React from "react"

import { StyledBtn } from "./styled"

const StyledButton = ({
  bigVariant = false,
  link,
  text,
  onClick,
}) => {
  return (
    <StyledBtn
      bigVariant={bigVariant}
      link={link}
      buttonText={text}
      onClick={onClick}
    >
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          {text}
        </a>
      ) : (
        text
      )}
    </StyledBtn>
  )
}

export default StyledButton
