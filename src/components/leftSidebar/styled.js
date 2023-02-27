import styled from "styled-components"

export const SocialsWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: #a8b2d1;
`

export const Socials = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #a8b2d1;
  }
`

export const SocialLink = styled.a`
  padding: 10px;
  display: block;
  & > svg {
    width: 20px;
    height: 20px;
  }
`
