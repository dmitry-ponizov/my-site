import styled from "styled-components"

export const SocialsWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: var(--color-light-slate);

  @media (max-width: 1024px) {
    left: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Socials = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    width: 1px;
    height: 90px;
    margin-top: 20px;
    background-color: var(--color-light-slate);
  }

  @media (max-width: 768px) {
    max-width: 270px;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;

    &::after {
      display: none;
    }
  }
`

export const SocialLink = styled.a`
  padding: 10px;
  display: block;

  &:hover {
    & > svg {
      stroke: var(--color-accent);
      transform: translateY(-3px);
    }
  }

  & > svg {
    transition: all 0.2s ease;
    width: 20px;
    height: 20px;
  }
`
