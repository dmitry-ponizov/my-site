import React from "react"

import { Email, EmailLink, EmailWrapper } from "./styled"

const RightSidebar = () => {
  return (
    <EmailWrapper>
      <Email>
        <EmailLink href="mailto:brittany.chiang@gmail.com">
          brittany.chiang@gmail.com
        </EmailLink>
      </Email>
    </EmailWrapper>
  )
}

export default RightSidebar
