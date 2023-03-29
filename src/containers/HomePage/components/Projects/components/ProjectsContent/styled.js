import styled from "styled-components"

import { ProjectLink } from "../../styled"

export const ProjectContent = styled.div`
  text-align: right;
  grid-area: 1 / 1 / -1 / 7;
  grid-column: 7 / -1;

  @media (max-width: 1080px) {
    grid-column: 5 / -1;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    text-align: left;
  }

  @media (max-width: 480px) {
    padding: 25px 25px 20px;
  }
`

export const TitleName = styled.span`
  display: block;
  margin: 10px 0px;
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: 13px;
`

export const TitleLink = styled.a`
  font-size: clamp(24px, 5vw, 28px);
  color: #ccd6f6 !important;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  transition: var(--transition);

  &:hover {
    color: var(--color-accent) !important;
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export const ProjectText = styled.div`
  box-shadow: 0 10px 30px -15px var(--color-box-shadow);
  position: relative;
  right: 0;
  z-index: 5;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--color-light-bg);
  color: var(--color-light-slate);
  font-size: 15px;
  &:hover {
    box-shadow: 0 20px 30px -15px var(--color-box-shadow);

    @media (max-width: 768px) {
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0px;
    background-color: transparent;
    box-shadow: none;
  }

  p {
    margin-bottom: 10px;
    &:last-child {
      margin: 0;
    }
  }
`

export const TechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 25px 0 10px 0;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

export const TechItem = styled.li`
  color: var(--color-light-slate);
  font-family: var(--font-mono);
  font-size: 13px;
  white-space: nowrap;
  margin: 0 0 5px 20px;

  @media (max-width: 768px) {
    margin: 0 10px 5px 0;
  }
`

export const ProjectFeatured = styled.div`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-child(2n + 1) {
    ${ProjectLink} {
      grid-area: 1 / 6 / -1 / -1;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }

    ${ProjectContent} {
      grid-area: 1 / 1 / -1 / 7;
      text-align: left;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }

      ${TechList} {
        justify-content: flex-start;

        ${TechItem} {
          margin: 0 20px 5px 0;
        }
      }

      ul {
        justify-content: flex-start;
      }
    }
  }
`
