import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 100;
  background-color: rgba(10, 25, 47, 0.85);
  padding: 0px 50px;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.2s ease, top 0.4s ease 0.2s;
  box-shadow: ${props => !props.isTop && "0 10px 30px -10px rgba(2,12,27,0.7)"};
  top: ${props => (props.isScrollDown ? "-100px" : 0)};
`

export const HeaderLogo = styled.img`
  height: 42px;
  width: 42px;
`

export const Navlist = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const NavlistItem = styled.li`
  & > a {
    transition: color 0.2s;
    font-size: 13px;
    font-family: var(--font-mono);

    & > span {
      color: #64ffda;
      margin-right: 5px;
    }

    &:hover {
      color: #64ffda;
    }
  }
`
