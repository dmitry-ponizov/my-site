import React from "react"

import { Email, EmailLink, EmailWrapper } from "./styled"

const RightSidebar = ({ email }) => {
  return (
    <EmailWrapper>
      <Email>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </Email>
    </EmailWrapper>
  )
}

export default RightSidebar
