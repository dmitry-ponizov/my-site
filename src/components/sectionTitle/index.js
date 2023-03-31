import React from "react"

import { StyledTitle } from "./styled"

const SectionTitle = ({ children }) => {
  return (
    <StyledTitle
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
    >
      {children}
    </StyledTitle>
  )
}

export default SectionTitle
