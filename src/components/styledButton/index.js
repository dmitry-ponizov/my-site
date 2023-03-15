import React from "react"

import { StyledBtn } from "./styled"

const StyledButton = ({
  withLink = true,
  bigVariant = false,
  buttonLink,
  buttonText,
  onClick,
}) => {
  return (
    <StyledBtn
      withLink={withLink}
      bigVariant={bigVariant}
      buttonLink={buttonLink}
      buttonText={buttonText}
      onClick={onClick}
    >
      {withLink ? (
        <a href={buttonLink} target="_blank" rel="noreferrer">
          {buttonText}
        </a>
      ) : (
        buttonText
      )}
    </StyledBtn>
  )
}

export default StyledButton
