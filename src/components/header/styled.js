import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: rgba(10, 25, 47, 0.85);
  padding: 0px 50px;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.2s ease, top 0.4s ease 0.2s;
  box-shadow: ${props => !props.isTop && "0 10px 30px -10px rgba(2,12,27,0.7)"};
  top: ${props => (props.isScrollDown ? "-100px" : 0)};

  a > svg {
    height: 42px;
    width: 42px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 1024px) {
    padding: 0px 40px;
  }

  @media (max-width: 768px) {
    padding: 0px 25px;
  }
`

export const Navigation = styled.nav`
  .burger {
    display: none;
    z-index: 10;
    font-size: 11px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    background-color: var(--accent);
    height: 0.2em;
  }
`

export const Navlist = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  & > button {
    font-size: 14px;

    @media (max-width: 768px) {
      padding: 18px 50px;
      margin-top: 40px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #112240;
    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    z-index: 10;
    width: min(75vw, 400px);
    height: 100vh;
    padding: 50px 10px;
    transition: all 0.4s ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100vw)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  }
`

export const NavlistItem = styled.li`
  & > a {
    transition: color 0.2s;
    font-size: 13px;
    font-family: var(--font-mono);

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 18px;
    }

    & > span {
      color: var(--accent);
      margin-right: 5px;

      @media (max-width: 768px) {
        font-size: 15px;
        margin: 0 0 8px 0;
      }
    }

    &:hover {
      color: var(--accent);
    }
  }
`
