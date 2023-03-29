import styled from "styled-components"

import {
  ProjectContent,
  TechItem,
  TechList,
} from "./components/ProjectsContent/styled"
import { ProjectIcons } from "./components/ProjectsIcons/styled"

export const ProjectsWrapper = styled.section`
  max-width: 1000px;
`

export const ProjectLink = styled.a`
  position: relative;
  grid-area: 1 / 6 / -1 / -1;
  grid-column: 1 / 8;
  border-radius: var(--border-radius);

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    background: #1f4753;
    mix-blend-mode: color;
    transition: var(--transition);
  }

  & > * {
    height: 100%;
  }

  img {
    filter: grayscale(100%) contrast(0.8) brightness(90%);
    border-radius: var(--border-radius);
    height: 100%;
  }

  &:hover {
    &::before {
      background: transparent;

      @media (max-width: 768px) {
        background: #1f4753;
        box-shadow: 0 10px 30px -15px var(--color-box-shadow);
      }
    }

    img {
      filter: none;

      @media (max-width: 768px) {
        filter: grayscale(100%) contrast(0.8) brightness(90%);
      }
    }
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

      ${ProjectIcons} {
        justify-content: flex-start;
      }
    }
  }
`
