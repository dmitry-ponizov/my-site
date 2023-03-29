import React from "react"
import { Tween } from "react-gsap"

import { LoaderWrapper, LogoWrapper } from "./styled"

const Loader = () => {
  return (
    <LoaderWrapper>
      <LogoWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="261.021"
          height="298.536"
          viewBox="0 0 261.021 298.536"
        >
          <Tween
            duration={1}
            delay={3}
            ease="Back.easeInOut"
            from={{
              opacity: 1,
            }}
            to={{
              opacity: 0,
            }}
          >
            <g transform="translate(-238.695 -107.379)">
              <Tween
                duration={1}
                delay={1.5}
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                }}
              >
                <text
                  transform="translate(305 324)"
                  fill="#63ffda"
                  fontSize="200"
                  fontFamily="SegoeUI-Semibold, Segoe UI"
                  fontWeight="600"
                >
                  <tspan x="0" y="0">
                    D
                  </tspan>
                </text>
              </Tween>
              <Tween
                duration={1.5}
                ease="Power2.easeInOut"
                from={{
                  svgDraw: 0,
                }}
                to={{
                  svgDraw: 1,
                }}
              >
                <path
                  d="M435.651,850.174l126.064-68.158V637.388L437.036,563.135,310.695,632.124V776.474Z"
                  transform="translate(-67 -450)"
                  fill="none"
                  stroke="#63ffda"
                  strokeWidth="15"
                />
              </Tween>
            </g>
          </Tween>
        </svg>
      </LogoWrapper>
    </LoaderWrapper>
  )
}

export default Loader
