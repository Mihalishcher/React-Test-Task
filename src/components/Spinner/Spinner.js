function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="261px"
      height="16px"
      viewBox="0 0 212 13"
      style={{ margin: '0 auto', display: 'flex' }}
    >
      <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
      <linearGradient
        id="linear-gradient"
        gradientTransform="rotate(90)"
      >
        <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="linear-gradient2"
        gradientTransform="rotate(90)"
      >
        <stop offset="0%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
      </linearGradient>
      <g>
        <path
          fill="#000000"
          d="M-21.04 12.92l8.7-12.9 9-.08-8.3 
                13.05zm20 0L7.66.02l9-.08L8.36 13zm20
                0l8.7-12.9 9-.08L28.36 13zm20 0l8.7-12.9 9-.08L48.36 13zm20 0l8.7-12.9
                 9-.08L68.36 13zm20 0l8.7-12.9 9-.08L88.36 13zm20 0l8.7-12.9 9-.08-8.3
                 13.05zm20 0l8.7-12.9 9-.08-8.3 13.05zm20 0l8.7-12.9 9-.08-8.3 13.05zm20
                 0l8.7-12.9 9-.08-8.3 13.05zm20 0l8.7-12.9 9-.08-8.3 13.05zm20 0l8.7-12.9 9-.08-8.3
                  13.05zm20 0l8.7-12.9 9-.08-8.3 13.05zm20 0l8.7-12.9 9-.08-8.3 13.05z"
        />
        <path
          fill="#7a7a7a"
          d="M-19.75 12l7.42-11 7.66-.06-7.08 11.12zm20 0L7.67 1l7.66-.06-7.08
                     11.12zm20 0l7.42-11 7.66-.06-7.08 11.12zm20 0l7.42-11 7.66-.06-7.08 11.12zm20
                      0l7.42-11 7.66-.06-7.08 11.12zm20 0l7.42-11 7.66-.06-7.08 11.12zm20 0l7.42-11
                      7.66-.06-7.08 11.12zm20 0l7.42-11 7.66-.06-7.08 11.12zm20 0l7.42-11 7.66-.06-7.08
                      11.12zm20 0l7.42-11 7.66-.06-7.08 11.12zm20 0l7.42-11 7.66-.06-7.08 11.12zm20
                      0l7.42-11 7.66-.06-7.08 11.12zm20 0l7.42-11 7.66-.06-7.08 11.12zm20
                      0l7.42-11 7.66-.06-7.08 11.12z"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0 0"
          to="20 0"
          dur="900ms"
          repeatCount="indefinite"
        />
      </g>
      <path fill="#000000" d="M0,13V0H212V13H0ZM211,1H1V12H211V1Z" fillRule="evenodd" />
      <rect fill="url(#linear-gradient)" x="1" y="1" width="210" height="6" />
      <rect fill="url(#linear-gradient2)" x="1" y="10" width="210" height="3" />
    </svg>
  );
}

export default Spinner;
