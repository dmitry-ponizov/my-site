import styled from "styled-components"

export const EmailWrapper = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: var(--color-light-slate);

  &[data-aos="new-animation"] {
    opacity: 0;
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
    }
  }

  @media (max-width: 1024px) {
    right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &::after {
    content: "";
    width: 1px;
    height: 90px;
    background-color: var(--color-light-slate);
  }
`

export const EmailLink = styled.a`
  font-family: var(--font-mono);
  font-size: 12px;
  line-height: var(--line-height-normal);
  letter-spacing: 0.1em;
  padding: 10px;
  margin-bottom: 20px;
  writing-mode: vertical-rl;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-accent);
    transform: translateY(-3px);
  }
`
