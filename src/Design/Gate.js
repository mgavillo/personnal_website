import * as React from "react"

function Gate(props) {
  return (
    <svg
      className = "Game"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 102.35 447.21"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={71.66}
          y1={-3.68}
          x2={48.14}
          y2={143.24}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0e4fc3" />
          <stop offset={0.17} stopColor="#0f4cbe" />
          <stop offset={0.36} stopColor="#1143b1" />
          <stop offset={0.55} stopColor="#15349b" />
          <stop offset={0.75} stopColor="#1b207c" />
          <stop offset={0.96} stopColor="#220655" />
          <stop offset={1} stopColor="#24004c" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={35.54}
          y1={20.72}
          x2={-13.54}
          y2={327.23}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={122.95}
          y1={3.3}
          x2={52.4}
          y2={443.91}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={50.66}
          y1={-3.74}
          x2={27.14}
          y2={143.19}
          xlinkHref="#prefix__a"
        />
      </defs>
      <path
        d="M95 142.33c0 2-1.16 16.35-3.18 1.57-2 1.54-4.91-20.29-8.38-8.82-3.47 18.13-7.52-4.87-11.85-12.19-4.34-19.53-9-16.49-13.59-3.76-4.63-13.13-9.25-20.36-13.59-17.39-4.33-34.58-8.41-41.81-11.85 1.44-3.47-45.66-6.36 5.87-8.38-5.42-2-33.13-3.18 21.83-3.18-1.82V18.61L95 .06v142.27z"
        fill="url(#prefix__a)"
      />
      <path fill="url(#prefix__b)" d="M0 18.56h22V329.4H0z" />
      <path fill="url(#prefix__c)" d="M73 0h29.35v447.21H73z" />
      <path
        d="M74 142.27c0 2-1.16 16.35-3.18 1.58-2 1.54-4.91-20.29-8.38-8.83-3.47 18.13-7.52-4.87-11.85-12.19-4.34-19.53-9-16.48-13.59-3.75-4.63-13.17-9.25-20.36-13.59-17.39-4.33-34.58-8.41-41.82-11.85 1.44C8.09 57.46 5.2 109 3.18 97.7 1.16 64.57 0 119.53 0 95.88V18.56L74 0v142.27z"
        fill="url(#prefix__d)"
      />
    </svg>
  )
}

export default Gate
