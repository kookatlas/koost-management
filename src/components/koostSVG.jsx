const Svg = () => {
  return (
    <>
      <style>{`
        @keyframes twist {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(20deg); }
        }
        .twist {
          display: inline-block;
          transform-origin: center;
          animation-name: twist;
          animation-duration: 4s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
      `}</style>

      <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="70" fontSize="60" fontFamily="Arial" fill="#dfd1d1ff">
          <tspan className="twist delay-0">K</tspan>
          <tspan className="twist delay-1">o</tspan>
          <tspan className="twist delay-2">o</tspan>
          <tspan className="twist delay-2">'</tspan>
          <tspan className="twist delay-3">s</tspan>
          <tspan className="twist delay-3">-</tspan>
          <tspan className="twist delay-4">t</tspan>
        </text>
      </svg>
    </>
  );
};

export default Svg;
