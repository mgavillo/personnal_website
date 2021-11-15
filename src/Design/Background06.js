import * as React from "react"

function Background06(props) {
  return (
    <svg
      className="Game Background01 Screen06"
      id="prefix__Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2000 1200"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={1515.25}
          y1={-30.75}
          x2={1276.99}
          y2={307.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.15} stopColor="#2d2e89" />
          <stop offset={0.22} stopColor="#462b94" stopOpacity={0.94} />
          <stop offset={0.54} stopColor="#aa20c2" stopOpacity={0.7} />
          <stop offset={0.8} stopColor="#e81adf" stopOpacity={0.55} />
          <stop offset={0.96} stopColor="#ff17e9" stopOpacity={0.5} />
        </linearGradient>
        <style>{".prefix__cls-1{opacity:.5}"}</style>
      </defs>
      <path fill="#350063" d="M0 0h116.32v299.9H0z" />
      <path fill="#35008b" d="M93.58 155.93h115.66v147.03H93.58z" />
      <path
        fill="url(#prefix__linear-gradient)"
        opacity={0.5}
        d="M1300.13 65.25h129.95v234.02h-129.95z"
      />
    </svg>
  )
}

export default Background06