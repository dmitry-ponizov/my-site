import React from "react"

import { StyledBtn } from "./styled"

const StyledButton = ({ children, withLink = true, bigVariant = false }) => {
  return (
    <StyledBtn withLink={withLink} bigVariant={bigVariant}>
      {children}
    </StyledBtn>
  )
}

export default StyledButton
