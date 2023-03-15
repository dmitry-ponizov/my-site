import React from "react"

import { ActiveLink } from "./styled"

const StyledLink = ({ children, href }) => {
  return (
    <ActiveLink href={href} target="_blank" rel="noreferrer">
      {children}
    </ActiveLink>
  )
}

export default StyledLink
