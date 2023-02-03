import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  width: 100%;
  padding: 0 14px;
  margin: 0 auto;
  max-width: 1300px;
  @media (max-width: 1300px) {
    width: 960px;
  }
  @media (max-width: 1024px) {
    width: 767px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`
