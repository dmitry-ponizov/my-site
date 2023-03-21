import { TabList, Tabs } from "react-tabs"
import styled from "styled-components"

export const JobsWrapper = styled.section`
  max-width: 700px;
`

export const TabsContainer = styled(Tabs)`
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }
`

export const TabsWrapper = styled(TabList)`
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  border: none;

  @media (max-width: 600px) {
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    width: calc(100% + 100px);
    padding-left: 50px;
    margin: 0 0 30px -50px;
  }

  @media (max-width: 480px) {
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
  }

  &::-webkit-scrollbar {
    width: 12px;
    &-thumb {
      background-color: #495670;
      border: 3px solid var(--color-bg);
      border-radius: 10px;
    }
  }

  li {
    font-family: var(--font-mono);
    font-size: 13px;
    border: none;
    cursor: pointer;
    border-left: 2px solid var(--color-line);
    outline: none;
    border-radius: 0;
    color: var(--color-slate);
    padding: 12px 20px;
    white-space: nowrap;
    transition: var(--transition);

    @media (max-width: 600px) {
      border-left: none;
      border-bottom: 2px solid var(--color-line);
      min-width: 120px;
      text-align: center;
      padding: 12px;
    }

    &.react-tabs__tab--selected {
      border-left: 2px solid var(--color-accent);
      color: var(--color-accent);
      background-color: var(--color-light-bg);

      @media (max-width: 600px) {
        border-left: none;
        border-bottom: 2px solid var(--color-accent);
      }
    }

    &:focus:after {
      background: transparent;
    }

    &:hover {
      color: var(--color-accent);
      background-color: var(--color-light-bg);
    }
  }
`

export const PanelTitle = styled.h3`
  font-size: 19px;
  margin-top: 10px;
  font-weight: 600;

  span {
    &::after {
      content: "@";
      color: var(--color-accent);
      margin: 0 3px;
    }
  }

  p {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--color-light-slate);
    margin: 8px 0 18px 0;
    font-weight: 400;
  }

  a::after {
    bottom: 0.15em;
  }
`
