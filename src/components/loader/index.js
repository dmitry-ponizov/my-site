import React from "react"

import Logo from "../../images/logo.svg"

import { LoaderWrapper, LogoWrapper } from "./styled"

const Loader = () => {
  return (
    <LoaderWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </LoaderWrapper>
  )
}

export default Loader
