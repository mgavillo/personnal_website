import * as React from "react"

function Background10(props) {
  return (
    <svg
      className="Game Background00 Screen03"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 2000 1200"
      {...props}
    >
      <defs>
        <radialGradient
          id="prefix__a"
          cx={215.87}
          cy={230.69}
          r={339.19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#39b54a" />
          <stop offset={0.09} stopColor="#2ea768" />
          <stop offset={0.29} stopColor="#1285b5" />
          <stop offset={0.41} stopColor="#006fe7" />
          <stop offset={0.64} stopColor="#003d34" />
          <stop offset={0.81} stopColor="#350063" />
          <stop offset={1} stopColor="#006837" />
        </radialGradient>
        <radialGradient
          id="prefix__b"
          cx={111.39}
          cy={9.11}
          r={90.2}
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__c"
          cx={99.05}
          cy={40.06}
          r={23.29}
          xlinkHref="#prefix__a"
        />
      </defs>
      <circle cx={83.68} cy={83.68} r={83.68} fill="url(#prefix__a)" />
      <ellipse
        cx={138.07}
        cy={57.74}
        rx={17.57}
        ry={25.94}
        fill="url(#prefix__b)"
      />
      <circle cx={107.95} cy={51.05} r={5.86} fill="url(#prefix__c)" />
    </svg>
  )
}

export default Background10