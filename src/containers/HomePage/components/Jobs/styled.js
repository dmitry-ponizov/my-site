import styled from "styled-components"

export const JobsWrapper = styled.section`
  max-width: 700px;
  width: 100%;
  margin: 0px auto;
  padding: 100px 0px;
  @media (max-width: 768px) {
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }

  .react-tabs {
    display: flex;
    @media (max-width: 600px) {
      display: block;
    }

    &__tab {
      font-family: var(--font-mono);
      font-size: 14px;
      border: none;
      border-left: 2px solid #233554;
      border-radius: 0;
      color: var(--slate);
      padding: 12px 20px;
      white-space: nowrap;
      transition: var(--transition);

      @media (max-width: 600px) {
        border-left: none;
        border-bottom: 2px solid #233554;
        min-width: 120px;
        text-align: center;
        padding: 12px;
      }

      &--selected {
        border-left: 2px solid var(--accent);
        color: var(--accent);
        background-color: #112240;
        @media (max-width: 600px) {
          border-left: none;
          border-bottom: 2px solid var(--accent);
        }
      }

      &:focus:after {
        background: transparent;
      }

      &:hover {
        color: var(--accent);
        background-color: #112240;
      }

      &-list {
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
        }

        &::-webkit-scrollbar-thumb {
          background-color: #495670;
          border: 3px solid #0a192f;
          border-radius: 10px;
        }
      }
    }
  }
`

export const PanelTitle = styled.h3`
  font-size: 19px;
  line-height: 1.3;
  font-weight: 500;
  margin-top: 10px;
  font-weight: 600;

  span {
    &::after {
      content: "@";
      color: var(--accent);
      margin: 0 3px;
    }
  }

  p {
    font-family: var(--font-mono);
    font-size: 13px;
    color: #a8b2d1;
    margin: 8px 0 18px 0;
    font-weight: 400;
  }

  .sectionLink::after {
    bottom: 0.15em;
  }
`
