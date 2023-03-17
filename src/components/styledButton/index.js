import React from "react"

import { StyledBtn } from "./styled"

const StyledButton = ({
  withLink = true,
  bigVariant = false,
  link,
  text,
  onClick,
}) => {
  return (
    <StyledBtn
      withLink={withLink}
      bigVariant={bigVariant}
      link={link}
      buttonText={text}
      onClick={onClick}
    >
      {withLink ? (
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
