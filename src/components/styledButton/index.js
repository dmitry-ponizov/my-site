import React from "react"

import { StyledBtn } from "./styled"

const StyledButton = ({ children, fontSize }) => {
  return <StyledBtn style={{ fontSize: fontSize }}>{children}</StyledBtn>
}

export default StyledButton
