import * as React from "react"
import {useEffect, useState} from "react";

const Background08 = (props) => {

  return (
    <svg
      className="Game Background01 Screen01" 
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 1200"
      {...props}
      transform={`translate(${-props.move * 1.5}, 530)`}
    >
      <defs>
        <style>{".prefix__cls-3{fill:#3500bd}"}</style>
      </defs>
      <path fill="#350063" d="M877.57 39.28h66v145h-66z" />
      <g opacity={0.5}>
        <path className="prefix__cls-3" d="M0 6.65h87.82v177.63H0z" />
        <path
          className="prefix__cls-3"
          d="M11.97.67h21.95v6.65H11.97zM53.22 0h21.95v6.65H53.22z"
        />
      </g>
    </svg>
  )
}

export default Background08