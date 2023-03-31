import React from "react"

import { Email, EmailLink, EmailWrapper } from "./styled"

const RightSidebar = ({ email }) => {
  if (!email) {
    return null
  }

  return (
    <EmailWrapper
      data-aos="new-animation"
      data-aos-delay="1300"
      data-aos-duration="800"
    >
      <Email>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </Email>
    </EmailWrapper>
  )
}

export default RightSidebar
